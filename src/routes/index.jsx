import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import NarutoRockLee from '../pages/Products/NarutoRockLee/NarutoRockLee';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />

      <Route path="/naruto-rocklee" component={NarutoRockLee} />
    </Switch>
  );
};

export default Routes;
