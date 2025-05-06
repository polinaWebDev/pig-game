import { createBrowserRouter } from "react-router-dom";
import {IndexLayout} from "@/widgets/Layout/ui/IndexLayout.tsx";
import {HomePage} from "@/pages/Home/HomeScreen.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
        ]
    }
])

