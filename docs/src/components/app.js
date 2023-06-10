import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import Sidebar from './sidebar';
import Resume from './../pages/resume';
import Stuff from '../pages/stuff';

import lifeData from './../data/life.json';
import songsData from './../data/songs.json';
import booksData from './../data/books.json';
import { lightTheme, darkTheme } from './themes';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '0%',
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  sidebar: {
    width: '15%',
    flexGrow: 1,
    position: 'fixed',
    overflowY: 'auto',
    padding: '3%',
    zIndex: theme.zIndex.drawer,
    boxSizing: 'border-box',
  },
  pageContent: {
    marginLeft: '15%', // Adjust this value to match the width of your sidebar
    marginRight: 0,
    // flexGrow: 1,
    overflowY: 'auto',
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    margin: 0, // Remove margin
    top: 0,
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
    zIndex: theme.zIndex.drawer + 1,
    paddingBottom: '0%', // Adjust the value as needed
  },
  toggleIcon: {
    fontSize: '2.5rem',
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
  },
}));

function App() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState('resume');
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [contentMaxHeight, setContentMaxHeight] = useState('100%');
  const [isHovered, setIsHovered] = useState(false);

  const toggleMode = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const footerHeight = document.getElementById('footer').offsetHeight;
      const pageContentMaxHeight = windowHeight - footerHeight;
      setContentMaxHeight(`${pageContentMaxHeight}px`);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'resume':
        return <Resume />;
      case 'books':
        return <Stuff tilesData={booksData} />;
      case 'songs':
        return <Stuff tilesData={songsData} />;
      case 'life':
        return <Stuff tilesData={lifeData} />;
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

        <div className={classes.pageContent} style={{ maxHeight: contentMaxHeight }}>
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
            <Typography variant="body2" color="inherit">
              &copy; {currentYear} Srikar Chundury. All rights reserved.
            </Typography>
          </div>
          <div className={classes.poweredBy}>
            <Typography variant="body2" color="inherit">
              Powered by Material-UI and ChatGPT
            </Typography>
          </div>
        </footer>
    </ThemeProvider>
  );
}

export default App;