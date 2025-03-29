import { Button, ButtonProps } from '@mui/material';
function CustomButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button sx={{ my: 2, display: 'block' }} {...props}>
      {children}
    </Button>
  );
}

export { CustomButton as Button };
