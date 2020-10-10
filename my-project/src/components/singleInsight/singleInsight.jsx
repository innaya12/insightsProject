import React from 'react';
import {allInsights} from '../../data/mock data';

class SingleInsight extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index : '',
            text:'',
            stats:''
        }
    }

    componentDidMount = () =>{
        const {id}  = this.props.match.params;
        const data = allInsights.find(x => x.index == id);
        const {index, text, stats} = data
        this.setState({
            index,
            text,
            stats
        })       
    }

    render(){    
        const {stats, text, index} = this.state;
        return (
            <div className={"container mt-5"}>
                <div className={"d-flex text-right"}>
                    {this.state.index && 
                    <div>
                        <h3>{index}</h3>
                        <h4>{text}</h4>
                        <p>{stats}</p>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default SingleInsight;