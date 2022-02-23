import DownloadIcon from '@mui/icons-material/Download'
import GitHubIcon from '@mui/icons-material/GitHub'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { useState } from 'react'
import BasilPreview from '../images/basil_preview.png'
import Seica from '../images/seica-productronics.png'
import StopAndGo from '../images/stop_and_go_preview.png'
import SurfeysPreview from '../images/surfeys_preview.png'
import WASDPreview from '../images/wasd_preview.png'
import {
  Android,
  Bootstrap,
  CSharp,
  Figma,
  Firebase,
  JavaScript,
  Kotlin,
  MaterialUI,
  React,
  TypeScript,
  Unity,
} from './Icons'
let SeicaReport = require('../downloads/report.pdf')
let GameDesignPitch = require('../downloads/cicles_pitch.pdf')

export default function Projects(props: any) {
  const [selectedItem, setSelectedItem] = useState(0)

  let projects = [
    'Game Design',
    'Mobile Application',
    'Web Application',
    'Software Engineering',
    'Human Computer Interaction',
  ]

  return (
    <Paper
      sx={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        p: '32px',
        borderRadius: '16px',
        maxWidth: 'lg',
        mx: 'auto',
      }}
      className="project-paper"
      elevation={8}
      ref={props.projectsRef}
    >
      <Typography variant="h2" fontWeight="bold" color={lightBlue[900]}>
        Projects
      </Typography>
      <Grid container direction="row" alignItems="flex-start" gap={4}>
        <Grid item xs={3}>
          <Box>
            <List>
              <ListItem sx={{ backgroundColor: 'transparent' }} component="div">
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ opacity: 0.7 }}
                >
                  Internships
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ borderRadius: '16px' }}
                  onClick={() => setSelectedItem(0)}
                  selected={selectedItem === 0}
                >
                  Seica Internship
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem sx={{ backgroundColor: 'transparent' }} component="div">
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ opacity: 0.7 }}
                >
                  University projects
                </Typography>
              </ListItem>
              {projects.map((p, i) => (
                <>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ borderRadius: '16px' }}
                      onClick={() => setSelectedItem(i + 1)}
                      selected={selectedItem === i + 1}
                    >
                      {p}
                    </ListItemButton>
                  </ListItem>
                </>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs mt="24px">
          {selectedItem === 0 ? (
            <SeicaProject />
          ) : selectedItem === 1 ? (
            <GameDesignProject />
          ) : selectedItem === 2 ? (
            <MobileProject />
          ) : selectedItem === 3 ? (
            <WebProject />
          ) : selectedItem === 4 ? (
            <SoftEngProject />
          ) : selectedItem === 5 ? (
            <HCIProject />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

function SeicaProject() {
  return (
    <Box>
      <Stack alignItems="center" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <img alt="seica-logo" width="256px" src={Seica} />
          <CSharp />
        </Stack>
        <Typography textAlign="justify">
          During the bachelor degree course in Computer Engineering, I have
          undertaken a two months internship at the Seica S.p.A. company located
          in Strambino (Italy). Here I developed a software to automate and
          control the testing of electronic boards produced by the company.
          Below you can download the report I wrote about this experience.
        </Typography>
        <Button
          href={SeicaReport}
          variant="contained"
          sx={{ width: 'fit-content' }}
          startIcon={<DownloadIcon />}
        >
          Download report
        </Button>
      </Stack>
    </Box>
  )
}

function GameDesignProject() {
  return (
    <Box>
      <Stack alignItems="center" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <Unity />
          <CSharp />
        </Stack>

        <Typography textAlign="justify">
          During the master degree course I partecipated in the development of a
          project for the Game Design course. For about three months, I
          collaborated with five other students in the{' '}
          <b className="bold-text">creation of a videogame from scratch</b>,
          including every aspect of it: we produced a trailer, a playable
          prototype and a pitch document as if we were to present it to a
          publisher to have it funded. We named it "Cicles" and each one of us
          had his specific role in the group: personally I programmed most of
          the prototype using <b className="bold-text">Unity</b> and I was also
          in charge of managing the sound effects.
        </Typography>
        <iframe
          height="270"
          width="480"
          src="https://www.youtube.com/embed/xTjQoG0lELg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder={0}
        />
        <Stack direction="row" gap={1}>
          <Button
            href="https://github.com/enricodoro/game-design-cicles"
            target="_blank"
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<GitHubIcon />}
          >
            View code
          </Button>
          <Button
            href={GameDesignPitch}
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<DownloadIcon />}
          >
            Download pitch
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

function MobileProject() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Stack alignItems="center" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <Android />
          <Kotlin />
          <Firebase />
        </Stack>
        <Typography textAlign="justify">
          I worked with three other students in the development of a{' '}
          <b className="bold-text">carsharing mobile application for Android</b>{' '}
          for the Mobile Application Development course. The application was
          developed from scratch using <b className="bold-text">Kotlin</b> and
          Android Studio as IDE, following the Material Design guidelines. At
          the end of the project (completed in about 3 months), we released a
          quick presentation video.
        </Typography>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/qFpMaf8a6X8"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Stack direction="row" gap={1}>
          <Button
            href="https://github.com/enricodoro/mobile-app-carpooling"
            target="_blank"
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<GitHubIcon />}
          >
            View code
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<VisibilityIcon />}
          >
            Preview
          </Button>
        </Stack>
      </Stack>
      <MADPreview open={open} setOpen={setOpen} />
    </Box>
  )
}

