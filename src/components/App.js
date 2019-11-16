import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from './Detail';
import Home from './Home';


const App = (props) => {
        return (
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:slug">
                <Detail />
              </Route>
            </Switch>
          </Router>
        );
}


export default App
