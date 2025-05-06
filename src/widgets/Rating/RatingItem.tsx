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
                <div className='flex gap-0.5 items-center'>
                    <Subtitle text={pigsAmount}/>
                    <img src="piggy.svg" alt=""/>
                </div>
            </header>
            <main className='flex justify-between'>
                <div className='flex gap-0.5 items-center'>
                    <img src="ticket.svg" alt=""/>
                    <Text text={`${ticketsAmount} tickets`}/>
                </div>
                <div className='flex gap-0.5 items-center'>
                    <img src="referral.svg" alt=""/>
                    <Text text={`${referrals} referrals`}/>
                </div>
            </main>
        </div>
    )
}