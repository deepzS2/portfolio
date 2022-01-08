import { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Curriculum from '../components/Curriculum';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '3rem',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    if (window) {
      window.addEventListener('resize', setResponsiveness);

      return () => {
        window.removeEventListener('resize', setResponsiveness);
      };
    }
  }, []);

  return (
    <>
      <Header state={state} setState={setState} />
      <main className={classes.main}>
        <Welcome />
        <Curriculum />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
