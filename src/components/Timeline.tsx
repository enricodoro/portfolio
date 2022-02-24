import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import {
  Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { useState } from 'react'

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(3,155,229) 0%,rgb(2,137,209) 50%,rgb(1,87,155) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(3,155,229) 0%,rgb(2,137,209) 50%,rgb(1,87,155) 100%)',
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

const CustomIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(3,155,229) 0%, rgb(2,137,209) 50%, rgb(1,87,155) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(3,155,229) 0%, rgb(2,137,209) 50%, rgb(1,87,155) 100%)',
  }),
}))

function CustomIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <HistoryEduIcon />,
    2: <WorkIcon />,
    3: <SchoolIcon />,
    4: <HistoryEduIcon />,
  }

  return (
    <CustomIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </CustomIconRoot>
  )
}

export default function Timeline() {
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
    <Stepper
      alternativeLabel
      activeStep={4}
      orientation={mobile ? 'vertical' : 'horizontal'}
      connector={mobile ? null : <CustomConnector />}
      sx={{ mt: '32px' }}
    >
      <Step sx={{ marginX: 'auto', marginBottom: '16px' }}>
        <StepLabel StepIconComponent={CustomIcon}>
          <Typography textAlign="center" variant="caption" marginX="auto">
            2015
          </Typography>
          <p />
          <Typography
            textAlign="center"
            variant="body1"
            marginX="auto"
            fontWeight="bold"
            color={lightBlue[900]}
          >
            Enrolled in Computer Engineering Bachelor Degree Course at the
            Polytechnic of Turin
          </Typography>
        </StepLabel>
      </Step>
      <Step sx={{ marginX: 'auto', marginBottom: '16px' }}>
        <StepLabel StepIconComponent={CustomIcon}>
          <Typography textAlign="center" variant="caption" marginX="auto">
            2018
          </Typography>
          <p />
          <Typography
            textAlign="center"
            variant="body1"
            marginX="auto"
            fontWeight="bold"
            color={lightBlue[900]}
          >
            Seica Internship
          </Typography>
        </StepLabel>
      </Step>
      <Step sx={{ marginX: 'auto', marginBottom: '16px' }}>
        <StepLabel StepIconComponent={CustomIcon}>
          <Typography textAlign="center" variant="caption" marginX="auto">
            2020
          </Typography>
          <p />
          <Typography
            textAlign="center"
            variant="body1"
            marginX="auto"
            fontWeight="bold"
            color={lightBlue[900]}
          >
            Graduated in Computer Engineering
          </Typography>
        </StepLabel>
      </Step>
      <Step sx={{ marginX: 'auto', marginBottom: '16px' }}>
        <StepLabel StepIconComponent={CustomIcon}>
          <Typography textAlign="center" variant="caption" marginX="auto">
            2020
          </Typography>
          <p />
          <Typography
            textAlign="center"
            variant="body1"
            marginX="auto"
            fontWeight="bold"
            color={lightBlue[900]}
          >
            Enrolled in the Software Master Degree Course at the Polytechnic of
            Turin
          </Typography>
        </StepLabel>
      </Step>
    </Stepper>
  )
}
