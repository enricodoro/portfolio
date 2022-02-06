import { Paper, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import { React } from './Icons'

export default function Knowledges(props: any) {
  return (
    <Paper
      sx={{
        backgroundColor: orange[100],
        p: '32px',
        borderRadius: '16px',
        marginTop: '32px',
      }}
      ref={props.knowledgesRef}
    >
      <Typography variant="h2" fontWeight="bold" color={orange[900]}>
        Knowledges
      </Typography>
    </Paper>
  )
}
