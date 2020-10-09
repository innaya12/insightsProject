import React from 'react';
import './style.css';

class BuildInsights extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        const {index, text, stats} = this.props;
        return (
            <div className={"box"}>
                <div className={"titleDiv"}>
                    <h2 className={"title"}>{index}</h2>
                </div>
                <div className={"insideBox"}>
                    {/* <p>fsdfsdfds</p> */}
                    <div className={"middleBox"}>
                        <p>{text} </p> 
                    </div>
                    <div className={"bottomBox"}>
                        <p>{stats}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildInsights;