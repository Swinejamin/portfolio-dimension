/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ThemeProvider } from 'styled-components'
const mainTheme = { colors: { mainDark: 'red' } }
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={mainTheme}>{element}</ThemeProvider>
)
