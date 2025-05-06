import React from "react";
import styles from './button.module.css'
import clsx from "clsx";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    noStyle?: boolean;
};

export const Button = ({ href, children, className, noStyle = false }: ButtonProps) => {
    return (
        <a
            href={href}
            className={clsx(!noStyle && styles.button, className)}
        >
            {children}
        </a>
    );
};