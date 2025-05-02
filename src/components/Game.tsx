import { Box, VStack, Text, Button, Grid, useToast } from '@chakra-ui/react'
import { useGameStore } from '../store/gameStore'

const Game = () => {
  const {
    currentRoom,
    inventory,
    hasKey,
    hasNote,
    hasSolvedPuzzle,
    addToInventory,
    setHasKey,
    setHasNote,
    setHasSolvedPuzzle,
    setCurrentRoom,
  } = useGameStore()

  const toast = useToast()

  const handleRoomInteraction = (action: string) => {
    switch (currentRoom) {
      case 'study':
        if (action === 'examine-desk' && !hasNote) {
          setHasNote(true)
          toast({
            title: 'Found a note!',
            description: 'The note reads: "The key is behind the painting..."',
            status: 'info',
            duration: 3000,
            isClosable: true,
          })
        }
        break
      case 'living-room':
        if (action === 'examine-painting' && hasNote && !hasKey) {
          setHasKey(true)
          addToInventory('key')
          toast({
            title: 'Found a key!',
            description: 'You found a key behind the painting.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }
        break
      case 'exit':
        if (action === 'use-key' && hasKey && !hasSolvedPuzzle) {
          setHasSolvedPuzzle(true)
          toast({
            title: 'Congratulations!',
            description: 'You escaped the room!',
            status: 'success',
            duration: null,
            isClosable: true,
          })
        }
        break
    }
  }

  const renderRoomContent = () => {
    switch (currentRoom) {
      case 'study':
        return (
          <VStack spacing={4}>
            <Text>You are in a dimly lit study. There's a desk with drawers.</Text>
            <Button onClick={() => handleRoomInteraction('examine-desk')}>
              Examine Desk
            </Button>
          </VStack>
        )
      case 'living-room':
        return (
          <VStack spacing={4}>
            <Text>
              A cozy living room with an old painting on the wall.
            </Text>
            <Button onClick={() => handleRoomInteraction('examine-painting')}>
              Examine Painting
            </Button>
          </VStack>
        )
      case 'exit':
        return (
          <VStack spacing={4}>
            <Text>You've reached the exit door. It's locked.</Text>
            {hasKey && (
              <Button onClick={() => handleRoomInteraction('use-key')}>
                Use Key
              </Button>
            )}
          </VStack>
        )
      default:
        return null
    }
  }

  return (
    <Box p={8}>
      <Grid templateColumns="1fr 3fr" gap={8}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="xl" fontWeight="bold">
            Navigation
          </Text>
          <Button
            onClick={() => setCurrentRoom('study')}
            colorScheme={currentRoom === 'study' ? 'teal' : 'gray'}
          >
            Study
          </Button>
          <Button
            onClick={() => setCurrentRoom('living-room')}
            colorScheme={currentRoom === 'living-room' ? 'teal' : 'gray'}
          >
            Living Room
          </Button>
          <Button
            onClick={() => setCurrentRoom('exit')}
            colorScheme={currentRoom === 'exit' ? 'teal' : 'gray'}
          >
            Exit
          </Button>
          <Box mt={8}>
            <Text fontSize="xl" fontWeight="bold">
              Inventory
            </Text>
            {inventory.length === 0 ? (
              <Text>Empty</Text>
            ) : (
              inventory.map((item) => (
                <Text key={item} color="yellow.200">
                  {item}
                </Text>
              ))
            )}
          </Box>
        </VStack>
        <Box
          bg="gray.800"
          p={6}
          borderRadius="md"
          minHeight="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {renderRoomContent()}
        </Box>
      </Grid>
    </Box>
  )
}

export default Game 