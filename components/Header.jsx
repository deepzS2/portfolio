import React from 'react';
import Logo from './Logo';
import { useColorMode } from '../styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.main,
    boxShadow: 'none',
    padding: '.5rem 2.5rem',
    '@media (max-width: 900px)': {
      padding: '.5rem .5rem',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  navItem: {
    fontWeight: 400,
    size: '5.125rem',
    marginLeft: '20px',
    color: theme.palette.nav.main,
    textAlign: 'center',
    textDecoration: 'none',
    '@media (max-width: 900px)': {
      marginLeft: 0,
      size: 'initial',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginTop: '2.5rem',
    },
  },
  menuIcon: {
    color: theme.palette.nav.main,
  },
  drawer: {
    width: '40%',
    padding: '.5rem 1rem',
  },
}));

const headersData = [
  {
    label: 'Currículo',
    href: '#curriculo',
  },
  {
    label: 'Sobre',
    href: '#sobre',
  },
  {
    label: 'Projetos',
    href: '#projetos',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
];

export default function Header({ state, setState, refs }) {
  const classes = useStyles();
  const { toggleColorMode, mode } = useColorMode();

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <Logo />

      <div>
        {headersData.map(({ label, href }) => (
          <Button
            className={classes.navItem}
            component={(props) => <AnchorLink offset="100" {...props} />}
            key={label}
            href={href}
          >
            {label}
          </Button>
        ))}
      </div>
    </Toolbar>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        <Logo />
        <IconButton
          className={classes.menuIcon}
          edge="start"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={state.drawerOpen}
          classes={{ paper: classes.drawer }}
          onClose={handleDrawerClose}
        >
          <div>
            {headersData.map(({ label, href }) => (
              <Link
                href={href}
                style={{ textDecoration: 'none' }}
                key={label}
                component={(props) => <AnchorLink offset="100" {...props} />}
              >
                <MenuItem className={classes.navItem}>{label}</MenuItem>
              </Link>
            ))}
          </div>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {state.mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
