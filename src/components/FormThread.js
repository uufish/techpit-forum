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
  const classes = useStyle()
  const [input, setInput] = useState({ username: '', text: '', title: '' })
  const [inProgress, setInProgress] = useState(false)
  const onChangeUsername = event => {
    setInput({ ...input, username: event.target.value })
  }
  const onChangeText = event => {
    setInput({ ...input, text: event.target.value })
  }
  const onChangeTitle = event => {
    setInput({ ...input, title: event.target.value })
  }
  const onSubmit = () => {
    if (inProgress || !input.text || !input.title) return
    setInProgress(true)
    createThread(input)
      .then(() => {
        setInput({ username: '', text: '', title: '' })
        setInProgress(false)
      })
      .catch(err => {
        setInProgress(false)
        console.error(err)
      })
  }
  const onSubmitForm = event => {
    event.preventDefault()
  }

  return (
    <form className={classes.form} onSubmit={onSubmitForm}>
      <TextField
        disabled={inProgress}
        onChange={onChangeTitle}
        placeholder={'New thread'}
        value={input.title}
        variant={'outlined'}
        fullWidth
      />
      {input.title && (
        <TextField
          disabled={inProgress}
          onChange={onChangeText}
          placeholder={'Content'}
          rows={2}
          rowsMax={8}
          value={input.text}
          variant={'outlined'}
          fullWidth
          multiline
        />
      )}
      {input.title && (
        <TextField
          disabled={inProgress}
          onChange={onChangeUsername}
          placeholder={'Username (optional)'}
          value={input.username}
          variant={'outlined'}
          fullWidth
        />
      )}
      <div className={classes.actions}>
        <Button
          color={'primary'}
          disabled={inProgress || !input.title || !input.text}
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
