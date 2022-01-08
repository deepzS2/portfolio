import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { makeStyles, useTheme } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5rem',
    width: '100%',
    padding: '2rem 2.5rem',

    '@media (max-width: 900px)': {
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '3rem',
  },
  content: {
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '1rem',
    alignItems: 'center',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box id="contato" className={classes.container}>
      <Typography
        className={classes.title}
        align="center"
        color="primary"
        variant="h2"
        component="h1"
      >
        Contato
      </Typography>
      <Typography className={classes.content} color="secondary" component="p">
        Os meios de contato profissionais disponíveis são via Email e Linkedin
        onde o restante, que por conta de spams do website anterior, irão
        permanecer indisponíveis, como por exemplo: WhatsApp, Facebook,
        Instagram, etc.
      </Typography>
      <Box className={classes.iconsContainer}>
        <a href="mailto:alanbackman10@hotmail.com">
          <Image
            src={`/email-${theme.palette.mode}.svg`}
            width="56"
            height="56"
            alt="Email"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alanbackmanramos/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`/linkedin-${theme.palette.mode}.svg`}
            width="46"
            height="46"
            alt="Linkedin"
          />
        </a>
      </Box>
    </Box>
  );
}
