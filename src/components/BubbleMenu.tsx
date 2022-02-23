import { Box, Typography } from '@mui/material'

function BubbleInternships() {
  return (
    <Box
      className="bubble"
      sx={{
        backgroundColor: 'orange',
        width: '150px',
        height: '150px',
        marginX: 'auto',
      }}
    >
      <Typography
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="24px"
        sx={{
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
        }}
      >
        Internships
      </Typography>
    </Box>
  )
}

function SeicaBubble() {
  return (
    <Box
      className="bubble"
      sx={{
        backgroundColor: 'orange',
        width: '100px',
        height: '100px',
        marginX: 'auto',
      }}
    >
      <Typography
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="18px"
        sx={{
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
        }}
      >
        Seica
      </Typography>
    </Box>
  )
}

export { BubbleInternships, SeicaBubble }
