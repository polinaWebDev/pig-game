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
            onClick={() => window.open(href, '_blank')}
            formTarget={'_blank'}
            className={clsx(!noStyle && styles.button, className)}>
            {children}
        </button>
    );
};