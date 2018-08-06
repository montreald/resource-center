import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

class SideBarItem extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem />
        </List>
        <Divider />
      </div>
    )
  }
}

SideBarItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideBarItem)
