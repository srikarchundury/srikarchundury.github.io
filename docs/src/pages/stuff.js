import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    padding: `${theme.spacing(3)}px`,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: `${theme.spacing(3)}px`,
    backgroundColor: theme.palette.background.default,
  },
  tile: {
    padding: `${theme.spacing(2)}px`,
    border: `1px solid ${theme.palette.grey[300]}`,
    boxShadow: `0px ${theme.spacing(0.3)}px ${theme.spacing(0.8)}px rgba(0, 0, 0, 0.2)`,
    transition: 'transform 0.3s, background-color 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: theme.palette.primary.main,
      '& $title, & $content': {
        color: theme.palette.primary.contrastText,
      },
    },
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: `${theme.spacing(1)}px`,
    color: theme.palette.text.primary,
    transition: 'color 0.3s',
  },
  content: {
    fontSize: '0.9rem',
    marginBottom: `${theme.spacing(2)}px`,
    color: theme.palette.text.secondary,
    transition: 'color 0.3s',
  },
}));

function Stuff(props) {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      {props.tilesData.map((data, index) => (
        <div key={index} className={classes.tile}>
          {Object.entries(data).map(([key, value]) => (
            <React.Fragment key={key}>
              <Typography variant="h6" className={classes.title}>{key}</Typography>
              <Typography variant="body1" className={classes.content}>{value}</Typography>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Stuff;