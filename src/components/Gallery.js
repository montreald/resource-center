import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    margin: '0 auto',
    width: 'calc(100% - 16px)'
  },
  paper: {
    height: 'auto',
    maxWidth: '280px',
    width: '30vw',
    minWidth: '160px',
    backgroundColor: '#4ddeecb0'
  },
  control: {
    padding: theme.spacing.unit * 2
  }
})

const contentItem = [
  ['Name_1', 'Description'],
  ['Name_2', 'Description'],
  ['Name_3', 'Description'],
  ['Name_4', 'Description'],
  ['Name_5', 'Description'],
  ['Name_6', 'Description']
]

class GuttersGrid extends Component {
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
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            {contentItem.map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                  <h1>{value[0]}</h1>
                  <h2>{value[1]}</h2>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/*<Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>*/}
      </Grid>
    )
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)
