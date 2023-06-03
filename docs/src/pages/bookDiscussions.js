import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		padding: theme.spacing(3),
	},
}));

function BookDiscussions() {
	const classes = useStyles();

	return (
		<div className={classes.pageContainer}>
			<h1>Book Discussions Page</h1>
			{/* Add your resume content here */}
		</div>
	);
}

export default BookDiscussions;