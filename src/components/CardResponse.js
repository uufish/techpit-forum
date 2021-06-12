import { HStack, Stack, Text } from '@chakra-ui/layout'
import React from 'react'

const CardResponse = ({ response, index }) => {
  return (
    <Stack spacing={1} shadow={'md'} p={4} rounded={'md'}>
      <HStack justify={'space-between'}>
        <HStack>
          <Text>{index + 1}</Text>
          <Text>{'・'}</Text>
          <Text>{response.username || '不明'}</Text>
        </HStack>
        <Text>{response.createdAt.toDate().toLocaleString()}</Text>
      </HStack>
      <Text whiteSpace={'pre-wrap'}>{response.text}</Text>
    </Stack>
  )
}

export default CardResponse
