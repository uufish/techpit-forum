import { Stack, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CardThread = ({ thread }) => {
  return (
    <Link to={`/threads/${thread.id}`}>
      <Stack spacing={1} shadow={'md'} p={4} rounded={'md'}>
        <HStack justify={'space-between'}>
          <Text>{thread.title}</Text>
          <Text>{thread.responseCount}</Text>
        </HStack>
        <Text fontSize={'sm'}>
          {thread.updatedAt.toDate().toLocaleString()}
        </Text>
      </Stack>
    </Link>
  )
}

export default CardThread
