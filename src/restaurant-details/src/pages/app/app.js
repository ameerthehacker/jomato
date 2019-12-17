import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import RestaurantDetails from '../restaurant-details';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={"/restaurants/:id"} exact>
          <RestaurantDetails />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;
