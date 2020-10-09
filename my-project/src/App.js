import React from 'react';
// import './App.css';
// import HomePage from './components/homepage/homepage'
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <Header/>
      <NavBar/>
    </div>
  );
}

export default App;
