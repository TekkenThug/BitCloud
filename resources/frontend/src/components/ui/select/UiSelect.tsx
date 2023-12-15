import React from "react";
import Select from "react-select";

import "./UiSelect.scss";

interface UiSelectProps {
	className?: string,
	onChange: () => void,
}

const UiSelect: React.FC<React.ComponentProps<typeof Select> & UiSelectProps> = (props) => {
	return (
		<Select
			{...props}
			className={`UiSelect ${props.className ?? ""}`}
			classNamePrefix="UiSelect"
		/>
	);
};

export default UiSelect;
