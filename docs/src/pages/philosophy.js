import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(3),
  },
  heading: {
    alignSelf: 'flex-start',
  },
  tileContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(2),
  },
  tile: {
    flex: '0 0 calc(33.33% - 20px)',
    margin: '10px',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, background-color 0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('md')]: {
      flex: '0 0 calc(50% - 20px)',
    },
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 calc(100% - 20px)',
    },
  },
}));

function Philosophy() {
  const classes = useStyles();

  const tilesData = [
    "Life is like a roll of toilet paper; the closer you get to the end, the faster it unravels.",
    "The previous one is written by Chat-GPT. Lol",
  ];

  return (
    <div className={classes.pageContainer}>
      <h1 className={classes.heading}>A fake attempt at Phil'sosophy</h1>
      <div className={classes.tileContainer}>
        {tilesData.map((text, index) => (
          <div key={index} className={classes.tile}>
            <h1>Faksolophy {index + 1}</h1>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Philosophy;