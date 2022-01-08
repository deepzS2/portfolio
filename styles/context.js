import { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

const getDesignTokens = (mode) =>
  mode === 'light'
    ? {
        primary: { main: '#22223B' },
        secondary: { main: '#A3685C' },
        nav: { main: '#4A4E69' },
        background: { main: '#fff' },
        card: { main: '#F3F2F2' },
        text: {
          primary: 'hsla(240, 27%, 18%, .5)',
          secondary: '#F2E9E4',
        },
      }
    : {
        primary: { main: '#F2E9E4' },
        secondary: { main: '#C9ADA7' },
        nav: { main: '#F2E9E4' },
        background: { main: '#303030' },
        card: { main: '#575764' },
        text: {
          primary: 'hsla(240, 27%, 18%, .5)',
          secondary: '#F2E9E4',
        },
      };

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ['Poppins', 'sans-serif'].join(','),
        },
        palette: {
          mode,
          ...getDesignTokens(mode),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
