import { create } from 'zustand'

interface GameState {
  currentRoom: string
  inventory: string[]
  hasKey: boolean
  hasNote: boolean
  hasSolvedPuzzle: boolean
  addToInventory: (item: string) => void
  removeFromInventory: (item: string) => void
  setCurrentRoom: (room: string) => void
  setHasKey: (value: boolean) => void
  setHasNote: (value: boolean) => void
  setHasSolvedPuzzle: (value: boolean) => void
}

export const useGameStore = create<GameState>((set) => ({
  currentRoom: 'study',
  inventory: [],
  hasKey: false,
  hasNote: false,
  hasSolvedPuzzle: false,
  addToInventory: (item) =>
    set((state) => ({ inventory: [...state.inventory, item] })),
  removeFromInventory: (item) =>
    set((state) => ({
      inventory: state.inventory.filter((i) => i !== item),
    })),
  setCurrentRoom: (room) => set({ currentRoom: room }),
  setHasKey: (value) => set({ hasKey: value }),
  setHasNote: (value) => set({ hasNote: value }),
  setHasSolvedPuzzle: (value) => set({ hasSolvedPuzzle: value }),
})) 