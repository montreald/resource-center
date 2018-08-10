import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  DialogTitle,
  Dialog
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
import blue from '@material-ui/core/colors/blue'

const emails = ['username@gmail.com', 'user02@gmail.com']
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  openDialog: {
    position: 'absolute',
    left: '2%',
    right: '2%'
  },
  login_btn: {
    marginLeft: 30
  }
}

class SimpleDialog extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue)
  }

  handleListItemClick = value => {
    this.props.onClose(value)
  }

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {emails.map(email => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(email)}
                key={email}
              >
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={() => this.handleListItemClick('addAccount')}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    )
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
}

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog)

class SimpleDialogDemo extends Component {
  state = {
    open: false,
    selectedValue: emails[1]
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = value => {
    this.setState({ selectedValue: value, open: false })
  }

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className={classes.login_btn}
          onClick={this.handleClickOpen}
        >
          Login
        </Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </Fragment>
    )
  }
}

SimpleDialogDemo.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleDialogDemo)
