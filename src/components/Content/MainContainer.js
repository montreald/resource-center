import React, { Fragment, Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import LeftPanel from '../AditionalComponent/LeftPanel'
import RightPanel from '../AditionalComponent/RightPanel'
import ContentCard from './ContentCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  paper: {
    height: 'auto',
    margin: 10
  },
  demo: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    maxWidth: 1024
  },
  control: {
    padding: theme.spacing.unit * 2
  }
})

class CardContainer extends Component {
  state = {
    spacing: '16'
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { classes } = this.props
    const { spacing } = this.state

    return (
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            <Grid item className={classes.demo}>
              {[0, 1, 2, 3, 4, 5].map(value => (
                <Paper key={value} className={classes.paper}>
                  <ContentCard />
                </Paper>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
CardContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardContainer)
