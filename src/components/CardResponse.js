import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { timeLag } from '../helpers/timeLag'

const useStyles = makeStyles({
  root: { display: 'grid', gridRowGap: 8 + 'px' },
  info: {
    display: 'grid',
    gridAutoColumns: 'max-content',
    gridAutoFlow: 'column',
    gridColumnGap: 8 + 'px'
  },
  text: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' }
})

const CardResponse = ({ response }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.root}>
        <div className={classes.info}>
          <Typography>{String(response.index)}</Typography>
          <Typography>
            <span>{response.username || 'null'}</span>
            <span>{'・'}</span>
            <span>{timeLag(response.updatedAt.toDate())}</span>
          </Typography>
        </div>
        <Typography className={classes.text}>{response.text}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardResponse
