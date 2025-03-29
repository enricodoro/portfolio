import { lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[900],
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h3: {
      fontSize: '2.4rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          borderRadius: '24px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
});

export default theme;
