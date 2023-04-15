import { Flex, Box, Heading, Text } from '@chakra-ui/react'

const Introduction = () => {
  return (
    <Box
      w="400px"
      h="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center">
      <Heading
        as="h2"
        pb="10px">
        Felix Lattmann
      </Heading>
      <Text pb="10px">Engineer / Data Scientist</Text>
      <Text>Currently pursuing MechEng B.Sc. with a focus on System Design and Machine Learning</Text>
    </Box>
  )
}

export default Introduction
