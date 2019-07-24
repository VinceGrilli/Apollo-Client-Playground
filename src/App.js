import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Post from './Posts/Post';
import Posts from './Posts/Posts';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjydm27th003i01gwhz9hqi3z/master',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
