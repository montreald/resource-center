import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About, Capacities, Contacts, News, Projects } from '../Views'
import MainContainer from '../Content/MainContainer'

export default props => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/capacities" component={Capacities} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
)
