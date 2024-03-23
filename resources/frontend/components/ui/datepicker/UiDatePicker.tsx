import { FC } from "react";
import ReactDatePicker from "react-datepicker";
import classNames from "classnames";

import styles from "./UiDatePicker.module.scss";

import Calendar from "@/assets/icons/contacts/calendar.svg?react";

interface Props {
    label?: string;
    placeholder?: string;
    onChange: () => void;
    value: Date;
    error?: string;
    className?: string;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
}

const UiDatePicker: FC<Props> = ({
    placeholder = "",
    label = "",
    error = "",
    className = "",
    format = "dd.MM.yyyy",
    minDate,
    maxDate,
    onChange,
    value,
}) => {
    const inputClasses = classNames(className, styles.UiDatePicker, {
        [styles.error]: error,
    });

    const inputField = (
        <>
            <div className={styles.datepickerWrapper}>
                <ReactDatePicker
                    className={styles.datepicker}
                    onChange={onChange}
                    selected={value}
                    placeholderText={placeholder}
                    dateFormat={format}
                    minDate={minDate}
                    maxDate={maxDate}
                    onKeyDown={(e) => {
                        e.preventDefault();
                    }}
                />

                <Calendar className={styles.calendarIcon} />
            </div>

            <span className={styles.errorField}>{error}</span>
        </>
    );

    const inputFieldWithLabel = (
        <label className={styles.label}>
            <span className={styles.labelText}>{label}</span>

            {inputField}
        </label>
    );

    return <div className={inputClasses}>{label ? inputFieldWithLabel : inputField}</div>;
};

export default UiDatePicker;
