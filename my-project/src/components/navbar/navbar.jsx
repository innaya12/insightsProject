import React from 'react';
import './style.css';

class NavBar extends React.Component {

    render() {
        return (
            <div className={"container"}>
                <ul className={"d-flex navBar justify-content-between"}>
                    <li>רקע</li>
                    <li>תשובות</li>
                    <li>תובנות</li>
                    <li>החלטות</li>
                </ul>
            </div>
        )
    }
};

export default NavBar;