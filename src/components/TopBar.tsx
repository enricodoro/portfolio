import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from '@mui/material'
import Logo from '../images/logo.png'

export default function TopBar(props: any) {
  return (
    <Box>
      <AppBar position="static">
        <Container sx={{ maxWidth: 'lg', p: '0 !important' }}>
          <Toolbar sx={{ p: '0 !important' }}>
            <Avatar src={Logo} sx={{ mr: 2, width: '32px', height: '32px' }} />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
              }}
            >
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
            <Box>
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
        </Container>
      </AppBar>
    </Box>
  )
}
