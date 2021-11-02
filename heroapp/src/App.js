import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { XpProvider } from './xpContext';
import GlobalVariables from './createVariables';
import Home from './Home/Home'
import AffirmationSelection from './AffirmationSelection/AffirmationSelection'
import Player from './Player/Player';
import affType from './affType/affType';
import affExplorer from './affType/affExplorer';
import affSoul from './affType/affSoul';
import affSpirit from './affType/affSpirit';
import affStrat from './affType/affStrat';
import affDruid from './affType/affDruid';
import './App.css';
import './index.css';
import Feedback from "feeder-react-feedback";
import "feeder-react-feedback/dist/feeder-react-feedback.css";
import subForm from './submitScore';

class App extends Component {
  
  async componentDidMount() {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function(event) {
       window.history.pushState(null, document.title, window.location.href);
    });
  }

  render() {
    GlobalVariables.createVariables()
    
    return (

        <div className="App">
          <Feedback projectId='6171d6e765b82c00045239df' />
          <Route exact path='/' component={Home}/>
          <Route exact path='/affirmation' component={AffirmationSelection}/>
          <Route exact path='/video' component={Player}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/affExplorer' component={affExplorer} />
          <Route exact path='/affSoul' component={affSoul} />
          <Route exact path='/affSpirit' component={affSpirit} />
          <Route exact path='/affStrat' component={affStrat} />
          <Route exact path='/affDruid' component={affDruid} />
          <Route exact path='/affChosen' component={affType} />
          <Route exact path='/subForm' component={subForm} />
          
        </div>
    );
  }
}

export default App;