import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import {Header} from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddProduct} exact />
          <Route path="/edit/:id" component={EditProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
