import { createContext } from 'react';

interface ContextProp {
  isMenuOpen: boolean;
  // Methods
  toggleSideMenu: () => void;
}

export const UiContext = createContext({} as ContextProp);
