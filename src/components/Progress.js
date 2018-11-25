import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
  root: { display: 'grid', justifyContent: 'center' }
})

const Progress = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

export default Progress
