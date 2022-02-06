import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar } from '@mui/material'
import Logo from '../images/logo.png'

export default function TopBar(props: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar src={Logo} sx={{ mr: 2, width: '32px', height: '32px' }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, display: 'block' }}
              onClick={() => props.exScroll(props.aboutRef)}
            >
              About Me
            </Button>
            <Button
              sx={{ my: 2, display: 'block' }}
              onClick={() => props.exScroll(props.projectsRef)}
            >
              Projects
            </Button>
            <Button
              sx={{ my: 2, display: 'block' }}
              onClick={() => props.exScroll(props.knowledgesRef)}
            >
              Knowledges
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton href="mailto:er.enricodoro@gmail.com">
              <MailOutlineIcon sx={{ fill: 'white' }} />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/ggoldenharry/"
              target="_blank"
            >
              <FacebookIcon sx={{ fill: 'white' }} />
            </IconButton>
            <IconButton href="https://github.com/enricodoro" target="_blank">
              <GitHubIcon sx={{ fill: 'white' }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/enrico-d-oro-482b64230/"
              target="_blank"
            >
              <LinkedInIcon sx={{ fill: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
