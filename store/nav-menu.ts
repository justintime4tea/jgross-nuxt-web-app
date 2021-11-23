import { acceptHMRUpdate, defineStore } from 'pinia'

import { Store } from 'pinia';

export interface NavMenuState {
  toggleNavMenu: () => void;
  navMenuIsOpen: Boolean;
};

export const useNavMenuState = defineStore({
  id: 'nav-menu-state',
  state: () => ({
    navMenuIsOpen: false,
  } as NavMenuState),
  getters: {
    menuIsOpen() {
      return this.state.navMenuIsOpen;
    }
  },
  actions: {
    toggleNavMenu() {
      this.navMenuIsOpen = !this.navMenuIsOpen;
    }
  }
});

