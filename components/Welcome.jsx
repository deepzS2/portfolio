import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactSVG } from 'react-svg';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: '5rem',
    paddingLeft: 0,
    paddingRight: 0,
    display: 'grid',
    gridTemplateRows: '50px 250px auto',
    gridTemplateColumns: '1fr 1fr',
    // alignItems: 'center',
    justifyItems: 'start',
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
    '@media (max-width: 1175px)': {
      gridTemplateRows: '30px 175px auto',
      alignItems: 'flex-start',
    },
    '@media (max-width: 975px)': {
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'auto auto auto auto',
      gap: '2rem',
    },
    '@media (max-width: 900px)': {
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
    },
  },
  helloBox: {
    gridRow: '2',
    '@media (max-width: 975px)': {
      gridRow: '3',
      justifySelf: 'center',
    },
  },
  welcomeText: {
    '@media (max-width: 1175px)': {
      fontSize: '1.25rem',
    },
    '@media (max-width: 975px)': {
      gridRow: '2',
      textAlign: 'center',
      width: '100%',
    },
    '@media (max-width: 440px)': {
      fontSize: '1rem',
    },
  },
  emphasisText: {
    fontWeight: 600,
    fontSize: '3.65rem',
    '@media (max-width: 1570px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 1310px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 1175px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 975px)': {
      fontSize: '3.65rem',
    },
    '@media (max-width: 775px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 535px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 440px)': {
      fontSize: '1.5rem',
    },
  },
  textBox: {
    padding: '.5rem',
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
  },
  bottomBox: {
    gridRow: '3',
    '@media (max-width: 975px)': {
      gridRow: '4',
    },
  },
  bottomText: {
    width: '75%',
    color:
      theme.palette.mode === 'light'
        ? 'hsla(240, 27%, 18%, 0.5)'
        : 'hsla(21, 35%, 92%, 0.5)',
    '@media (max-width: 1175px)': {
      fontSize: '.8rem',
    },
    '@media (max-width: 975px)': {
      fontSize: '1.25rem',
      width: '100%',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 440px)': {
      fontSize: '.75rem',
    },
  },
  welcomeImg: {
    gridRow: 'span 3',
    justifySelf: 'right',
    width: '100%',
    height: '100%',
    '@media (max-width: 975px)': {
      gridRow: '1 / 1',
      width: '100%',
      height: 'auto',
    },
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Typography
        className={classes.welcomeText}
        variant="h5"
        color="secondary"
      >
        Bem vindo ao meu portfólio
      </Typography>
      <Box className={classes.helloBox}>
        <Typography
          className={classes.emphasisText}
          style={{ marginTop: '1rem' }}
          color="primary"
          component="h1"
        >
          Olá! Eu sou Alan, e sou
        </Typography>
        <Box className={classes.textBox}>
          <Carousel
            autoPlay
            indicators={false}
            navButtonsAlwaysInvisible={true}
            interval={2500}
            animation="slide"
          >
            <Typography
              className={classes.emphasisText}
              style={{ color: 'hsl(11, 24%, 72%)', textAlign: 'center' }}
              component="h1"
            >
              Web developer
            </Typography>
            <Typography
              className={classes.emphasisText}
              style={{ color: 'hsl(11, 24%, 72%)', textAlign: 'center' }}
              component="h1"
            >
              UI/UX Designer
            </Typography>
            <Typography
              className={classes.emphasisText}
              style={{ color: 'hsl(11, 24%, 72%)', textAlign: 'center' }}
              component="h1"
            >
              Game developer
            </Typography>
          </Carousel>
        </Box>
      </Box>
      <Box className={classes.bottomBox}>
        <Typography className={classes.bottomText}>
          Sou um estudante de programação e atualmente sigo minha carreira nessa
          área tanto para jogos tanto para TI. Ao longo dos meus estudos pude
          aprender sobre desenvolvimento para Web que foi onde me senti mais
          confortável e também na área de desenvolvimento de jogos utilizando
          C#.
        </Typography>
      </Box>
      <Box className={classes.welcomeImg}>
        <ReactSVG
          src="/welcome.svg"
          alt="welcome"
          beforeInjection={(svg) => {
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
          }}
        />
      </Box>
    </Box>
  );
}
