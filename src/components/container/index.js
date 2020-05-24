import React, { useState, useEffect } from 'react';

export default () => {
    const [data, dataSet] = useState([]);

    const [{ id, name }, setCurrentRow] = useState({
        "id": 0,
        "name": ""
    });

    const saveButtonClicked = () => {
        if (id !== 0 && id.toString().length > 0 && name.length > 0) {
            dataSet(st => ([...st, { id, name }]));
            setCurrentRow(({ "id": 0, "name": "" }))
        } else {
            alert("Fields must not be empty");
        }
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    return <div className="_conatiner">
        <input
            value={id}
            onChange={(e) => {
                let id = e.currentTarget.value;
                setCurrentRow(row => ({ ...row, "id": id }));
            }} placeholder="id" />
        <input
            value={name}
            onChange={(e) => {
                let name = e.currentTarget.value;
                setCurrentRow(row => ({ ...row, "name": name }));
            }} placeholder="name" />

        <button onClick={saveButtonClicked}>Save</button>
    </div>
}