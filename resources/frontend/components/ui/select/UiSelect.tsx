import Select, { GroupBase, Props } from "react-select";
import classNames from "classnames";

import "./UiSelect.scss";

const UiSelect = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(
    props: Props<Option, IsMulti, Group>,
) => {
    const classes = classNames("UiSelect", props.className);

    return (
        <Select
            {...props}
            className={classes}
            classNamePrefix="UiSelect"
        />
    );
};

export default UiSelect;
