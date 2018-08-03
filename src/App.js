import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import GuttersGrid from './components/Gallery'
import Topbar from './components/Topbar'
import 'typeface-roboto'

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
            <Topbar />
            <GuttersGrid />
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
