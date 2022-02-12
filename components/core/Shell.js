import { HStack, Flex, Box, Link, Grid, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box border="1px solid black">
      <HStack
        justifyContent="space-between"
        width="full"
        spacing={4}
        lineHeight={0}
        height="64px"
        letterSpacing={-0.5}
        px={4}
      >
        <Link fontSize={16}>Typical Mitul</Link>
        <HStack>
          <Link fontSize={16}>About</Link>
          <Link fontSize={16}>Gear</Link>
          <Link fontSize={16}>Work</Link>
          <Link fontSize={16}>Contact</Link>
        </HStack>
      </HStack>
      <Box
        bg="core.yellow"
        color="black"
        textTransform="uppercase"
        // border="1px solid white"
        py={2}
      >
        <HStack className="marquee">
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
          <Text fontSize={12}>Available for Work</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default function Shell({ children }) {
    return (
      <Box height="100%" bg="black" color="white">
        <Navigation />
        <Box minHeight="100%" bg="black" display={"flex"} flexDirection="column">
          {children}
        </Box>
        {/* <Box height="10%">This is a footer</Box> */}
      </Box>
    );
}