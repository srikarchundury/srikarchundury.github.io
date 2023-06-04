import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    padding: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: theme.spacing(3),
  },
  tile: {
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, background-color 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  content: {
    fontSize: '0.9rem',
    marginBottom: theme.spacing(2),
  },
}));

function Stuff(props) {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      {props.tilesData.map((data, index) => (
        <div key={index} className={classes.tile}>
          {Object.entries(data).map(([key, value]) => (
            <React.Fragment key={key} className={classes.tile}>
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