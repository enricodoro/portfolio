import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { StepIconProps, styled } from "@mui/material";

const CustomIconRoot = styled('div')(({ theme }) => ({
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
    border: '2px solid black',
  }))
  
  const HistoryEduIconRoot = styled(CustomIconRoot)<{
    ownerState: { completed?: boolean; active?: boolean }
  }>(({ ownerState }) => ({
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
  
  const WorkIconRoot = styled(CustomIconRoot)<{
    ownerState: { completed?: boolean; active?: boolean }
  }>(({ ownerState }) => ({
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, #B0E6A1 0%, #77E05A 50%, #5CAD45 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
      'linear-gradient( 136deg, #B0E6A1 0%, #77E05A 50%, #5CAD45 100%)',
    }),
  }))
  
  const SchoolIconRoot = styled(CustomIconRoot)<{
    ownerState: { completed?: boolean; active?: boolean }
  }>(({ ownerState }) => ({
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, #E69997 0%, #E05351 50%, #AD413F 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, #E69997 0%, #E05351 50%, #AD413F 100%)',
    }),
  }))
  
  function CustomHistoryEduIcon(props: StepIconProps) {
    const { active, completed, className } = props
  
    return (
      <HistoryEduIconRoot ownerState={{ completed, active }} className={`${className} bubble-solid`}>
        <HistoryEduIcon />
      </HistoryEduIconRoot>
    )
  }
  
  function CustomWorkIcon(props: StepIconProps) {
    const { active, completed, className } = props
  
    return (
      <WorkIconRoot ownerState={{ completed, active }} className={`${className} bubble-solid`}>
        <WorkIcon />
      </WorkIconRoot>
    )
  }
  
  function CustomSchoolIcon(props: StepIconProps) {
    const { active, completed, className } = props
  
    return (
      <SchoolIconRoot ownerState={{ completed, active }} className={`${className} bubble-solid`}>
        <SchoolIcon />
      </SchoolIconRoot>
    )
  }

  export {
    CustomHistoryEduIcon,
    CustomWorkIcon,
    CustomSchoolIcon
};
