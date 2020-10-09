import React from 'react';
// import HomePage from './components/homepage/homepage'
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Insights from './components/insights/insights'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
    <div className="App">
      {/* <HomePage/> */}
      <Header/>
      <NavBar/>
      <Insights/>
      </div>
    );
  }
}

export default App;