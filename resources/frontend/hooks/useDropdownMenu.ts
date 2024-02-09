import { RefObject, useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";

type Options = Record<string, [activeState: number | string, inactiveState: number | string]>;

const useDropdownMenu = <T extends HTMLElement>(list: RefObject<T>, options: Options = {}) => {
    const [isVisible, toggleVisibility] = useState(false);
    const [listHeight, setListHeight] = useState(0);

    const empty: Record<string, number | string> = {};
    Object.keys(options).forEach((key) => {
        empty[key] = isVisible ? options[key][0] : options[key][1];
    });

    const slideDownAnimation = useSpring({
        to: {
            height: isVisible ? listHeight + 20 : 0,
            ...empty,
        },
    });

    useEffect(() => {
        if (list && list.current) {
            setListHeight(list.current.offsetHeight);
        }
    }, []);

    return {
        isVisible,
        toggleVisibility,
        slideDownAnimation,
    };
};

export default useDropdownMenu;
