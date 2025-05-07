import RatingItem from "@/widgets/Rating/RatingItem.tsx";
import {useLeaderboardInfinite} from "@/shared/hooks/useLeaderboardInfinite.ts";
import {useEffect, useRef} from "react";

export default function RatingList() {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useLeaderboardInfinite();
    console.log(hasNextPage); // true

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loader = loaderRef.current;
        const scrollContainer = scrollContainerRef.current;
        if (!loader || !scrollContainer || !hasNextPage) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log("Intersecting");
                    fetchNextPage();
                }
            },
            {
                root: scrollContainer,
                threshold: 0.1,
                rootMargin: '15px',
            }
        );

        observer.observe(loader);

        return () => observer.disconnect();
    }, [hasNextPage, fetchNextPage]);

    const users = data?.pages.flatMap(p => p.items) ?? [];

    return (
        <div ref={scrollContainerRef} className="flex flex-col gap-3 max-h-[585px] overflow-y-auto">
            {users?.map((item, index) => (
                <div
                    key={item.id}
                    className={`first:bg-[#F2CDEF] bg-[#FFF2FE] px-5 py-3 rounded-[25px]`}
                >
                    <RatingItem
                        username={item.username!}
                        pigsAmount={(item.pigsAmount ?? 0).toString()}
                        referrals={(item.referrals ?? 0).toString()}
                        ticketsAmount={(item.ticketsAmount ?? 0).toString()}
                        rating={(index + 1).toString()}
                    />
                </div>
            ))}
            <div ref={loaderRef} className="h-20 flex items-center justify-center">
                {isFetchingNextPage && (
                    <div className="w-6 h-6 border-4 border-gray-300 border-t-[#F2CDEF] rounded-full animate-spin" />
                )}
            </div>
        </div>
    );

}
