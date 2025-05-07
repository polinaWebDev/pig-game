import { createBrowserRouter } from "react-router-dom";
import {IndexLayout} from "@/widgets/Layout/ui/IndexLayout.tsx";
import RulesScreen from "@/pages/Rules/RulesScreen.tsx";
import HomeScreen from "@/pages/Home/HomeScreen.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
            {
                path: '/game-rules',
                element: <RulesScreen/>
            }
        ]
    }
])

