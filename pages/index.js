import Shell from "@/components/core/Shell"
import { Box, Flex, Button, Spacer, Heading } from "@chakra-ui/react"


export default function Home() {
  return (
    <Shell>
      <Flex height="90%" width="100%">
        <Flex
          border="1px solid black"
          py={[2, 4]}
          px={[2, 4]}
          width="30%"
          marginRight={3}
          flexDirection="column"
        >
          <Heading textTransform="uppercase">Typical Mitul</Heading>
          <Button
            mt="auto"
            shadow="md"
            border="1px solid black"
            _hover={{
              backgroundColor: "black",
              color: "white",
            }}
            isFullWidth={true}
            rounded="none"
            lineHeight={0}
            fontWeight="regular"
          >
            Hit my line
          </Button>
        </Flex>
        <Box border="1px solid black" padding={2} width="70%">
          <Flex backgroundColor="gray" rounded="sm" height="100%" justifyContent="center" alignItems="center">
            <Heading color="white" mt={-8} fontSize={48}>Chasing Life</Heading>
          </Flex>
        </Box>
      </Flex>
      <Box>Hello</Box>
    </Shell>
  );
}