import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import Propic from '../images/propic.png'
import Timeline from './Timeline'

export default function About(props: any) {
  return (
    <Paper
      sx={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        p: '32px',
        borderRadius: '16px',
        maxWidth: '100%',
        mx: 'auto',
      }}
      elevation={8}
      ref={props.aboutRef}
    >
      <Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-around"
          gap={{ xs: 4, sm: 8 }}
        >
          <Stack alignItems="left" justifyContent="space-around">
            <Typography
              variant="h3"
              color={lightBlue[900]}
              fontWeight="bold"
              gutterBottom
            >
              About me
            </Typography>
            <Typography textAlign="justify">
              I'm Enrico D'Oro, born in Ivrea (Italy) in 1996, graduated in
              Computer Engineering from the Polytechnic of Turin and currently
              enrolled in the Software Master Degree Course. I like developing{' '}
              <b className="bold-text">web and mobile applications</b> and
              working on <b className="bold-text">interfaces design</b>, in
              order to produce a useful and easy to use product. I am interested
              in studying and discovering UI/UX principles and guidelines.
            </Typography>
          </Stack>
          <Avatar
            src={Propic}
            sx={{
              width: '128px',
              height: '128px',
            }}
          />
        </Stack>
        <Timeline />
      </Stack>
    </Paper>
  )
}
