import { HStack, Flex, Box, Link, Grid } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box border="1px solid black" my={2}>
    <HStack
      justifyContent="end"
      width="full"
      spacing={4}
      lineHeight={0}
      height="64px"
      letterSpacing={-0.5}
    >
      <Link textTransform="uppercase" fontSize={18}>
        Home
      </Link>
      <Link textTransform="uppercase" fontSize={18}>
        About
      </Link>
      <Link textTransform="uppercase" fontSize={18}>
        Contact
      </Link>
    </HStack>
    </Box>
  );
};

export default function Shell({ children }) {
    return (
      <Box height="100%" padding={4}>
        <Navigation />
        {children}
        {/* <Box height="10%">This is a footer</Box> */}
      </Box>
    );
}