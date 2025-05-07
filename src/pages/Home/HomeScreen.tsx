import RatingList from "@/widgets/Rating/RatingList.tsx";
import {Title} from "@/shared/ui/Typography/Typography.tsx";
import Info from "@/widgets/Info/Info.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchLeaderboard} from "@/shared/api/leaderboard.ts";

export default function HomeScreen() {
    const {data, isLoading} = useQuery({
        queryKey: ['scoreboard'],
        queryFn: () => fetchLeaderboard(0, 20),
        select: data => data.totalItems
    })

    return (
        <div className="flex justify-between">
            <div className="flex w-[533px] flex-col gap-6">
                <header className="flex justify-between items-center">
                    <Title text='Scoreboard'/>
                    <p className="rounded-3xl bg-[#FFF2FE] p-3.5">
                        {isLoading ? '...' : data + ' pretenders'}
                    </p>
                </header>
                <RatingList/>
            </div>
            <Info/>
        </div>
    )
}