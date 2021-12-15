import { acceptHMRUpdate, defineStore } from 'pinia'

export interface NavMenuState {
  toggleNavMenu: () => void;
  menuIsOpen: Boolean;
};

export const useNavMenuState = defineStore({
  id: 'nav-menu-state',
  state: () => ({
    navMenuIsOpen: false,
  } as NavMenuState),
  getters: {
    menuIsOpen(state) {
      return state.navMenuIsOpen;
    }
  },
  actions: {
    toggleNavMenu() {
      this.navMenuIsOpen = !this.navMenuIsOpen;
    }
  }
});

