import {fetchLeaderboard} from "@/shared/api/leaderboard.ts";
import {useInfiniteQuery} from "@tanstack/react-query";


export const useLeaderboardInfinite = () => {
    return useInfiniteQuery({
        queryKey: ['leaderboard'],
        queryFn: async ({ pageParam = 0 }) => {
            const data = await fetchLeaderboard(pageParam);
            return {
                items: data.items,
                total: data.totalItems,
                nextOffset: pageParam + data.items.length,
            };
        },
        getNextPageParam: (lastPage, allPages) => {
            const loaded = allPages.flatMap(p => p.items).length;
            console.log(loaded) // 5
            console.log('total', lastPage.total) //20
            console.log('nextOffset', lastPage.nextOffset) // 5
            return loaded < lastPage.total ? lastPage.nextOffset : undefined;
        },
        initialPageParam: 0,
    });
};