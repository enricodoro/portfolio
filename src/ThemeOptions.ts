import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#202216',
    },
    secondary: {
      main: '#F2DE98',
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
