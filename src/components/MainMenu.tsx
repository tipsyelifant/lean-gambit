import { VStack, Heading, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const MainMenu = () => {
  const navigate = useNavigate()

  return (
    <VStack spacing={8} justify="center" align="center" height="100vh" p={4}>
      <Heading size="2xl" textAlign="center">
        Virtual Escape Room
      </Heading>
      <Button
        colorScheme="teal"
        size="lg"
        onClick={() => navigate('/game')}
      >
        Start Game
      </Button>
    </VStack>
  )
}

export default MainMenu 