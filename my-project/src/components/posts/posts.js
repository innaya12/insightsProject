import React from 'react';
import BuildPosts from './buildPosts'

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index:'',
            text:'',
            stats:''
        }
    };

    render(){
        return (
            <div>
                <BuildPosts index={this.index}
                            text={this.text}
                            stats={this.stats}/>

            </div>
        )
    }
}

export default Posts;