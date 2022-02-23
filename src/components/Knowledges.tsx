import { Paper, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { React } from './Icons'

export default function Knowledges(props: any) {
  return (
    <Paper
      sx={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        filter: 'blur',
        p: '32px',
        borderRadius: '16px',
        maxWidth: 'lg',
        mx: 'auto',
      }}
      elevation={8}
      ref={props.knowledgesRef}
    >
      <Typography variant="h2" fontWeight="bold" color={lightBlue[900]}>
        Knowledges
      </Typography>
    </Paper>
  )
}
