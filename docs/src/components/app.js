import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import Sidebar from './sidebar';
import Resume from './../pages/resume';
import Milestones from './../pages/milestones';
import Stuff from '../pages/stuff';
import Publications from '../pages/publications';

import lifeData from './../data/life.json';
import songsData from './../data/songs.json';
import booksData from './../data/books.json';
import publicationsData from './../data/publications.json';
import { lightTheme, darkTheme } from './themes';
import { dark } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
  copyright: {
    fontSize: '0.8vw',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2vw',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  sidebar: {
    flexGrow: 1,
    position: 'fixed',
    overflowY: 'auto',
    // padding: '3%',
    zIndex: theme.zIndex.drawer,
    boxSizing: 'border-box',
    width: '18vw',
  },
  pageContent: {
    marginLeft: '18vw',
    position: 'fixed',
    overflowY: 'auto',
    padding: 0,
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.drawer,
    boxSizing: 'border-box',
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '2vw',
    [theme.breakpoints.down("sm")]: {
      height: '3.5vw',
    },
    zIndex: theme.zIndex.drawer + 1,
    paddingBottom: '0%', // Adjust the value as needed
  },
  toggleIcon: {
    fontSize: '2vw',
    [theme.breakpoints.down("sm")]: {
      fontSize: '3vw',
    },
    transition: 'color 0.3s ease',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '&:hover': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    },
  },
  poweredBy: {
    marginRight: '1%',
  },
  tooltip: {
    fontSize: '1.4vh',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2.5vw',
    },
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState('milestones');

  // Function to get a random theme
  function getRandomTheme() {
    // return Math.random() < 0.5 ? lightTheme : darkTheme; // 50% chance of lightTheme, 50% chance of darkTheme
    return darkTheme; // Always return darkTheme
  }
  const [currentTheme, setCurrentTheme] = useState(getRandomTheme()); // Initial theme selection

  const [contentHeight, setContentHeight] = useState('100%');
  const [isHovered, setIsHovered] = useState(false);

  const toggleMode = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const footerHeight = document.getElementById('footer').offsetHeight;
      const pageContentHeight = windowHeight - footerHeight;
      setContentHeight(`${pageContentHeight}px`);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'work':
        return <Resume scrollTo="work" />;
      case 'skills':
        return <Resume scrollTo="skills" />;
      case 'milestones':
        return <Milestones />;
      case 'books':
        return <Stuff tilesData={booksData} />;
      case 'songs':
        return <Stuff tilesData={songsData} />;
      case 'life':
        return <Stuff tilesData={lifeData} />;
      case 'publications':
        return <Publications tilesData={publicationsData} />
      default:
        return null;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider theme={currentTheme}>
        <div className={classes.sidebar}>
          <Sidebar setCurrentPage={setCurrentPage} />
        </div>

        <div className={classes.pageContent}>
          {renderPage()}
        </div>

        <footer
          className={classes.footer}
          style={{
            backgroundColor: currentTheme.palette.primary.main,
            color: currentTheme.palette.primary.contrastText,
          }}
          id="footer"
        >
          <div>
		  <Tooltip
          title={currentTheme === lightTheme ? 'Change to dark' : 'Change to light'}
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            className={classes.toggleIcon}
            onClick={toggleMode}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Toggle Mode"
          >
            {currentTheme === lightTheme ? (
              isHovered ? (
                <Brightness4 style={{ color: currentTheme.palette.primary.light }} />
              ) : (
                <Brightness7 style={{ color: currentTheme.palette.primary.light }} />
              )
            ) : isHovered ? (
              <Brightness7 style={{ color: currentTheme.palette.primary.dark }} />
            ) : (
              <Brightness4 style={{ color: currentTheme.palette.primary.dark }} />
            )}
          </IconButton>
        </Tooltip>
          </div>
          <div>
            <Typography className={classes.copyright}>
              &copy; {currentYear} Srikar Chundury. Some Rights Reserved.
            </Typography>
          </div>
          <div className={classes.poweredBy}>
            <Typography className={classes.copyright}>
              Powered by Material-UI
            </Typography>
          </div>
        </footer>
    </ThemeProvider>
  );
}

export default App;