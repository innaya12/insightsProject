import React from 'react';
import BuildInsights from './buildInsights'
import {allInsights} from '../../data/mock data';

class Insights extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            insightsArray : allInsights
        }
    };


    render(){
        const {insightsArray} = this.state;
        return (
            <div className={"container"}>
                <div className={"d-flex flex-column align-items-right"}>
                    {insightsArray.map(insight => <BuildInsights {...insight} 
                                                                    key={insight.index} />)}
                </div>
            </div>
        )
    }
}

export default Insights;