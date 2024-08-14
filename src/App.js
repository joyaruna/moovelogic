import React from 'react';
import Splash from './screens/Splash'
import FirstSlide from './screens/FirstSlide';
import SecondSlide from './screens/SecondSlide';
import ThirdSlide from './screens/ThirdSlide';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/firstslide">
          <FirstSlide />
        </Route>
        <Route path="/secondslide">
          <SecondSlide />
        </Route>
        <Route path="/thirdslide">
          <ThirdSlide />
        </Route>
        <Route path="/loginscreen">
          <LoginScreen />
        </Route>
        <Route path="/">
          <Splash />
        </Route>
      </Switch>
    </Router>
  </div>

);

export default App;