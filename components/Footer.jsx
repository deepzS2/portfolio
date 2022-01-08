import React from 'react';
import Logo from './Logo';
import { Typography, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactSVG } from 'react-svg';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '10vh',
    background: '#22223B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '.75rem 2.5rem',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      gap: '1rem',
    },
  },
  github: {
    background: 'transparent',
    width: '54px',
    height: '54px',
    fill: theme.palette.text.secondary,
  },
  copyright: {
    '@media (max-width: 910px)': {
      fontSize: '.75rem',
      width: '15rem',
      textAlign: 'center',
    },
    '@media (max-width: 610px)': {
      width: '10rem',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <Logo alwaysLight />
      <Typography
        color="textSecondary"
        component="p"
        className={classes.copyright}
      >
        Copyright &copy; 2021 Alan Ramos. Todos os direitos autorais reservados.
      </Typography>
      <Avatar
        className={classes.github}
        background="none"
        component="a"
        href="https://github.com/deepzS2/"
        target="_blank"
      >
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'width: 100%');
          }}
          src="/github.svg"
        />
      </Avatar>
    </footer>
  );
}
