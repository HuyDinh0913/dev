import React from "react";
import './DisplayInfo.scss';

class DisplayInfo extends React.Component {
    state = {
        isShowListuser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListuser: !this.state.isShowListuser
        })

    }

    render() {
        const { listUsers } = this.props;
        return (
            <div className="display-info-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListuser ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListuser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age < 40 ? "red" : "green"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's  {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>}
            </div>
        );
    }
}

export default DisplayInfo;