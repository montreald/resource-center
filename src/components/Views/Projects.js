import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GuttersGrid from '../Gallery'

const styles = {}

const contentItem = [
  ['Project_1', 'Description', '/about'],
  ['Project_2', 'Description', '/capacities'],
  ['Project_3', 'Description', '/news'],
  ['Project_4', 'Description', '/projects'],
  ['Project_5', 'Description', '/contacts'],
  ['Project_6', 'Description', '/careers']
]

class Projects extends Component {
  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <GuttersGrid />
      </Fragment>
    )
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Projects)
