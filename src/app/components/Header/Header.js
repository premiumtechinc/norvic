import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as Item,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Skeleton,
} from '@chakra-ui/react';
import { EmailIcon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';

import logo from '../../../images/logo.png';

const Logo = (props) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Box {...props}>
      <Link to="/home">
        <Skeleton isLoaded={!isLoading}>
          <Image
            src={logo}
            objectFit="cover"
            alt="Norvic Drugs Corp"
            onLoad={() => setLoading(false)}
          />
        </Skeleton>
      </Link>
    </Box>
  );
}

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const DrawerMenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Box
      pt="4"
      pb="4"
      pl="4"
      flex="1"
      w="100%"
      borderBottom="1px"
      borderColor="gray.200"
      justifyContent="center"
      textAlign="left"
    >
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        display="block"
        {...rest}
      >
        <Link to={to}>{children}</Link>
      </Text>
    </Box>
  );
};

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
      borderBottom="1px"
      borderColor="gray.200"
      {...props}
    >
      <Flex align="center">
        <Logo w="120px" />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
        <HamburgerIcon w={8} h={8} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody p="0">
              <Box
                flexBasis="100%"
                mt="20"
              >
                <Flex
                  align="flex-start"
                  justify="center"
                  direction="column"
                  pt="4"
                >
                  <Accordion w="100%" allowMultiple>
                    <AccordionItem>
                      <AccordionButton p="4" _focus={{ boxShadow: "0" }} _hover={{ bg: "transparent" }}>
                        <Box textAlign="left">
                          <Text mr="4" fontWeight="600" fontSize="2xl">SERVICES</Text>
                        </Box>
                        <AccordionIcon w={8} h={8} />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Flex direction="column">
                          <MenuItem to="">Test 1</MenuItem>
                          <MenuItem to="">Test 2</MenuItem>
                          <MenuItem to="">Test 3</MenuItem>
                          <MenuItem to="">Test 4</MenuItem>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <DrawerMenuItem mr="4" fontWeight="600" fontSize="2xl" to="/products">
                    PRODUCTS
                  </DrawerMenuItem>
                  <DrawerMenuItem mr="4" fontWeight="600" fontSize="2xl" to="/products">
                    ABOUT US
                  </DrawerMenuItem>

                  <Button
                    size="lg"
                    rounded="md"
                    color={["white", "white", "white", "white"]}
                    bg={["primary.500", "primary.500", "primary.500", "primary.500"]}
                    _hover={{
                      bg: ["secondary.500", "secondary.500", "secondary.500", "secondary.500"],
                    }}
                    leftIcon={<EmailIcon />}
                    m="auto"
                    mt="16"
                  >
                    CONTACT US
                  </Button>
                </Flex>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem>
            <Menu>
              <MenuButton
                variant="outline"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
              >
                SERVICES <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <Item><MenuItem to="">Test 1</MenuItem></Item>
                <Item><MenuItem to="">Test 2</MenuItem></Item>
                <Item><MenuItem to="">Test 3</MenuItem></Item>
                <Item><MenuItem to="">Test 4</MenuItem></Item>
              </MenuList>
            </Menu>
          </MenuItem>
          <MenuItem to="/products">
            PRODUCTS
          </MenuItem>
          <MenuItem to="/about">
            ABOUT US
          </MenuItem>
          <MenuItem to="/contact" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["white", "white", "white", "white"]}
              bg={["primary.500", "primary.500", "primary.500", "primary.500"]}
              _hover={{
                bg: ["secondary.500", "secondary.500", "secondary.500", "secondary.500"],
              }}
              leftIcon={<EmailIcon />}
            >
              CONTACT US
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
