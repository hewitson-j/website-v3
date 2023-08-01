import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: 'Arial'
  }
});

interface ThemeProps {
    children: ReactNode
}

export default function Themes({children}: ThemeProps){
    return <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
}