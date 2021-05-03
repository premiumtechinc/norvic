import React from 'react';
import { Flex } from '@chakra-ui/react';

import Header from '../Header';
import Footer from '../Footer';


const Page = (props) => {
  return (
    <Flex
      direction="column"
      align="center"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}

export default Page;
