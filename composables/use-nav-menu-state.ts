const state = {
  navMenuIsOpen: false
}

export const useNavMenuState = () => {
  return useState('useNavMenuState', () => state)
}
