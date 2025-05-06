import {Subtitle, Text} from "@/shared/ui/Typography/Typography.tsx";

interface RatingItemProps {
    username: string,
    pigsAmount: string,
    referrals: string,
    ticketsAmount: string,
    rating: string
}

export default function RatingItem({ username, pigsAmount, referrals, ticketsAmount, rating }: RatingItemProps) {

    return (
        <div
            className="flex flex-col gap-3"
        >
            <header className='flex justify-between'>
                <div className='flex gap-1'>
                    <Subtitle text={`#${rating}`}/>
                    <Subtitle text={`@${username}`}/>
                </div>
                <Subtitle text={pigsAmount}/>
            </header>
            <main className='flex justify-between'>
                <Text text={`${ticketsAmount} tickets`}/>
                <Text text={`${referrals} referrals`}/>
            </main>
        </div>
    )
}