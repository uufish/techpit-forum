import Button from '@material-ui/core/Button/Button'
import TextField from '@material-ui/core/TextField/TextField'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { createThread } from '../functions/createThread'

const useStyle = makeStyles({
  actions: { display: 'grid', justifyContent: 'flex-end' },
  form: { display: 'grid', gridRowGap: 16 + 'px' }
})

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
      .catch(err => {
        setInProgress(false)
        console.error(err)
      })
  }

  return (
    <form className={classes.form} onSubmit={event => event.preventDefault()}>
      <TextField
        disabled={inProgress}
        onChange={event => setTitle(event.target.value)}
        placeholder={'New thread'}
        value={title}
        variant={'outlined'}
        fullWidth
      />
      {title && (
        <TextField
          disabled={inProgress}
          onChange={event => setText(event.target.value)}
          placeholder={'Content'}
          rows={2}
          rowsMax={8}
          value={text}
          variant={'outlined'}
          fullWidth
          multiline
        />
      )}
      {title && (
        <TextField
          disabled={inProgress}
          onChange={event => setUsername(event.target.value)}
          placeholder={'Username (optional)'}
          value={username}
          variant={'outlined'}
          fullWidth
        />
      )}
      <div className={classes.actions}>
        <Button
          color={'primary'}
          disabled={inProgress || !title || !text}
          onClick={onSubmit}
          variant={'contained'}
        >
          create
        </Button>
      </div>
    </form>
  )
}

export default FormThread
