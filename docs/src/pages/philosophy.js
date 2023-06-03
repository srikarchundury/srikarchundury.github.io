import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		padding: theme.spacing(3),
	},
  tile: {
    flex: '0 0 calc(33.33% - 20px)',
    margin: '10px',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, background-color 0.3s', // Add transition property for smooth animation
    '&:hover': {
      transform: 'scale(1.1)', // Enlarge the tile by 40%
      backgroundColor: theme.palette.primary.main, // Change background color when hovered
	  color: theme.palette.primary.contrastText,
	  zIndex: '999', // Set a higher z-index value
    },
  },
}));

function Philosophy() {
  const classes = useStyles();

  const tilesData = [
    "Life is like a roll of toilet paper; the closer you get to the end, the faster it unravels.",
    "Chat-GPT generated the previous one! LOL",
    // Add more tile data here
  ];

  return (
    <div className={classes.pageContainer}>
      {tilesData.map((text, index) => (
        <div key={index} className={classes.tile}>
          <h1>Faklosophy {index + 1}</h1>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default Philosophy;