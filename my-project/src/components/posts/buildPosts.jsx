import React from 'react';

class BuildPosts extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        const {index, text, stats} = this.props;
        return (
            <div>
                <h2>{index, text} </h2>

            </div>
        )
    }
}

export default BuildPosts;