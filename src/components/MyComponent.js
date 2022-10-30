import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";
import React, { useState } from "react";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [{ id: 1, name: 'Thanh Hoang', age: '48' },
        { id: 2, name: 'Thanh Huy', age: '41' },
        { id: 3, name: 'Thien Nha', age: '28' },
        { id: 4, name: 'Dinh Tung', age: '33' },
        { id: 5, name: 'Hoang Quan', age: '38' }]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUsers];
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUsers(listUserClone)
    }

    //DRY don't repeat yourself
    //JSX
    return (
        <div>
            <AddUserInfo handleAddNewUser={handleAddNewUser} />
            <br />
            <DisplayInfo listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );


}

export default MyComponent;