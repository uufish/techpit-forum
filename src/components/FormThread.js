import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { useCreateThread } from '../helpers/useCreateThread'

const FormThread = () => {
  const classes = useStyle()

  const [text, setText] = useState('')

  const [title, setTitle] = useState('')

  const [username, setUsername] = useState('')

  const [createThread, loading] = useCreateThread()

  const onClick = () => {
    createThread({ text, title, username })
    setText('')
    setTitle('')
    setUsername('')
  }

  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <TextField
        disabled={loading}
        fullWidth
        onChange={(event) => setTitle(event.target.value)}
        placeholder={'New thread'}
        value={title}
        variant={'outlined'}
      />
      {title && (
        <TextField
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading || !title || !text}
          onClick={onClick}
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
