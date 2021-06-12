import { Stack } from '@chakra-ui/react'
import React from 'react'

const Main = ({ children }) => {
  return (
    <Stack spacing={8} pt={8} pb={4} px={4} mx={'auto'} maxW={'xl'}>
      {children}
    </Stack>
  )
}

export default Main
