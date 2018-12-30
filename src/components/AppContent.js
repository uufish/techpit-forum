import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridRowGap: 16 + 'px',
    margin: 'auto',
    maxWidth: 960,
    padding: 16
  }
})

const AppContent = ({ children }) => {
  const classes = useStyles()

  return <main className={classes.root}>{children}</main>
}

export default AppContent
