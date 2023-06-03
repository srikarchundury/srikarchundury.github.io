import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Sidebar from './sidebar';
import Resume from './../pages/resume';
import Blog from './../pages/blog';
import BookDiscussions from './../pages/bookDiscussions';
import RandomRant from './../pages/randomRant';
import Philosophy from './../pages/philosophy';

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
  content: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    paddingTop: '0%',
    marginLeft: '0%',
  },
  sidebar: {
    width: '20%',
    position: 'fixed',
    top: 0,
    bottom: 0,
    overflowY: 'auto',
    zIndex: theme.zIndex.drawer,
  },
  pageContent: {
    marginLeft: '20%',
    flexGrow: 1,
    padding: '3%',
    paddingBottom: '5%',
    overflowY: 'auto',
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '2%',
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function App() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState('resume');

  const renderPage = () => {
    switch (currentPage) {
      case 'resume':
        return <Resume />;
      case 'blog':
        return <Blog />;
      case 'book-discussions':
        return <BookDiscussions />;
      case 'random-rant':
        return <RandomRant />;
      case 'philosophy':
        return <Philosophy />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className={classes.sidebar}>
        <Sidebar setCurrentPage={setCurrentPage} />
      </div>

      <div className={classes.pageContent}>{renderPage()}</div>

      <footer className={classes.footer}>
        <Typography variant="body2" color="inherit">
          &copy; 2023 Srikar Chundury. Made using Chat-GPT and Material-UI. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;