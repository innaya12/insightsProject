import React from 'react';
import BuildInsights from './buildInsights'
import {allInsights, process} from '../../data/mock data';

class Insights extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            insightsArray : allInsights,
            processArray: process.insights
        }
    };

    render(){
        const {insightsArray, processArray} = this.state;
        return (
            <div className={"container-fluid boxWrapper"}>
                <div className={"container"}>
                    <div className={"d-flex flex-column"}>
                        {insightsArray.map(insight => <BuildInsights {...insight} 
                                                        key={insight.index} />)}
                        {processArray.map(insight => <BuildInsights {...insight} 
                                                        key={insight.id} />)}

                    </div>
                </div>
            </div>
        )
    }
}

export default Insights;