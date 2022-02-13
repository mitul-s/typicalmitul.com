import Shell from "@/components/core/Shell"
import { Box, Flex, Button, Spacer, Heading, HStack, Text } from "@chakra-ui/react"


export default function Home() {
  return (
    <Shell>
      <HStack
        color="c.yolk"
        fontSize={32}
        lineHeight={1}
        fontWeight="light"
        justifyContent="space-between"
        px={2}
        py={4}
      >
        <Text className="capsize">+</Text>
        <Text className="capsize">+</Text>
        <Text className="capsize">+</Text>
        <Text className="capsize">+</Text>
        <Text className="capsize">+</Text>
      </HStack>
      <Box height="70vh">
        <Box
          as="section"
          display={"inline-grid"}
          width="100%"
          height={"100%"}
          // gridTemplateRows={"1fr 1fr"}
          // minHeight="100%"
          // height="100%"
          // gridTemplateRows="400px 1fr"
        >
          <Box
            bg="gray.500"
            mx={5}
            height="87%"
            border="1px solid"
            // borderColor={`c.yolk`}
            borderColor={"c.eggshell"}
            backgroundImage="url(https://images.unsplash.com/photo-1644579112979-2e0a6dbb64a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)"
            backgroundSize="cover"
            backgroundPosition="center"
            gridArea={"1/1"}
            overflow="auto"
          />
          {/* <Heading
            gridArea={"1/1"}
            display={"flex"}
            alignItems={"flex-end"}
            justifyContent={"center"}
            textTransform={`uppercase`}
            textAlign="center"
            fontSize={144}
            color="black"
            // textShadow={`0px 0px 1px white`}
            transform={`translate(4px, 4px)`}
            // className="text-shadow-white"
            // webkitTextStroke={`10px white`}
            // color="white"
            letterSpacing="-0.035em"
            overflow="auto"
            fontFamily={"GT America"}
          >
            Chasing Life
          </Heading> */}
          <Heading
            // className="text-shadow-white"
            zIndex={1}
            gridArea={"1/1"}
            display={"flex"}
            alignItems={"flex-end"}
            justifyContent={"center"}
            textTransform={`uppercase`}
            textAlign="center"
            fontSize={144}
            color="c.yolk"
            // color="c.eggshell"
            // color="white"
            letterSpacing="-0.035em"
            overflow="auto"
            fontFamily={"GT America"}
          >
            Chasing Life
          </Heading>
        </Box>
      </Box>
      <HStack
        as="section"
        mx={5}
        my={16}
        justifyContent="space-between"
        alignItems={"flex-start"}
      >
        <Box flexShrink={0} width="50%" experimental_spaceY={6}>
          <Heading fontSize={24} fontWeight="400">
            About
          </Heading>
          <Button
            color="black"
            bg="c.yolk"
            border="1px solid"
            borderColor="c.yolk"
            rounded="3px"
            px="0.5rem"
            py="0.25rem"
            height="fit-content"
            fontWeight="500"
            fontSize={14}
          >
            Learn More
          </Button>
        </Box>
        <Box>
          <Text
            fontWeight="300"
            fontSize={24}
            lineHeight={"1.125em"}
            letterSpacing={"-0.0125em"}
            color="c.eggshell"
            width="80%"
          >
            I handle the business operations. With all due respect, Don Eladio.
            I didn't sell it to them. I gave them samples. I gave them samples
            to give to you. To introduce you to our product. This product is the
            drug of the future. It'll triple your profits. Perhaps quadruple.
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
        <Box flexShrink={0} width="50%" experimental_spaceY={6}>
          <Heading fontSize={24} fontWeight="400">
            About
          </Heading>
          <Button
            color="black"
            bg="c.yolk"
            border="1px solid"
            borderColor="c.yolk"
            rounded="3px"
            px="0.5rem"
            py="0.25rem"
            height="fit-content"
            fontWeight="500"
            fontSize={14}
          >
            Learn More
          </Button>
        </Box>
        <Box>
          <Text
            fontWeight="300"
            fontSize={24}
            lineHeight={"1.125em"}
            letterSpacing={"-0.0125em"}
            color="c.eggshell"
            width="80%"
          >
            I handle the business operations. With all due respect, Don Eladio.
            I didn't sell it to them. I gave them samples. I gave them samples
            to give to you. To introduce you to our product. This product is the
            drug of the future. It'll triple your profits. Perhaps quadruple.
          </Text>
        </Box>
      </HStack>
    </Shell>
  );
}