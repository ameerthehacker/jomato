import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import MicroFrontend from '../../components/micro-frontend';

function App() {
  return (
    <div>
      This is the layout
      <HashRouter basename={process.env.BASE_URL}>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/restaurants"} />
          </Route>
          <Route path={"/restaurants"} exact>
            <MicroFrontend name={"restaurants"} />
          </Route>
          <Route path={"/restaurants/:id"} exact>
            <MicroFrontend name={"restaurant-details"} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App;
