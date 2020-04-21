import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridRowGap: spacing(2),
      margin: 'auto',
      maxWidth: breakpoints.values.md,
      padding: spacing(2),
    },
  }
})

const Main = ({ children }) => {
  const classes = useStyles()

  return <main className={classes.root}>{children}</main>
}

export default Main
