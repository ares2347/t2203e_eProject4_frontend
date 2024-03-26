import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { ThemeProvider } from "styled-components"
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme } from "@mui/material"


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  let theme = createTheme({
    palette: {
      background: {
        paper: "#fff"
      }
    }
  })

  return (
    <html lang="en">
      <body >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
