import { ButtonProps } from '@mui/material';

export default function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <Button
      sx={{ my: 2, display: 'block', color: (t) => t.palette.secondary.main }}
      {...props}
    >
      {children}
    </Button>
  );
}
