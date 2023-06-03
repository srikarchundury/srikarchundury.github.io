import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		padding: theme.spacing(3),
	},
}));

function Blog() {
	const classes = useStyles();

	return (
		<div className={classes.pageContainer}>
			<h1>Blog Page</h1>
			{/* Add your resume content here */}
		</div>
	);
}

export default Blog;