import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const colorValue = useColorModeValue('#b486b7', '#f66528')
  const colorValueHover = useColorModeValue('#9b5f9f', '#dc4709')

  return (
    <AnimatePresence
      initial={false}
      mode="wait"
    >
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('lightsetting', 'darksetting')}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
      >
        <IconButton
          aria-label='"Toggle theme'
          backgroundColor={colorValue}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          _hover={{ backgroundColor: colorValueHover }}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
