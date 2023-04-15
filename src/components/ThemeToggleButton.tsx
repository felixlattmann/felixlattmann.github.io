import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const colorValue = useColorModeValue('#b486b7', '#f66528')
  const reversedColverValue = useColorModeValue('#f66528', '#b486b7')

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      <motion.div
        //style={{ display: 'inline-block' }}
        key={colorValue}
        initial={{ x: 20, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <IconButton
          aria-label='"Toggle theme'
          colorScheme={colorValue}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
