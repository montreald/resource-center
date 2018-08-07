import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import GuttersGrid from './components/Gallery'
import TopBar from './components/TopBar'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'
import 'typeface-roboto'

/*Import Views*/
import About from './views/About'
import Capacities from './views/Capacities'
import Careers from './views/Careers'
import Contacts from './views/Contacts'
import Home from './views/Home'
import News from './views/News'
import Projects from './views/Projects'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dd437c'
    },
    secondary: lightBlue
  }
})

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
}

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <TopBar>
              <Switch>
                <Route exact path="/" component={Home} to="/" />
                <Route path="/about" component={About} to="/about" />
                <Route path="/projects" component={Projects} to="/projects" />
                <Route path="/careers" component={Careers} to="/careers" />
                <Route
                  path="/capacities"
                  component={Capacities}
                  to="/capacities"
                />
                <Route path="/news" component={News} to="/news" />
                <Route path="/contacts" component={Contacts} to="/contacts" />
              </Switch>
            </TopBar>
            <GuttersGrid />
            <SimpleBottomNavigation />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
