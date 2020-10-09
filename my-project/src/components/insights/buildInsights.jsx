import React from 'react';

class BuildInsights extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        const {index, text, stats} = this.props;
        return (
            <div className={"card"}>
                <p>{index}</p>
                <p>{text} </p>
                <p>{stats}</p>
            </div>
        )
    }
}

export default BuildInsights;