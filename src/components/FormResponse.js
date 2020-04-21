import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { createResponse } from '../helpers/createResponse'

const FormResponse = ({ threadId }) => {
  const [inProgress, setInProgress] = useState(false)

  const [text, setText] = useState('')

  const [username, setUsername] = useState('')

  const classes = useStyle()

  const onSubmit = () => {
    if (inProgress || !text) return
    setInProgress(true)
    createResponse({ text, threadId, username })
      .then(() => {
        setText('')
        setUsername('')
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
        fullWidth
        multiline
        onChange={(event) => setText(event.target.value)}
        placeholder={'New response'}
        rows={2}
        rowsMax={8}
        value={text}
        variant={'outlined'}
      />
      {text && (
        <TextField
          disabled={inProgress}
          fullWidth
          onChange={(event) => setUsername(event.target.value)}
          placeholder={'Username (Optional)'}
          value={username}
          variant={'outlined'}
        />
      )}
      <div className={classes.actions}>
        <Button
          color={'primary'}
          disabled={inProgress || !text}
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

export default FormResponse
