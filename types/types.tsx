import { ReactNode } from "react"

export type themeContextType = {
    darkMode: boolean,
    setDarkMode: any
}

export type themeContextProps = {
    children: ReactNode
}