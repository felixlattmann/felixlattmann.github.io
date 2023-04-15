import { Box, ColorModeContextType, IconButton, Spacer, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

type NavbarProps = {
  colorMode: string
  toggleColorMode: Function
}

const Navbar: React.FC<NavbarProps> = ({ colorMode, toggleColorMode }) => {
  const colorValue = useColorModeValue('#805ad5', '#f99441')
  return (
    <Box
      position="absolute"
      width="100%"
      height="50px"
      borderColor={colorValue}
      display="flex"
      alignItems="center">
      <Box>
        <Text pl="10px">Felix Lattmann</Text>
      </Box>
      <Spacer />
      <Box pr="10px">
        <IconButton
          backgroundColor={colorValue}
          aria-label="Change Color Mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={() => toggleColorMode()}
        />
      </Box>
    </Box>
  )
}

export default Navbar
