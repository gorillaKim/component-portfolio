import { FC, ReactNode, CSSProperties, UIEvent } from "react";
export interface ScrollBoxProps {
    children: ReactNode;
    className?: string;
    width?: CSSProperties["width"];
    style?: CSSProperties;
    onClick?: (e: UIEvent<HTMLDivElement>) => void;
}
declare const ScrollBox: FC<ScrollBoxProps>;
export default ScrollBox;
