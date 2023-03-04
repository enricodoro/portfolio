import {
  Box, Step,
  StepConnector,
  stepConnectorClasses, StepLabel,
  Stepper,
  styled,
  Typography
} from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { useState } from 'react'
import { steps } from './Steps'

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#45484A 0%,#778088 50%,#45484A 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#45484A 0%,#778088 50%,#45484A 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 16,
  },
}))

export default function Timeline(props: any) {
  const mql = window.matchMedia('(max-width: 600px)')
  const [mobile, setMobile] = useState(false)

  mql.addEventListener('change', (e) => {
    const mobileView = e.matches
    if (mobileView) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  })

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        p: '32px',
        borderRadius: '16px',
        maxWidth: '100%',
        mx: 'auto',
        overflow: 'auto'
      }}
      ref={props.timelineRef}
    >
      <Stepper
        alternativeLabel
        activeStep={steps.length}
        orientation={mobile ? 'vertical' : 'horizontal'}
        connector={mobile ? null : <CustomConnector />}
        sx={{ mt: '32px', width: 'auto' }}
      >
        {steps.map(step =>
          <Step sx={{ marginX: 'auto', marginBottom: '16px', cursor: step.link ? "pointer" : "default" }} onClick={() => step.link && window.open(step.link)}>
            <StepLabel StepIconComponent={step.icon}>
              <Typography textAlign="center" variant="caption" marginX="auto" fontWeight="bold">
                {step.year}
              </Typography>
              <p />
              <Typography
                textAlign="center"
                variant="body1"
                marginX="auto"
                fontWeight="bold"
                color={lightBlue[900]}
                fontSize='12px'
              >
                {step.title}
              </Typography>
            </StepLabel>
          </Step>
        )}

      </Stepper>
    </Box>
  )
}
