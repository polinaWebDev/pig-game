import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    noStyle?: boolean;
};

export const Button = ({ href, children, className, noStyle = false }: ButtonProps) => {
    return (
        <button
            onClick={() => (window.location.href = href)}
            className={clsx(!noStyle && styles.button, className)}>
            {children}
        </button>
    );
};