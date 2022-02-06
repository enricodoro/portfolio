import DownloadIcon from '@mui/icons-material/Download'
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { lightGreen } from '@mui/material/colors'
import { useState } from 'react'
import Seica from '../images/seica-productronics.png'
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
        backgroundColor: lightGreen[100],
        p: '32px',
        borderRadius: '16px',
        marginTop: '32px',
      }}
      ref={props.projectsRef}
    >
      <Typography variant="h2" fontWeight="bold" color={lightGreen[900]}>
        Projects
      </Typography>
      <Grid container direction="row" alignItems="center" gap={4}>
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
                  Seica internship
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
                  Univeristy projects
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
        <Grid item xs>
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
      <Stack alignItems="left" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <img alt="seica-logo" width="256px" src={Seica} />
          <CSharp />
        </Stack>
        <Typography textAlign="justify">
          During the three-year degree course in Computer Engineering, I have
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
      <Stack alignItems="left" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <Unity />
          <CSharp />
        </Stack>
        <Typography textAlign="justify">
          During the same semester that I developed the carpooling application I
          partecipated in the development of two other projects for two
          different courses. In the first one, I collaborated with five other
          students in the creation of a videogame from scratch, including every
          aspect of it: we produced a trailer, a playable prototype and a pitch
          document as if we were to present it to a publisher to have it funded.
          We named it "Cicles" and each one of us had his specific role in the
          group: personally I programmed most of the prototype using Unity and I
          was in charge of managing the sound effects.
        </Typography>
        <Button
          href={GameDesignPitch}
          variant="contained"
          sx={{ width: 'fit-content' }}
          startIcon={<DownloadIcon />}
        >
          Download pitch
        </Button>
      </Stack>
    </Box>
  )
}

function MobileProject() {
  return (
    <Box>
      <Stack alignItems="left" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <Android />
          <Kotlin />
          <Firebase />
        </Stack>
        <Typography textAlign="justify">
          During the master's degree course I partecipated with three other
          students in the development of a carsharing mobile application for
          Android for the Mobile Application Development course. The application
          was developed from scratch using Kotlin and Android Studio as IDE,
          following the Material Design guidelines. At the end of the project
          (completed in about 3 months), we released a quick presentation video.
        </Typography>
      </Stack>
    </Box>
  )
}

function WebProject() {
  return (
    <Box>
      <Stack alignItems="left" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <JavaScript />
          <React />
          <Bootstrap />
        </Stack>
        <Typography textAlign="justify">
          The other project that I developed was for the Web Application course,
          and I developed it on my own, using React Bootstrap, Javascript, JSX
          and Node. We had 20 days to develop a survey website, with the
          possibility to login and create your own surveys and let other
          unregistered users to answer them and storing all the answers in a
          database (using SQlite) so that can be retrieved and viewed by the
          user that created that survey.
        </Typography>
      </Stack>
    </Box>
  )
}

function SoftEngProject() {
  return (
    <Box>
      <Stack alignItems="left" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <TypeScript />
          <MaterialUI />
          <Figma />
        </Stack>
        <Typography textAlign="justify">Description...</Typography>
      </Stack>
    </Box>
  )
}

function HCIProject() {
  return (
    <Box>
      <Stack alignItems="left" gap={4}>
        <Stack direction="row" gap={2} alignItems="center">
          <TypeScript />
          <MaterialUI />
          <Firebase />
          <Figma />
        </Stack>
        <Typography textAlign="justify">Description...</Typography>
      </Stack>
    </Box>
  )
}
