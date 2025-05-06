import {createBrowserRouter} from "react-router";
import {HomePage} from "../pages/Home/HomeScreen.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/game-rules',
    }
])