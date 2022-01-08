import Image from 'next/image';
import { Typography, Avatar, Box } from '@mui/material';
import { useColorMode } from '../styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    marginRight: '1em',
  },
  logoText: {
    fontWeight: 600,
    position: 'relative',
    cursor: 'pointer',
    marginLeft: '1em',
    '@media (max-width: 330px)': {
      fontSize: '1rem',
    },
  },
  modeImg: {
    background: 'none',
    width: '1.5rem',
    height: '1.5rem',
    position: 'absolute',
    right: '-20%',
    top: '-20%',
    '@media (max-width: 330px)': {
      width: '.75rem',
      height: '.75rem',
      right: '-12%',
      top: '-12%',
    },
  },
  lightText: {
    color: '#F2E9E4',
  },
}));

export default function Logo({ alwaysLight }) {
  const classes = useStyles();
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Box className={classes.container}>
      <Image
        className={classes.logoImg}
        src="/logo.png"
        width="52"
        height="52"
        alt="Logo"
      />
      <Typography
        onClick={toggleColorMode}
        variant="h6"
        component="h1"
        color={!alwaysLight ? 'primary' : 'initial'}
        className={
          !alwaysLight
            ? classes.logoText
            : `${classes.logoText} ${classes.lightText}`
        }
      >
        Alan Ramos
        <Avatar variant="square" className={classes.modeImg}>
          <Image
            src={mode === 'light' ? '/sun.png' : '/moon.png'}
            layout="fill"
            alt="Website mode"
          />
        </Avatar>
      </Typography>
    </Box>
  );
}
