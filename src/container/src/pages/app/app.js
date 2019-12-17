import React from 'react';
import { 
  HashRouter, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import MicroFrontend from '../../components/micro-frontend';

const Restaurants = <MicroFrontend 
                      name={"MfRestaurants"} 
                      host={"/restaurants"} 
                    />;
const RestaurantDetails = <MicroFrontend 
                            name={"MfRestaurantDetails"}
                            host={"/restaurant-details"}
                          />;                  

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
            {Restaurants}
          </Route>
          <Route path={"/restaurants/:id"} exact>
            {RestaurantDetails}
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App;
