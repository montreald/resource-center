import React, { Fragment } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'

const style = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

export default props => (
  <Fragment>
    <Card style={style.card}>
      <CardContent>
        <Typography style={style.title} color="textSecondary">
          Word of the Day
        </Typography>
        <Typography variant="headline" component="h2" />
        <Typography style={style.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Fragment>
)
