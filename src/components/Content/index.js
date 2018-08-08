import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const styles = {
  Paper: { padding: 10, marginTop: 10, marginBottom: 10 }
}

export default props => (
  <Grid container>
    <Grid item sm={6}>
      <LeftPanel styles={styles} />
    </Grid>
    <Grid item sm={6}>
      <RightPanel styles={styles} />
    </Grid>
  </Grid>
)
