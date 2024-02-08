import { ComponentProps, FC } from "react";
import Select from "react-select";
import classNames from "classnames";

import "./UiSelect.scss";

interface Props extends ComponentProps<typeof Select> {
	className?: string,
	onChange: () => void,
}

const UiSelect: FC<Props> = (props) => {
    const classes = classNames("UiSelect", props.className);
    return (
        <Select
            { ...props }
            className={ classes }
            classNamePrefix="UiSelect"
        />
    );
};

export default UiSelect;
