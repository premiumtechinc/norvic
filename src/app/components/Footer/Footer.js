import React from 'react';
import { Flex } from '@chakra-ui/react';


const Footer = (props) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={6}
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["primary.500", "primary.500", "primary.500", "primary.500"]}
      borderTop="1px"
      borderColor="gray.200"
      {...props}
    >
      //
    </Flex>
  );
};

export default Footer;
