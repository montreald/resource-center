import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import GuttersGrid from './components/Gallery'
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
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

class App extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <Link to="/">
          <List>Home</List>
        </Link>
        <Divider />
        <Link to="/item2">
          <List>Item2</List>
        </Link>
        <Divider />
        <Link to="/item3">
          <List>Item3</List>
        </Link>
        <Divider />
        <Link to="/item4">
          <List>Item4</List>
        </Link>
        <Divider />
        <Link to="/item5">
          <List>Item5</List>
        </Link>
        <Divider />
      </div>
    )

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon onClick={this.toggleDrawer('left', true)} />
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.flex}
                >
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <Drawer
              open={this.state.left}
              onClose={this.toggleDrawer('left', false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route exact path="/item2" render={() => <h1>Item2</h1>} />
            <Route exact path="/item3" render={() => <h1>Item3</h1>} />
            <Route exact path="/item4" render={() => <h1>Item4</h1>} />
            <Route exact path="/item5" render={() => <h1>Item5</h1>} />
            <GuttersGrid classes="classes.galerry" />
            <BottomNavigation
              onChange={
                (this.handleChange = (event, value) => {
                  this.setState({ value })
                })
              }
              showLabels
              className={classes.root}
              style={{ position: 'absolute', bottom: 0, width: '100%' }}
            >
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label="Nearby"
                icon={<LocationOnIcon />}
              />
            </BottomNavigation>
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
