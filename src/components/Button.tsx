import { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

interface BT {
    className?: string;
    href?: string;
    children: ReactNode,
    onClick?: () => void;
    px?: string;
    white?: string
}

const Button = ({ children, className, href, onClick, px, white }: BT) => {

    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
    const spanClasses = 'relative z-10'

    const renderButton = (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

    if (href) return renderLink;
  return renderButton;
}

export default Button