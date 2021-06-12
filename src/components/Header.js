import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box
      bg={'white'}
      boxShadow={'md'}
      p={4}
      position={'sticky'}
      top={0}
      zIndex={1}
    >
      <Heading as={Link} to={'/'} fontSize={'lg'}>
        {'フォーラム'}
      </Heading>
    </Box>
  )
}

export default Header
