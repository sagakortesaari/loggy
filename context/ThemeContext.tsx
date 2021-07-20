import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themeContextType, themeContextProps } from "../types/types"

const themeContextDefaultValues: themeContextType = {
    darkMode: false,
    setDarkMode: () => { }
};

export const Context = createContext<themeContextType>(themeContextDefaultValues);

export function useTheme() {
    return useContext(Context);
}

export const ThemeContext = ({ children }: themeContextProps) => {
    const [darkMode, setDarkMode] = useState(false);

    const value = {
        darkMode,
        setDarkMode
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}