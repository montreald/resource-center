import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Route, Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import SimpleList from './SimpleList'

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

class TopBar extends Component {
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

    /*const sideList = (
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
    );*/
    const links = [
      { isExact: true, linkTo: '/', text: 'Home' },
      { isExact: false, linkTo: '/about', text: 'About' },
      { isExact: false, linkTo: '/projects', text: 'Our Projects' },
      { isExact: false, linkTo: '/careers', text: 'Careers' },
      { isExact: false, linkTo: '/capacities', text: 'Capacities' },
      { isExact: false, linkTo: '/news', text: 'News' },
      { isExact: false, linkTo: '/contacts', text: 'Contacts' }
    ]

    return (
      <div>
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
            {links.map((link, i) => {
              return (
                <div className={classes.root}>
                  <List component="nav">
                    <ListItem button>
                      <ListItemText
                        isExact={link.isExact}
                        linkTo={link.linkTo}
                        primary={link.text}
                      />
                    </ListItem>
                  </List>
                  <Divider />
                  <Route exact path="/" render={() => <h1>Home</h1>} />
                  <Route exact path="/item2" render={() => <h1>Item2</h1>} />
                  <Route exact path="/item3" render={() => <h1>Item3</h1>} />
                  <Route exact path="/item4" render={() => <h1>Item4</h1>} />
                  <Route exact path="/item5" render={() => <h1>Item5</h1>} />
                </div>
              )
            })}
          </div>
        </Drawer>
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
