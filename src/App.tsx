import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './components/Game'
import MainMenu from './components/MainMenu'

const theme = extendTheme({
  components: {
    Stack: {
      defaultProps: {
        spacing: 4,
      },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" bg="gray.900" color="white">
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
