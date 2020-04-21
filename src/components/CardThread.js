import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const CardThread = ({ thread }) => {
  const classes = useStyles()

  return (
    <Card>
      <Link to={`/threads/${thread.id}`}>
        <CardContent className={classes.content}>
          <Typography variant={'h6'}>
            {`${thread.title} (${thread.responseCount})`}
          </Typography>
          <Typography variant={'caption'}>
            {thread.updatedAt.toDate().toLocaleString()}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

const useStyles = makeStyles(({ spacing }) => {
  return { content: { display: 'grid', gridRowGap: spacing(1) } }
})

export default CardThread
