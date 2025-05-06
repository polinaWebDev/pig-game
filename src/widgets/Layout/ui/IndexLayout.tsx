import {Outlet} from "react-router-dom";


export const IndexLayout = () => {
    return (
        <>
            <header>hehe</header>
            <div>Test Content</div>
                <Outlet></Outlet>
            <footer></footer>
        </>
    )
}