import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import type {ScoreboardPagedList} from "@/shared/sdk";
import RatingItem from "@/widgets/Rating/RatingItem.tsx";

export default function RatingList() {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['rating'],
        queryFn: async () => {
            const res = await axios.get<ScoreboardPagedList>('https://devgame.piggyhodl.xyz/api/User/scoreboard?Limit=10&Offset=1')
            if (!res.data) return null
            console.log(res.data)
            return res.data
        },
        select: list => list?.items
    })

    if (isError) {
        console.error(error)
    }

    return (
        <div className="flex flex-col gap-2">
            {isLoading && <p>Loading...</p>}
            <div className="flex flex-col gap-3 max-h-[552px] overflow-x-auto">
                {data?.map((item, index) => (
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
            </div>
        </div>
    )

}
