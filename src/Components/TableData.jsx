import React, { useState, useEffect } from "react";

const TableData = (props) => {
    const [value, setValue] = useState("< Tom >");
    const [isActive, setIsActive] = useState(false);

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };
    
    const onBlurHandler = () => {
        setIsActive(false);
    };

    const onClick = () => {
        setIsActive(true);
    };

    useEffect(() => {
        if (!isActive) {
            props.onChange({ name: props.name, newValue: value });
        }
    }, [isActive]);

    return (
        <>
            {isActive ? (
                <input
                    autoFocus
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                    type="text"
                    value={value}
                />
            ) : (
                <td onClick={onClick}>{value}</td>
            )}
        </>
    );
};

export default TableData;
