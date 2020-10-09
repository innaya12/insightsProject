import React from 'react';
import './style.css';
import Insights from '../insights/insights';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent: false
        };
    }

    onShow=()=>{
        console.log("clicked", this.state.showComponent);
        this.setState({
            showComponent: true
        })
        console.log("worked")
    }

    render() {
        return (
            <div className={"container"}>
                <ul className={"d-flex navBar justify-content-between"}>
                    <li>רקע</li>
                    <li>תשובות</li>
                    <li onClick={this.onShow}>תובנות</li>
                    <li>החלטות</li>
                </ul>
                {this.state.showComponent === true &&
                <div>
                    <p>
                        here
                    </p>
                    <Insights />

                </div>
                }
            </div>
        )
    }
};

export default NavBar;