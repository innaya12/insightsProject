import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './components/homepage/homepage'
import SingleInsight from './components/singleInsight/singleInsight'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route path={"/insights/:id"} component={SingleInsight} />
          <Route path={"/"} component={HomePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;