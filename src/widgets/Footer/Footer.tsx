import {Caption} from "@/shared/ui/Typography/Typography.tsx";

export default function Footer() {
    return (
        <footer className="w-[1090px] mx-auto mb-[15px] flex justify-between">
            <Caption text='&copy; piggyHODL all rights reserved'/>
            <ul className='flex gap-16'>
                <li><a href="/terms">
                    <Caption text="Terms of Use"/>
                </a></li>
                <li><a href="/privacy">
                    <Caption text="Privacy Policy"/>
                </a></li>
            </ul>
        </footer>
    );
}