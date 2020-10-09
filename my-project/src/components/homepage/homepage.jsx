import React from 'react';
import Header from '../header/header';
import NavBar from '../navbar/navbar';
// import Insights from '../insights/insights'
class HomePage extends React.Component{

    render(){
        return (
            <div>
                <Header/>
                <NavBar/>
            </div>
        )
    }
};


export default HomePage;