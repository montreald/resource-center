import React, { Component } from 'react'
import './App.css'
/*import '../GridStyles.css'*/
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import GuttersGrid from '../Content/Gallery'
import Router from '../Router/Router'
import SimpleBottomNavigation from '../Footer/SimpleBottomNavigation'
import { TopBar } from '../Layout'
import 'typeface-roboto'
import Content from '../Content'

/*Import Views*/

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
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <TopBar />
            <Router />
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
