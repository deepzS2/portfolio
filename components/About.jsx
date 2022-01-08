import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';

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
  text: {
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  photo: {
    float: 'right',
    width: '20%',
    height: '350px',
    shapeOutside: 'circle(55%)',
    // flex: '1 0 30%',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box id="sobre" className={classes.container}>
      <Typography
        className={classes.title}
        align="center"
        color="primary"
        variant="h2"
        component="h1"
      >
        Sobre mim
      </Typography>
      <Box className={classes.contentContainer}>
        <Typography className={classes.text} component="p" color="secondary">
          <Avatar className={classes.photo}>
            <Image src="/me.png" alt="Alan" layout="fill" />
          </Avatar>
          Meu nome é Alan, tenho 18 anos, Ensino Médio e curso de Análise e
          Desenvolvimento de Sistemas (ETEC) completos, onde atualmente estou
          estudando Jogos Digitais na Cruzeiro do Sul Virtual e pretendo fazer
          Análise e Desenvolvimento de Sistemas na FATEC. Desenvolvi paixão por
          programação e outros aspectos do TI aos meus 12 anos quando me
          encontrei assistindo sobre o desenvolvimento de um jogo que eu gostava
          na época, a partir dai comecei a estudar como autodidata e aprendendo
          sobre Física aplicada em jogos, criação de roteiros, etc. além da
          parte da programação (C# em Unity). Fiz cursos certificados pela
          Udemy, semanas de desenvolvimento pela Rocketseat, entre outros.
          <br />
          Atualmente possuo conhecimento em JavaScript, TypeScript, NodeJS, C#
          (intermediário), Banco de Dados, frameworks front-end, Git e Github,
          Web Design, UI/UX, Photoshop e Blender. Onde sempre estou aberto para
          novas oportunidades de aprendizado de ferramentas e linguagens
          diferentes.
        </Typography>
      </Box>
    </Box>
  );
}
