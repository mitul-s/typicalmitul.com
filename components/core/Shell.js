import { HStack, Flex, Box, Link, Grid, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box>
      <HStack
        borderTop={"1px solid"}
        borderColor={"core.eggshell"}
        justifyContent="space-between"
        width="full"
        spacing={4}
        lineHeight={0}
        height="64px"
        letterSpacing={-0.5}
        px={4}
      >
        <Link fontSize={18}>Typical Mitul</Link>
        <HStack>
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Gear</Link>
          <Link className="nav-link">Work</Link>
          <Link className="nav-link">Contact</Link>
        </HStack>
      </HStack>
      <Box
        bg="c.yolk"
        color="black"
        textTransform="uppercase"
        // border="1px solid white"
        py={2}
      >
        <Box className="marquee">
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
          <Text willChange={"transform"} fontSize={12} fontWeight={300}>
            Available for Work
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default function Shell({ children }) {
    return (
      <Box minHeight="100%" bg="black" display={"flex"} flexDirection="column" color="white">
        <Navigation />
          {children}
        {/* <Box height="10%">This is a footer</Box> */}
      </Box>
    );
}