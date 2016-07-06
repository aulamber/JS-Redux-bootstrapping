import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import mainReducer from './reducers/main'
import App from './app'
import Home from './components/home'
import Register from './components/register'
import Registered from './components/registered'
import Component1 from './components/component1'
import Component2 from './components/component2'
import SubComponent1 from './components/subcomponent1'
import SubComponent2 from './components/subcomponent2'
import NoMatch from './components/noMatch'

const reducers = {
  mainReducer,
  form: formReducer,
}
const reducer = combineReducers(reducers)
let store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/registered' component={Registered}/>
          <Route path='/component1' component={Component1}/>
          <Route path='/component1/subComponent1' component={SubComponent1}/>
          <Route path='/component1/subComponent2' component={SubComponent2}/>
        <Route path='/component2' component={Component2}/>
        <Route path='*' component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
),
document.getElementById('app'))
