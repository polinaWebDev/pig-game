import { createBrowserRouter } from "react-router-dom";
import {HomePage} from "../pages/Home/HomeScreen.tsx";
import {IndexLayout} from "../widgets/Layout/ui/IndexLayout.tsx";

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

