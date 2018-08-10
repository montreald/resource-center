import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'nowrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    color: '#FFF',
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700]
    }
  },
  button: {
    color: '#fff',
    minWidth: '120px',
    border: '1px solid #fff'
  }
  /*bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '8px 18px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }*/
})

const theme = createMuiTheme({
  palette: {
    primary: green
  }
})

function ItemButtons() {
  const { classes, link } = this.props
  return (
    <Fragment>
      <Button variant="outlined" className={classes.button}>
        {link.textIn}
      </Button>
    </Fragment>
  )
}

ItemButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, links)(ItemButtons)
