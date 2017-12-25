import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailView from './DetailView.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';
import PostList from './PostList.jsx';
import Filter from './Filter.jsx';


const App2 = ({ match }) => (
  <h1>Some text {match.params.id}</h1>
);

const FourOhFour = () => <h1>404</h1>;


let App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <Switch>
          <Route exact path='/' component={() => (<div><Form /><PostList /><Filter /></div>)} />
          <Route path='/:id' component={DetailView} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>

    )
}

export default App;
