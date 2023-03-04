import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  styled,
  Toolbar,
  useScrollTrigger
} from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { useState } from 'react'
import Logo from '../images/logo.png'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function TopBar(props: any) {
  const [open, setOpen] = useState(false)
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

  return (
    <Box>
      <HideOnScroll {...props}>
        <AppBar>
          <Container sx={{ maxWidth: 'lg', p: '0 !important' }}>
            <Toolbar sx={{}}>
              <IconButton
                sx={{
                  display: { xs: 'flex', md: 'none' },
                }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon sx={{ fill: 'white' }} />
              </IconButton>
              <Avatar
                src={Logo}
                sx={{
                  mr: 2,
                  width: '32px',
                  height: '32px',
                  display: { xs: 'none', md: 'flex' },
                }}
              />
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
                  onClick={() => props.exScroll(props.timelineRef)}
                >
                  Timeline
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
              <Box sx={{ flexGrow: 1 }} />
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
                <IconButton
                  href="https://github.com/enricodoro"
                  target="_blank"
                >
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
      </HideOnScroll>
      <Offset />
      <CustomDrawer
        open={open}
        setOpen={setOpen}
        exScroll={props.exScroll}
        aboutRef={props.aboutRef}
        projectsRef={props.projectsRef}
        knowledgesRef={props.knowledgesRef}
      />
    </Box>
  )
}

function CustomDrawer(props: any) {
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <Box
        width={250}
        role="presentation"
        onKeyDown={() => props.setOpen(false)}
      >
        <List>
          <ListItem>
            <ListItemAvatar
              children={
                <Avatar
                  src={Logo}
                  sx={{ backgroundColor: lightBlue[900], p: '4px' }}
                />
              }
            />
            <ListItemText
              primary="ENRICO D'ORO"
              secondary="Portfolio"
              sx={{ color: lightBlue[900] }}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton
              onClick={() => {
                props.exScroll(props.aboutRef)
              }}
            >
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="About me" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => {
                props.exScroll(props.projectsRef)
              }}
            >
              <ListItemIcon>
                <DeveloperBoardIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => props.exScroll(props.knowledgesRef)}>
              <ListItemIcon>
                <EmojiObjectsIcon />
              </ListItemIcon>
              <ListItemText primary="Knowledges" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
