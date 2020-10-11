import React from 'react';
import Header from '../header/header';
import NavBar from '../navbar/navbar';
import Insights from '../insights/insights'
import Widget from '../widget/widget';

class HomePage extends React.Component{

    render(){
        return (
            <div>
                <Header/>
                <NavBar/>
                <Widget/>
                <Insights/>
            </div>
        )
    }
};


export default HomePage;