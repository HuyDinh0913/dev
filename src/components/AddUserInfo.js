import React, { useState } from "react";

const AddUserInfo = (props) => {
    const [name, setName] = useState("Huy Dinh");
    const [age, setAge] = useState("41");
    const [address, setAddress] = useState("Binh Thanh");

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100),
            name: name,
            age: age
        });
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }

    return (
        <div>
            My name is {name} and I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <label>Your age: </label>
                <input
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default AddUserInfo;