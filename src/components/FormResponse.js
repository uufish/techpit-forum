import { Input, Stack, Button, Textarea, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCreateResponse } from '../hooks/useCreateResponse'

const FormResponse = ({ threadId }) => {
  const [text, setText] = useState('')

  const [username, setUsername] = useState('')

  const [createResponse, isLoading] = useCreateResponse()

  const onCreateResponse = () => {
    createResponse({ text, threadId, username })
    setText('')
    setUsername('')
  }

  return (
    <Stack
      as={'form'}
      onSubmit={(event) => {
        event.preventDefault()
        onCreateResponse()
      }}
      p={4}
      rounded={'md'}
      shadow={'md'}
      spacing={4}
    >
      <Textarea
        isDisabled={isLoading}
        onChange={(event) => setText(event.target.value)}
        placeholder={'コメント'}
        value={text}
      />
      {text && (
        <Input
          isDisabled={isLoading}
          onChange={(event) => setUsername(event.target.value)}
          placeholder={'ユーザー名（任意）'}
          value={username}
        />
      )}
      <HStack justify={'flex-end'}>
        <Button
          color={'primary'}
          isDisabled={!text}
          isLoading={isLoading}
          loadingText={'送信中'}
          type={'submit'}
        >
          {'送信する'}
        </Button>
      </HStack>
    </Stack>
  )
}

export default FormResponse
