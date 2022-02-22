import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import Propic from '../images/propic.png'

export default function About(props: any) {
  let paragraph =
    "I'm Enrico D'Oro, born in Ivrea (Italy) in 1996, graduated in Computer Engineering from the Polytechnic of Turin and currently enrolled in the Software master degree course. I like developing web and mobile applications and working on interfaces design, in order to produce a useful and easy to use product. I am interested in studying and discovering UI/UX principles and guidelines."

  return (
    <Paper
      sx={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        p: '32px',
        borderRadius: '16px',
        mt: '32px',
        maxWidth: 'lg',
        mx: 'auto',
      }}
      elevation={8}
      ref={props.aboutRef}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-around"
        gap={{ xs: 4, sm: 8 }}
      >
        <Avatar
          src={Propic}
          sx={{
            width: '256px',
            height: '256px',
          }}
        />
        <Stack alignItems="left" justifyContent="space-around">
          <Typography variant="h2" color={lightBlue[900]} fontWeight="bold">
            ABOUT ME
          </Typography>
          <Typography textAlign="justify">{paragraph}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
