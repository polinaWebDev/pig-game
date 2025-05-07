import {fetchLeaderboard} from "@/shared/api/leaderboard.ts";
import {useInfiniteQuery} from "@tanstack/react-query";

export const useLeaderboardInfinite = () => {
    return useInfiniteQuery({
        queryKey: ['leaderboard'],
        queryFn: async ({ pageParam = 0 }) => {
            const data = await fetchLeaderboard(pageParam);
            if (!data || !data.items) return null;
            return {
                items: data.items,
                total: data.totalItems,
                nextOffset: pageParam + data.items!.length,
            };
        },
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage || !lastPage.items || !lastPage.total) return null;
            const loaded = allPages.flatMap(p => p.items).length;
            console.log(loaded)
            console.log('total', lastPage.total) // 20
            console.log('nextOffset', lastPage.nextOffset) // 10
            return loaded < lastPage.total ? lastPage.nextOffset : undefined;
        },
        initialPageParam: 0,
    });
};