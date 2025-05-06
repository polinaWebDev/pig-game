import {Outlet} from "react-router-dom";
import {Header} from "@/widgets/Header/Header.tsx";
import styles from './IndexLayout.module.css';


export const IndexLayout = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <Outlet></Outlet>
            </div>
            <footer></footer>
        </>
    )
}