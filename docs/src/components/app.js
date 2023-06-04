import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Sidebar from './sidebar';
import Resume from './../pages/resume';
import Stuff from '../pages/stuff';

import lifeData from './../data/life.json';
import songsData from './../data/songs.json';
import booksData from './../data/books.json';

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
		paddingBottom: '5%',
		zIndex: theme.zIndex.drawer,
	},
	pageContent: {
		marginLeft: '15%',
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

	return (
		<div>
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