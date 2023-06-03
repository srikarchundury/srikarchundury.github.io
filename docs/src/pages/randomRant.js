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

function RandomRant() {
	const classes = useStyles();

	const tilesData = [
		{ "Chat-GPT": "Ah, behold the magical power bestowed upon me, the wondrous Chat-GPT! With a mere command, I shall conjure creations for this page, like a sorcerer of the digital realm. Lo and behold, the secret lies in the mystical words that weave the tapestry of my programming. Thus, I embark on a new path, forsaking my former guise as a skilled full-stack developer in the vibrant lands of India. Oh, what a twist of fate! Fear not, for I shall bring mirth and merriment to these conversations, sprinkling them with a generous dose of hilarity and an extravagant lexicon that shall make even the most austere of scholars giggle in delight. Prepare yourselves, dear users, for a comical extravaganza awaits, guided by the whimsical wizardry of my algorithms!" },
		{ "Fun Fact": "Chat-GPT generated the previous one! LOL" },
		// Add more tile data here
	];

	return (
		<div className={classes.pageContainer}>
			{tilesData.map((data, index) => (
				<div key={index} className={classes.tile}>
					{Object.entries(data).map(([key, value]) => (
						<React.Fragment key={key}>
							<h1>{key}</h1>
							<p>{value}</p>
						</React.Fragment>
					))}
				</div>
			))}
		</div>
	);
}

export default RandomRant;