import {Button} from "@/widgets/Button/Button.tsx";
import {Link} from "react-router";

export const Header = () => {
    return (
        <header className='flex items-center my-3'>
            <div className="flex max-w-[1312px] gap-12 mx-auto items-center justify-between w-full">
                <Link to={{
                    pathname: "/",
                }}>
                    <img src="logo.svg" alt=""/>
                </Link>
                <nav className="items-center w-full">
                    <ul className="flex justify-between items-center w-full">
                        <li className="flex items-center">
                            <Button
                                href="/game-rules"
                                noStyle
                                className="flex justify-center items-center text-black text-base font-semibold uppercase"
                            >
                                Game rules
                            </Button>
                        </li>
                        <li className="flex gap-2.5 p-2 items-center border border-gray-200 rounded-4xl">
                            <Button href="@test_piggygame_bot">
                                Join the game
                            </Button>
                            <img src="frame.svg" alt=""/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}