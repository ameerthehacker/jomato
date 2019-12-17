import React from 'react';
import { Flex, Text, Image, Box } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const NavLink = ({ children, ...props }) => (
  <Box display={"inline"} px={2} color={"white"}>
    <Link {...props}>
      {children}
    </Link>
  </Box>
);

function DefaultLayout({ children }) {
  return (
    <>
      <Flex
        bg="tomato"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            size={30}
          />
          <Text pl={3} color="white">
            Jomato
          </Text>
        </Flex>
        <Box>
          <NavLink to={"/restaurants"}>Restaurants</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </Box>
      </Flex>
      <Box my={10}>
        {children}
      </Box>
    </>
  )
}

export default DefaultLayout;
