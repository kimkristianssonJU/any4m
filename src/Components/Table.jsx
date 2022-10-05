import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Table = () => {
    const [rows, setRows] = useState([]);
    const [queryArray, setQueryArray] = useState([]);

    const query = () => {
        // Fetch
        // setQueryArrey
    }

    const onAddClick = () => {
        setRows((prevRows) => {
            return [
                ...prevRows,
                {
                    Row: TableRow,
                },
            ];
        });
    };

    useEffect(() => {
        // query();
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Key</th>
                        <th>Summary</th>
                        <th>Test Status</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.length > 0 &&
                        rows.map(({ Row }, key) => <Row key={key} />)}
                </tbody>
            </table>
            <button onClick={onAddClick}>+</button>
        </>
    );
};

export default Table;
