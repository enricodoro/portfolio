import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
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
  useScrollTrigger,
} from '@mui/material';
import { useState } from 'react';
import Logo from '../images/logo.png';
import { Button } from './Button/Button';
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function TopBar(props: any) {
  const [open, setOpen] = useState(false);
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <Box>
      <HideOnScroll {...props}>
        <AppBar>
          <Container sx={{ maxWidth: 'lg', p: '0 !important' }}>
            <Toolbar>
              <IconButton
                sx={{
                  display: { xs: 'flex', md: 'none' },
                }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon
                  sx={{ fill: (t) => t.palette.primary.contrastText }}
                />
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
                <Button onClick={() => props.exScroll(props.aboutRef)}>
                  About Me
                </Button>
                <Button onClick={() => props.exScroll(props.timelineRef)}>
                  Timeline
                </Button>
                <Button onClick={() => props.exScroll(props.projectsRef)}>
                  Projects
                </Button>
                <Button onClick={() => props.exScroll(props.knowledgesRef)}>
                  Knowledges
                </Button>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <IconButton href="mailto:er.enricodoro@gmail.com">
                  <MailOutlineIcon
                    sx={{ fill: (t) => t.palette.primary.contrastText }}
                  />
                </IconButton>
                <IconButton
                  href="https://www.facebook.com/ggoldenharry/"
                  target="_blank"
                >
                  <FacebookIcon
                    sx={{ fill: (t) => t.palette.primary.contrastText }}
                  />
                </IconButton>
                <IconButton
                  href="https://github.com/enricodoro"
                  target="_blank"
                >
                  <GitHubIcon
                    sx={{ fill: (t) => t.palette.primary.contrastText }}
                  />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/enrico-d-oro-482b64230/"
                  target="_blank"
                >
                  <LinkedInIcon
                    sx={{ fill: (t) => t.palette.primary.contrastText }}
                  />
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
        timelineRef={props.timelineRef}
        projectsRef={props.projectsRef}
        knowledgesRef={props.knowledgesRef}
      />
    </Box>
  );
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
        height={'100%'}
        role="presentation"
        onKeyDown={() => props.setOpen(false)}
      >
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                src={Logo}
                sx={{
                  p: '4px',
                  backgroundColor: (t) => t.palette.primary.main,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary="ENRICO D'ORO"
              secondary="Portfolio"
              sx={{ color: (t) => t.palette.primary.main }}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton
              onClick={() => {
                props.exScroll(props.aboutRef);
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
                props.exScroll(props.timelineRef);
              }}
            >
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText primary="Timeline" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => {
                props.exScroll(props.projectsRef);
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
  );
}
