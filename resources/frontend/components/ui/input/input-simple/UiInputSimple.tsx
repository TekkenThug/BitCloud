import { FC, useState } from "react";

import "./UiInputSimple.scss";

import Eye from "@/assets/icons/ui/eye.svg?react";

interface Props {
	type?: string;
	label?: string;
	placeholder?: string;
	className?: string;
    hasShowPassword?: boolean;
    onChange: (value: string) => void;
}

const UiInputSimple: FC<Props> = (
    {
        type = "text",
        label = "",
        placeholder = "",
        className = "",
        hasShowPassword = false,
        onChange,
    }
) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputField =
        <div className="UiInputSimple__inputWrapper">
            <input
                className="UiInputSimple__nativeInput"
                type={ type === "password" ? showPassword ? "text" : "password" : type }
                placeholder={ placeholder }
                onChange={ ({ target }) => onChange(target.value) }
            />

            { hasShowPassword &&
                <button className="UiInputSimple__showPasswordButton" onClick={ () => setShowPassword(!showPassword) }>
                    <Eye />
                </button>
            }
        </div>;
    const inputFieldWithLabel = <label className="UiInputSimple__label"><span>{ label }</span>{ inputField }</label>;

    return (
        <div className={ `${className}` }>
            {
                label ? inputFieldWithLabel : inputField
            }
        </div>
    );
};

export default UiInputSimple;
