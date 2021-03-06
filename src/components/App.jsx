import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailPost from './DetailPost.jsx';
import Header from './Header.jsx';
import IndexWrapper from './IndexWrapper.jsx';

const FourOhFour = () => <h1>404</h1>;

let App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={IndexWrapper} />
          <Route path='/:slug' component={DetailPost} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>

    )
}

export default App;
