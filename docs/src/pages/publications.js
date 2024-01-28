import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: 'relative',
    padding: `${theme.spacing(3)}px`,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: `${theme.spacing(3)}px`,
    backgroundColor: theme.palette.background.default,
    height: '95%',
  },
  verticalLine: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: theme.palette.divider, // Set divider color
  },
  tile: {
    height: '30vh',
    padding: `${theme.spacing(2)}px`,
    border: `1px solid ${theme.palette.grey[300]}`,
    boxShadow: `0px ${theme.spacing(0.3)}px ${theme.spacing(0.8)}px rgba(0, 0, 0, 0.2)`,
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
  linkContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
    '& svg': {
      color: theme.palette.primary.contrastText,
      fontSize: '2rem',
    },
  },
}));

function Publications(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [isHovered, setHovered] = useState(false);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.verticalLine} style={{ backgroundColor: theme.palette.divider }}></div>
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
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.content}>
              {publication}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

export default Publications;
