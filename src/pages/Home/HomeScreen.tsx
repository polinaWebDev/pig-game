import RatingList from "@/widgets/Rating/RatingList.tsx";
import {Title} from "@/shared/ui/Typography/Typography.tsx";
import Info from "@/widgets/Info/Info.tsx";

export const HomePage = () => (
    <div className="flex justify-between">
        <div className="flex w-[533px] flex-col gap-6">
            <header className="flex justify-between items-center">
                <Title text='Scoreboard'/>
                <p className="rounded-3xl bg-[#FFF2FE] p-3.5">
                    148 pretenders
                </p>
            </header>
            <RatingList/>
        </div>
        <Info/>
    </div>
);