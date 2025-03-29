import { Grid, Paper, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import {
  Android,
  Apple,
  Arduino,
  Bootstrap,
  C,
  CSharp,
  CSS,
  Docker,
  Figma,
  Firebase,
  Git,
  HTML,
  Java,
  JavaScript,
  Kotlin,
  Linux,
  MaterialUI,
  Raspberry,
  ReactIcon,
  Rust,
  TypeScript,
  Ubuntu,
  Unity,
  Windows,
} from './Icons';

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
      <Typography
        variant="h3"
        fontWeight="bold"
        color={lightBlue[900]}
        gutterBottom
      >
        Knowledges
      </Typography>
      <Grid
        container
        direction="row"
        gap={4}
        alignItems="center"
        justifyContent="center"
      >
        <Android />
        <Apple />
        <Linux />
        <Ubuntu />
        <Windows />
        <Arduino />
        <Raspberry />
        <CSS />
        <HTML />
        <Bootstrap />
        <MaterialUI />
        <ReactIcon />
        <JavaScript />
        <TypeScript />
        <Java />
        <Kotlin />
        <Rust />
        <C />
        <CSharp />
        <Unity />
        <Docker />
        <Figma />
        <Firebase />
        <Git />
      </Grid>
    </Paper>
  );
}
