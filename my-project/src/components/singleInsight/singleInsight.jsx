import React from 'react';
import {allInsights} from '../../data/mock data';

class SingleInsight extends React.Component{
    constructor(props){
        super(props);
        this.setState = {
            insightsArray : [],
            id:''
        }
    }
    componentDidMount = () =>{
        const {id}  = this.props.match.params;
        
        // this.setState({
        //     id: id
        // })
    }
    render(){    
        console.log("1", this.props.match.params )
        return (
            <div>
                <p>here</p>
                
            </div>
        )
    }
}

export default SingleInsight;