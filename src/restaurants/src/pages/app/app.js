import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Restaurants from '../restaurants';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/restaurants"} />
        </Route>
        <Route path={"/restaurants"} exact>
          <Restaurants />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;
