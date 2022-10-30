import React, { useState } from "react";
import './DisplayInfo.scss';

const DisplayInfo = (props) => {

    const { listUsers } = props;
    const [isShowListuser, setShowHideListUser] = useState(true);

    const handleShowHieListUser = () => {
        setShowHideListUser(!isShowListuser);
    }

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => { handleShowHieListUser() }}>
                    {isShowListuser ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowListuser &&
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age < 40 ? "red" : "green"}>
                                <div>My name's {user.name}</div>
                                <div>My age's  {user.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>}
        </div>
    );

}

export default DisplayInfo;