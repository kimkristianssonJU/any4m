import React, { useState } from "react";
import TableData from "./TableData";

const TableRow = () => {
    const [object, setObject] = useState({
        status: "",
        key: "",
        summary: "",
        testStatus: "",
    });

    const onChangeHandler = ({ name, newValue }) => {
        switch (name) {
            case "status":
                setObject((prevObj) => {
                    return { ...prevObj, status: newValue };
                });
                break;
            case "key":
                setObject((prevObj) => {
                    return { ...prevObj, key: newValue };
                });
                break;
            case "summary":
                setObject((prevObj) => {
                    return { ...prevObj, summary: newValue };
                });
                break;
            case "test":
                setObject((prevObj) => {
                    return { ...prevObj, testStatus: newValue };
                });
                break;

            default:
                break;
        }

        console.log(object);
    };

    return (
        <>
            <tr>
                <TableData onChange={onChangeHandler} name={"status"} />
                <TableData onChange={onChangeHandler} name={"key"} />
                <TableData onChange={onChangeHandler} name={"summary"} />
                <TableData onChange={onChangeHandler} name={"test"} />
            </tr>
        </>
    );
};

export default TableRow;
