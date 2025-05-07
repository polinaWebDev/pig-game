import {Outlet} from "react-router-dom";
import {Header} from "@/widgets/Header/Header.tsx";
import styles from './IndexLayout.module.css';
import Footer from "@/widgets/Footer/Footer.tsx";


export const IndexLayout = () => {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}