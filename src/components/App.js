import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Menu } from './Menu';
import { Home } from './Home';
import { Blog } from './Blog';
import { About } from './About';
import { NotFound } from './NotFound';

export const App = () => (
  <div>
    <Menu />
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route component={NotFound} is404 />
    </Switch>
  </div>
);

export default App;
