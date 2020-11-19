import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import Add from './pages/Add/Add';
import Products from './pages/Products/Products';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={Add} />
      <Route path='/list' exact component={Products} />
    </Switch>
  </BrowserRouter>
);

export default App;
