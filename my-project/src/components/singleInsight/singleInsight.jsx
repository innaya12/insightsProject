import React from 'react';
import {allInsights, process} from '../../data/mock data';

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
        const fakeData = allInsights.find(x => x.index == id);
        if(fakeData){
            const {index, text, stats} = fakeData
            this.setState({
                index,
                text,
                stats
            })       
        } else {
            const dataProcess = process.insights.find(x => x.id == id);
            this.setState({
                index: dataProcess.id,
                text: dataProcess.data,
                stats: dataProcess.statistics.publishedContributionsPercent
            })      
        }
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