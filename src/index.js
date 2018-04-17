import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter, Route, BrowserHistory } from 'react-router-dom';

import { AppContainer } from './styles';
import App from './containers/App';
import About from './components/About';
import reducer from './reducers';

const middleware = applyMiddleware(createLogger());
const store = createStore(reducer, middleware);


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter history={BrowserHistory}>
      <AppContainer>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
      </AppContainer>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

