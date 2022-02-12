import Shell from "@/components/core/Shell"
import { Box, Flex, Button, Spacer, Heading, HStack, Text } from "@chakra-ui/react"


export default function Home() {
  return (
    <Shell>
      <HStack
        color="core.yellow"
        fontSize={32}
        lineHeight={1}
        fontWeight="light"
        justifyContent="space-between"
        px={2}
        py={4}
      >
        <Text>+</Text>
        <Text>+</Text>
        <Text>+</Text>
        <Text>+</Text>
        <Text>+</Text>
      </HStack>
      <Box as="section" height="60%" display={"grid"}>
        <Box
          bg="gray.500"
          mx={5}
          height="80%"
          border="2px solid"
          borderColor={`core.yellow`}
          backgroundImage="url(https://images.unsplash.com/photo-1644579112979-2e0a6dbb64a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)"
          backgroundSize="cover"
          backgroundPosition="center"
          gridArea={"1/1"}
          width={"100%"}
        ></Box>
        <Heading
          gridArea={"1/1"}
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"center"}
          textTransform={`uppercase`}
          textAlign="center"
          fontSize={144}
          color="core.yellow"
          // color="white"
          letterSpacing="-0.035em"
        >
          Chasing Life
        </Heading>
      </Box>
      <HStack
        as="section"
        mx={5}
        my={16}
        justifyContent="space-between"
        alignItems={"flex-start"}
      >
        <Box flexShrink={0} width="50%">
          <Heading fontSize={24} fontWeight="400">
            About
          </Heading>
          {/* <Button bg="black" border="1px solid" borderColor="core.yellow" rounded="3px" px="4px"  height="fit-content" fontWeight="light" fontSize={14}>
            Learn More
          </Button> */}
        </Box>
        <Box>
          <Text>
            Ea sint do amet culpa non. Aute est irure voluptate commodo ex. In
            labore ullamco sit eu laboris. Magna ad aliqua in consectetur Lorem
            nulla aliquip elit cillum deserunt dolor. Adipisicing tempor nostrud
            mollit excepteur consectetur pariatur enim aliquip proident et nisi.
            Laborum velit in in voluptate laborum.
          </Text>
        </Box>
      </HStack>
      <HStack
        as="section"
        mx={5}
        my={16}
        justifyContent="space-between"
        alignItems={"flex-start"}
      >
        <Box flexShrink={0} width="50%">
          <Heading fontSize={24} fontWeight="400">
            About
          </Heading>
        </Box>
        <Box>
          <Text>
            Ea sint do amet culpa non. Aute est irure voluptate commodo ex. In
            labore ullamco sit eu laboris. Magna ad aliqua in consectetur Lorem
            nulla aliquip elit cillum deserunt dolor. Adipisicing tempor nostrud
            mollit excepteur consectetur pariatur enim aliquip proident et nisi.
            Laborum velit in in voluptate laborum.
          </Text>
        </Box>
      </HStack>
      <HStack
        as="section"
        mx={5}
        my={16}
        justifyContent="space-between"
        alignItems={"flex-start"}
      >
        <Box flexShrink={0} width="50%">
          <Heading fontSize={24} fontWeight="400">
            About
          </Heading>
        </Box>
        <Box>
          <Text>
            Ea sint do amet culpa non. Aute est irure voluptate commodo ex. In
            labore ullamco sit eu laboris. Magna ad aliqua in consectetur Lorem
            nulla aliquip elit cillum deserunt dolor. Adipisicing tempor nostrud
            mollit excepteur consectetur pariatur enim aliquip proident et nisi.
            Laborum velit in in voluptate laborum.
          </Text>
        </Box>
      </HStack>
    </Shell>
  );
}