import {Text, Title} from "@/shared/ui/Typography/Typography.tsx";
import {Button} from "@/widgets/Button/Button.tsx";

export default function Info() {
    return (
        <>
            <div className='flex flex-col gap-6'>
                <section className='w-[533px] max-h-[206px] py-6 px-6 flex flex-col items-center justify-center bg-[#FFF2FE] rounded-3xl'>
                    <h2 className='text-[75px] leading-120px text-[var(--pink)]'>1110</h2>
                    <h3 className='text-[32px] font-extralight'>TON on bank</h3>
                </section>
                <section className='w-[533px] relative py-6 px-6 flex flex-col bg-[#FFF2FE] rounded-3xl items-start'>
                    <header className='mb-8'>
                        <Title text='1000 piggies'/>
                        <Text text='For subscription on PiggyHODL in telegram'/>
                    </header>
                    <Button href='https://t.me/piggyhodl_news'>
                        Subscribe
                    </Button>
                    <img src="first-pig.svg" className='absolute top-[118px] right-[30px]' alt=""/>
                </section>
                <section className='w-[533px] py-6 px-6 flex gap-11 flex-col bg-[#FFF2FE] rounded-3xl justify-center items-end'>
                    <div className='flex gap-11 flex-col items-center justify-center relative'>
                        <Title text="Join the game"/>
                        <Button href='https://t.me/piggyhodl_news'>
                            Play piggygame
                        </Button>
                        <img src="second-pig.svg" className='absolute bottom-[-24px] right-[300px]' alt=""/>
                    </div>
                </section>
            </div>
        </>
    )
}