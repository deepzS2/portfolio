import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactSVG } from 'react-svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto',
    justifyContent: 'space-between',
    justifyItems: 'center',
    alignItems: 'center',
    rowGap: '100px',
    columnGap: '100px',
    width: '100%',
    marginTop: '5rem',
    filter: 'drop-shadow(0px 7px 5px rgba(0, 0, 0, .25))',
    backgroundImage: 'url(/curriculumBg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '2rem 2.5rem',

    '@media (max-width: 1350px)': {
      gridTemplateColumns: 'auto auto',
      gridTemplateRows: 'auto',
      justifyContent: 'space-around',
    },

    '@media (max-width: 900px)': {
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
      gridTemplateColumns: 'auto',
    },
  },
  item: {
    display: 'grid',
    // maxWidth: '410px',
    minHeight: '150px',
    rowGap: 3,
    columnGap: 6,
    gridTemplateRows: 'auto auto',
    gridTemplateColumns: 'auto 1fr',

    '@media (max-width: 415px)': {
      minHeight: '100px',
    },
  },
  icon: {
    gridRow: 'span 2',
  },
  title: {
    fontWeight: 600,
    '@media (max-width: 415px)': {
      fontSize: '1rem',
    },
  },
  text: {
    gridColumn: '2',
    fontWeight: 400,
    '@media (max-width: 415px)': {
      fontSize: '.75rem',
    },
  },
}));

const content = [
  {
    icon: '/html.svg',
    title: 'Criação de Websites',
    content:
      'A criação do Website. Com ele estruturamos o website desde a cabeça (head) ao corpo (body), onde a cabeça ficam as informações sobre o website e o corpo o conteúdo em si. Na criação utilizamos o HyperText Markup Language (HTML) tanto com um arquivo .html ou com frameworks.',
  },
  {
    icon: '/css.svg',
    title: 'Estilização de Website',
    content:
      'O embelezamento do Website. É aqui onde você pode estilizar o seu Website para agradar os olhos do usuário, sempre respeitando a teoria das cores e outros princípios do design para que o usuário tenha uma experiência incrível, usando arquivos .css ou frameworks.',
  },
  {
    icon: '/js.svg',
    title: 'Lógica de Websites',
    content:
      'Um Website sem lógica é apenas um Website estático que não possui nenhuma função, sem o JavaScript (lógica) ou outras linguagens para Web, não teríamos Websites com utilidades e coisas magnificas igual hoje.',
  },
  {
    icon: '/obj.svg',
    title: 'Orientação a Objetos',
    content:
      'Orientação a Objetos é um dos paradigmas da programação mais famosos do mercado que facilitam a vida do programador, mas isso não descarta outras como o Funcional, Lógico, Imperativo e etc. ',
  },
  {
    icon: '/sql.svg',
    title: 'Banco de dados relacional',
    content:
      'Salvar os dados dos usuários no papel é coisa do passado, com o banco de dados o armazenamento de informações se torna um trabalho fácil e automático, mas nunca se esqueça de fazer backups regulares e ter o dobro de segurança.',
  },
  {
    icon: '/solid.svg',
    title: 'Princípios SOLID',
    content:
      'Os princípios SOLID se aplicam a qualquer linguagem de programação orientada a objetos, são muito utilizadas para manter um código organizado e que todos possam entender e realizar manutenções.',
  },
];

export default function Curriculum() {
  const classes = useStyles();

  return (
    <Box id="curriculo" className={classes.container}>
      {content.map(({ icon, title, content }) => (
        <Box className={classes.item} key={title}>
          <ReactSVG className={classes.icon} src={icon} />
          <Typography
            className={classes.title}
            variant="h6"
            component="h6"
            color="textSecondary"
          >
            {title}
          </Typography>
          <Typography
            className={classes.text}
            component="p"
            color="textSecondary"
          >
            {content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
