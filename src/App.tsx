import { Container, Box, VStack, Heading, Center, Flex, Spacer, Text, useColorMode } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import './App.css'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className={colorMode === 'light' ? 'spacer imagelight' : 'spacer imagedark'}>
      <Navbar
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
      <Flex>
        <Box w="10vw" />
        <Introduction />
      </Flex>
    </div>
  )
}

export default App
