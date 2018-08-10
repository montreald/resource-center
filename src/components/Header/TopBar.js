import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
  Drawer,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

/*import items and component*/
import Login from './Login'

export const styles = theme => ({
  root: {
    flexGrow: 1,
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  headerButtonContainer: {
    marginLeft: 'auto'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  },
  selected: {
    backgroundColor: '#00aeef'
  },
  buttonHeader: {
    color: '#fff',
    border: '1px solid #fff',
    margin: '0 1vw'
  }
})

const links = [
  { isExact: true, linkTo: '/', textIn: 'Home' },
  { isExact: false, linkTo: '/about', textIn: 'About' },
  { isExact: false, linkTo: '/projects', textIn: 'Portfolio' },
  { isExact: false, linkTo: '/capacities', textIn: 'Service' },
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

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null })
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const {
      classes,
      className,
      component,
      selected,
      role,
      ...other
    } = this.props

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Menu
            </Typography>
            <div className={classes.headerButtonContainer}>
              {links.map((link, i) => (
                <Fragment key={i}>
                  <Button
                    component={Link}
                    to={link.linkTo}
                    selected={i === this.state.selectedIndex}
                    onClick={event => this.handleMenuItemClick(event, i)}
                    variant="outlined"
                    className={classes.buttonHeader}
                  >
                    {link.textIn}
                  </Button>
                </Fragment>
              ))}
            </div>
            <Login />
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
                key={i}
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
