import { Textarea, Button, HStack, Stack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCreateThread } from '../hooks/useCreateThread'

const FormThread = () => {
  const [text, setText] = useState('')

  const [title, setTitle] = useState('')

  const [username, setUsername] = useState('')

  const [createThread, isLoading] = useCreateThread()

  const onCreateThread = () => {
    createThread({ text, title, username })
    setText('')
    setTitle('')
    setUsername('')
  }

  return (
    <Stack
      as={'form'}
      onSubmit={(event) => {
        event.preventDefault()
        onCreateThread()
      }}
      p={4}
      rounded={'md'}
      shadow={'md'}
      spacing={4}
    >
      <Input
        isDisabled={isLoading}
        onChange={(event) => setTitle(event.target.value)}
        placeholder={'スレッドのタイトル'}
        value={title}
      />
      {title && (
        <Textarea
          isDisabled={isLoading}
          onChange={(event) => setText(event.target.value)}
          placeholder={'内容'}
          value={text}
        />
      )}
      {title && (
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
          isDisabled={!title || !text}
          isLoading={isLoading}
          loadingText={'作成中'}
          type={'submit'}
        >
          {'送信する'}
        </Button>
      </HStack>
    </Stack>
  )
}

export default FormThread
