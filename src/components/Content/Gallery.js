import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    margin: '0 auto'
  },
  demo: {
    justifyContent: 'space-evenly',
    margin: '10px 0'
  },
  paper: {
    height: 'auto',
    maxWidth: '280px',
    width: '30vw',
    minWidth: '160px',
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
    padding: '5px 0'
  },
  hrefcontainer: {
    margin: '10px 0'
  },
  control: {
    padding: theme.spacing.unit * 2
  }
})

const contentItem = [
  ['Name_1', 'Description', '/about'],
  ['Name_2', 'Description', '/capacities'],
  ['Name_3', 'Description', '/news'],
  ['Name_4', 'Description', '/projects'],
  ['Name_5', 'Description', '/contacts'],
  ['Name_6', 'Description', '/careers']
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
      <Grid container className={classes.root} spacing={0}>
        <Grid item sm={12} md={6}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            {contentItem.map(value => (
              <Link key={value} to={value[2]} className={classes.hrefcontainer}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h1>{value[0]}</h1>
                    <h2>{value[1]}</h2>
                  </Paper>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)
