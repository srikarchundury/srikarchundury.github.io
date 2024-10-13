import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: 'relative',
    paddingTop: '3vw',
    paddingBottom: '3vw',
    paddingLeft: '1vw',
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    // alignItems: 'auto',
    // justifyContent: 'space-evenly',
    // alignContent: 'space-evenly',
    alignItems: 'center',
  },
  tile: {
    height: '15vw',
    width: '15vw',
    border: `0.1vw solid ${theme.palette.grey[300]}`,
    boxShadow: `0px 0.3vw 0.8vw rgba(0, 0, 0, 0.2)`,
    position: 'relative',
    transition: 'transform 0.3s, background-color 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: theme.palette.primary.main,
      '& $title, & $content': {
        color: theme.palette.primary.contrastText,
      },
      '& $linkContainer': {
        opacity: 1,
      },
    },
    margin: '2vw',
    padding: '2vw',
  },
  title: {
    fontSize: '1.2vw',
    fontWeight: 'bold',
    marginBottom: '1vw',
    color: theme.palette.text.primary,
    transition: 'color 0.3s',
  },
  content: {
    fontSize: '0.9vw',
    marginBottom: '2vw',
    color: theme.palette.text.secondary,
    transition: 'color 0.3s',
  },
  linkContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '1vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
    '& svg': {
      color: theme.palette.primary.contrastText,
      fontSize: '2vw',
    },
  },
}));

function Publications(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [isHovered, setHovered] = useState(false);

  return (
    <div className={classes.pageContainer}>
      {/* <div className={classes.drawer}> */}
        {/* each tile */}
        {props.tilesData && props.tilesData.map((data, index) => {
          const [title, details] = Object.entries(data)[0];
          const { publication, link } = details;

          return (
            <div
              key={index}
              className={classes.tile}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className={classes.linkContainer}>
                {isHovered && (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <OpenInNewIcon />
                  </a>
                )}
              </div>
              <Typography className={classes.title}>
                {title}
              </Typography>
              <Typography className={classes.content}>
                {publication}
              </Typography>
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );
}

export default Publications;
