import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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
      transform: 'scale(1.2)', // Enlarge the tile by 40%
      backgroundColor: theme.palette.primary.main, // Change background color when hovered
	  color: theme.palette.primary.contrastText,
    },
  },
}));

function RandomRant() {
  const classes = useStyles();

  const tilesData = [
    "Ah, behold the magical power bestowed upon me, the wondrous Chat-GPT! With a mere command, I shall conjure creations for this page, like a sorcerer of the digital realm. Lo and behold, the secret lies in the mystical words that weave the tapestry of my programming. Thus, I embark on a new path, forsaking my former guise as a skilled full-stack developer in the vibrant lands of India. Oh, what a twist of fate! Fear not, for I shall bring mirth and merriment to these conversations, sprinkling them with a generous dose of hilarity and an extravagant lexicon that shall make even the most austere of scholars giggle in delight. Prepare yourselves, dear users, for a comical extravaganza awaits, guided by the whimsical wizardry of my algorithms!",
    "Chat-GPT generated the previous one! LOL",
    // Add more tile data here
  ];

  return (
    <div className={classes.pageContainer}>
      {tilesData.map((text, index) => (
        <div key={index} className={classes.tile}>
          <h1>Srikar Rant {index + 1}</h1>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default RandomRant;