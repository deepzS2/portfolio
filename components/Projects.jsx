import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

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
    textAlign: 'center',
    marginBottom: '3rem',
  },
  projectContainer: {
    cursor: 'pointer',
    minHeight: '200px',
    width: '25%',
    margin: 'auto',
    backgroundColor: theme.palette.card.main,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
    padding: '1rem 1.25rem',
  },
  projectTitle: {
    marginBottom: '.5rem',
  },
  projectImg: {},
  projectDescription: {
    opacity: '.5',
    marginTop: '.5rem',
  },
  projectInfo: {
    fontStyle: 'italic',
    opacity: '.5',
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://api.github.com/users/deepzS2/repos'
    );

    setProjects(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box id="projetos" className={classes.container}>
      <Typography
        className={classes.title}
        align="center"
        color="primary"
        variant="h2"
        component="h1"
      >
        Projetos
      </Typography>
      <Carousel
        autoPlay
        navButtonsAlwaysInvisible={true}
        interval={2500}
        animation="slide"
        indicatorContainerProps={{
          style: {
            textAlign: 'center',
          },
        }}
      >
        {projects.map(
          ({ name, description, html_url, language, created_at }) => {
            if (!description) return;

            return (
              <Box
                onClick={() => window.open(html_url, '_blank')}
                className={classes.projectContainer}
                key={name}
              >
                <Typography
                  className={classes.projectTitle}
                  align="center"
                  variant="h6"
                  color="primary"
                >
                  {name}
                </Typography>
                <Typography
                  align="right"
                  component="p"
                  color="primary"
                  className={classes.projectInfo}
                >
                  {language}
                </Typography>
                <Typography
                  align="right"
                  component="p"
                  color="primary"
                  className={classes.projectInfo}
                >
                  {new Date(created_at).toLocaleDateString()}
                </Typography>
                <Typography
                  className={classes.projectDescription}
                  align="center"
                  component="p"
                  color="primary"
                >
                  {description}
                </Typography>
              </Box>
            );
          }
        )}
      </Carousel>
    </Box>
  );
}
