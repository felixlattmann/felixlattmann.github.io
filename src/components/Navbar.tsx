import { Box, ColorModeContextType, IconButton, Spacer, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './ThemeToggleButton'

type NavbarProps = {
  colorMode: string
  toggleColorMode: Function
}

const Navbar: React.FC<NavbarProps> = ({ colorMode, toggleColorMode }) => {
  const colorValue = useColorModeValue('#b486b7', '#f66528')
  return (
    <Box
      position="absolute"
      width="100%"
      display="flex"
      alignItems="center"
      p="20px"
    >
      <Box></Box>
      <Spacer />
      <Box>
        <ThemeToggleButton />
      </Box>
    </Box>
  )
}

export default Navbar