function WebProject() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Stack alignItems="center" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <JavaScript />
          <React />
          <Bootstrap />
        </Stack>
        <Typography textAlign="justify">
          Another project that I developed was for the Web Application course,
          and I developed it on my own, using{' '}
          <b className="bold-text">React Bootstrap, Javascript, JSX and Node</b>
          . We had 20 days to develop a{' '}
          <b className="bold-text">survey website</b>, with the possibility to
          login and create your own surveys and let other unregistered users to
          answer them and storing all the answers in a database (using SQlite)
          so that can be retrieved and viewed by the user that created that
          survey.
        </Typography>
        <Stack direction="row" gap={1}>
          <Button
            href="https://github.com/enricodoro/webapp-survey"
            target="_blank"
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<GitHubIcon />}
          >
            View code
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<VisibilityIcon />}
          >
            Preview
          </Button>
        </Stack>
      </Stack>
      <WA1Preview open={open} setOpen={setOpen} />
    </Box>
  )
}

function SoftEngProject() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Stack alignItems="center" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <TypeScript />
          <MaterialUI />
          <Figma />
        </Stack>
        <Typography textAlign="justify">
          One of the last project I did, was for the Software Engineering II
          course. It consisted in developing a{' '}
          <b className="bold-text">
            Solidarity Purchasing Group application, following the agile
            methodology
          </b>
          : every two weeks we had to present the stories and features
          implemented by us and plan the ones to implement in the upcoming two
          weeks, for a total of four presentations (so roughly two months). I
          did this project with six other students, using{' '}
          <b className="bold-text">
            React and TypeScript and by following the Material UI guidelines
          </b>
          . At the end of the project we had to prepare a quick demonstration
          video, available here.
        </Typography>
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/5BFYhX3r99Q"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Stack direction="row" gap={1}>
          <Button
            href="https://github.com/enricodoro/basil"
            target="_blank"
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<GitHubIcon />}
          >
            View code
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{ width: 'fit-content' }}
            startIcon={<VisibilityIcon />}
          >
            Preview
          </Button>
        </Stack>
      </Stack>
      <SE2Preview open={open} setOpen={setOpen} />
    </Box>
  )
}

function HCIProject() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Stack alignItems="center" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <TypeScript />
          <MaterialUI />
          <Firebase />
          <Figma />
        </Stack>
        <Typography textAlign="justify">
          One of the last project I did was for the Human Computer Interaction
          course. I did it with three other students in about three months, and
          it consisted in the development of an application prototype, starting
          from a research of the needs of a specific group of users. In
          particular,{' '}
          <b className="bold-text">
            we decided to develop an app that would have helped multiplayer
            online PC videogamers in finding other people to play with
          </b>{' '}
          and keep their contacts to better and faster organize future matches.
        </Typography>

        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          sx={{ width: 'fit-content', borderRadius: '32px' }}
          startIcon={<VisibilityIcon />}
        >
          Preview
        </Button>
      </Stack>
      <HCIPreview open={open} setOpen={setOpen} />
    </Box>
  )
}

function HCIPreview(props: any) {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogContent>
        <Stack justifyContent="space-around" alignItems="center">
          <img alt="preview" src={WASDPreview} width="1024px" />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

function SE2Preview(props: any) {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogContent>
        <Stack justifyContent="space-around" alignItems="center">
          <img alt="preview" src={BasilPreview} width="1024px" />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

function MADPreview(props: any) {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogContent>
        <Stack justifyContent="space-around" alignItems="center">
          <img alt="preview" src={StopAndGo} width="1024px" />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

function WA1Preview(props: any) {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogContent>
        <Stack justifyContent="space-around" alignItems="center">
          <img alt="preview" src={SurfeysPreview} width="1024px" />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
