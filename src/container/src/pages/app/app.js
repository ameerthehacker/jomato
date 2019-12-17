import React from 'react';
import { 
  HashRouter, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import MicroFrontend from '../../components/micro-frontend';
import DefaultLayout from '../../components/default-layout';
import About from '../about';

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
    <HashRouter basename={process.env.BASE_URL}>
      <Switch>
        <DefaultLayout>
        <Route path={"/"} exact>
          <Redirect to={"/restaurants"} />
        </Route>
        <Route path={"/about"} exact>
          <About />
        </Route>
        <Route path={"/restaurants"} exact>
          {Restaurants}
        </Route>
        <Route path={"/restaurants/:id"} exact>
          {RestaurantDetails}
        </Route>
        </DefaultLayout>
      </Switch>
    </HashRouter>
  )
}

export default App;
