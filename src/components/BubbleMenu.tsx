import { Box } from '@mui/material'

function EmptyBubble(props: any) {
  return (
    <Box
      className="bubble"
      sx={{
        backgroundColor: 'transparent',
        width: '128px',
        height: '128px',
        marginX: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
        }}
        marginX="auto"
      >
        {props.icon}
      </Box>
    </Box>
  )
}

export { EmptyBubble }
