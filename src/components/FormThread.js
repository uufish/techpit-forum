import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { createThread } from '../helpers/createThread'

const FormThread = () => {
  const [inProgress, setInProgress] = useState(false)

  const [text, setText] = useState('')

  const [title, setTitle] = useState('')

  const [username, setUsername] = useState('')

  const classes = useStyle()

  const onSubmit = () => {
    if (inProgress || !text || !title) return
    setInProgress(true)
    createThread({ username, text, title })
      .then(() => {
        setUsername('')
        setText('')
        setTitle('')
        setInProgress(false)
      })
      .catch((err) => {
        setInProgress(false)
        console.error(err)
      })
  }

  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <TextField
        disabled={inProgress}
        onChange={(event) => setTitle(event.target.value)}
        placeholder={'New thread'}
        value={title}
        variant={'outlined'}
        fullWidth
      />
      {title && (
        <TextField
          disabled={inProgress}
          fullWidth
          multiline
          onChange={(event) => setText(event.target.value)}
          placeholder={'Content'}
          rows={2}
          rowsMax={8}
          value={text}
          variant={'outlined'}
        />
      )}
      {title && (
        <TextField
          disabled={inProgress}
          fullWidth
          onChange={(event) => setUsername(event.target.value)}
          placeholder={'Username (optional)'}
          value={username}
          variant={'outlined'}
        />
      )}
      <div className={classes.actions}>
        <Button
          color={'primary'}
          disabled={inProgress || !title || !text}
          onClick={onSubmit}
          variant={'contained'}
        >
          {'Create'}
        </Button>
      </div>
    </form>
  )
}

const useStyle = makeStyles(({ spacing }) => {
  return {
    actions: { display: 'grid', justifyContent: 'flex-end' },
    form: { display: 'grid', gridRowGap: spacing(2) },
  }
})

export default FormThread
