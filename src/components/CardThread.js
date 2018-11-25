import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import { timeLag } from '../helpers/timeLag'

const useStyles = makeStyles({
  content: { display: 'grid', gridRowGap: 8 + 'px' },
  title: { display: 'grid', gridTemplateColumns: '1fr auto' }
})

const CardThread = ({ thread }) => {
  const classes = useStyles()

  return (
    <Card>
      <Link to={`/threads/${thread.id}`}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>
            <span>{thread.title}</span>
            <span>{String(thread.responseCount)}</span>
          </Typography>
          <Typography>{timeLag(thread.updatedAt.toDate())}</Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default CardThread
