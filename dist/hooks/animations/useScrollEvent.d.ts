import { MouseEvent } from "react";
interface useScrollEventReturn {
    handlers: {
        onMouseUp: (e: MouseEvent<HTMLDivElement>) => void;
        onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
        onMouseLeave: (e: MouseEvent<HTMLDivElement>) => void;
        onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
    };
    isActive: boolean;
}
declare const useScrollEvent: () => useScrollEventReturn;
export default useScrollEvent;
