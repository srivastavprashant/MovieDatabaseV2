import type { NextPage } from 'next';
import { ChakraProvider, Text, Flex } from '@chakra-ui/react';
import theme from '../theme';
import '@fontsource/poppins';
import Header from '../components/organisms/header';
import NavMenuItem from '../components/atoms/NavMenuItem';

const Index: NextPage = () => {
  return (
    <Flex bg='white' 
      position='relative'
      flexDirection='column' 
      height='100vh' 
      minW='100%'
      minH='100vh'
      width='100%'>
      <Header></Header>
    </Flex>
  )
}

export default Index;
