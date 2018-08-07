import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  MenuItem,
  Button,
  Divider,
  List
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

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

const links = [
  { isExact: true, linkTo: '/', textIn: 'Home' },
  { isExact: false, linkTo: '/about', textIn: 'About' },
  { isExact: false, linkTo: '/projects', textIn: 'Our Projects' },
  { isExact: false, linkTo: '/careers', textIn: 'Careers' },
  { isExact: false, linkTo: '/capacities', textIn: 'Capacities' },
  { isExact: false, linkTo: '/news', textIn: 'News' },
  { isExact: false, linkTo: '/contacts', textIn: 'Contacts' }
]

class TopBar extends Component {
  button = null

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchorEl: null,
    selectedIndex: 1
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state

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
            {links.map((link, i) => (
              <MenuItem
                component={Link}
                to={link.linkTo}
                key={link.i}
                selected={i === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, i)}
              >
                {link.textIn}
              </MenuItem>
            ))}
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
