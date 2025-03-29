import { Paper, Stack, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

export default function Footer() {
  return (
    <Paper
      sx={{
        backgroundColor: lightBlue[900],
        height: '128px',
        borderRadius: 0,
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="space-around"
        pt="32px"
        gap={1}
      >
        <Stack direction="row" gap={2}>
          <i
            className="devicon-figma-plain"
            style={{ color: 'white', fontSize: 32 }}
          />
          <i
            className="devicon-materialui-plain"
            style={{ color: 'white', fontSize: 32 }}
          />
          <i
            className="devicon-react-original"
            style={{ color: 'white', fontSize: 32 }}
          />
          <i
            className="devicon-typescript-plain"
            style={{ color: 'white', fontSize: 32 }}
          />
        </Stack>
        <Typography color="white">Made by Enrico D'Oro © 2022</Typography>
      </Stack>
    </Paper>
  );
}
