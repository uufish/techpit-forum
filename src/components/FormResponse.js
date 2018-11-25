import Button from '@material-ui/core/Button/Button'
import TextField from '@material-ui/core/TextField/TextField'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { createResponse } from '../functions/createResponse'

const useStyle = makeStyles({
  actions: { display: 'grid', justifyContent: 'flex-end' },
  form: { display: 'grid', gridRowGap: 16 + 'px' }
})

const FormResponse = ({ threadId }) => {
  const classes = useStyle()
  const [input, setInput] = useState({ username: '', text: '' })
  const [inProgress, setInProgress] = useState(false)
  const onChangeUsername = event => {
    setInput({ ...input, username: event.target.value })
  }
  const onChangeText = event => {
    setInput({ ...input, text: event.target.value })
  }
  const onSubmit = () => {
    if (inProgress || !input.text) return
    setInProgress(true)
    createResponse({ ...input, threadId })
      .then(() => {
        setInput({ username: '', text: '' })
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
        onChange={onChangeText}
        placeholder={'New response'}
        rows={2}
        rowsMax={8}
        value={input.text}
        variant={'outlined'}
        fullWidth
        multiline
      />
      {input.text && (
        <TextField
          disabled={inProgress}
          onChange={onChangeUsername}
          placeholder={'Username (Optional)'}
          value={input.username}
          variant={'outlined'}
          fullWidth
        />
      )}
      <div className={classes.actions}>
        <Button
          color={'primary'}
          disabled={inProgress || !input.text}
          onClick={onSubmit}
          variant={'contained'}
        >
          create
        </Button>
      </div>
    </form>
  )
}

export default FormResponse
