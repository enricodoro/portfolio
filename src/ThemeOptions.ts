import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{
            main: lightBlue[900],
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    color: 'white',
                    borderRadius: '24px'
                }
            },
        }
    }
})

export default theme