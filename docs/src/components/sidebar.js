import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
  Avatar,
  Typography,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '18%',
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '60%',
    },
  },
  drawerPaper: {
    width: '18%',
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '60%',
    },
  },
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginBottom: theme.spacing(2),
  },
  description: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  icon: {
    fontSize: 40,
    color: theme.palette.text.secondary,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

const sections = [
  { title: 'About Me', content: 'resume' },
  { title: 'Life', content: 'philosophy' },
  { title: 'Random', content: 'random-rant' },
];

function Sidebar({ setCurrentPage }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setCurrentPage(section.content);
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      classes={{
        paper: classes.drawerPaper,
      }}
      open={!isMobile}
    >
      <div className={classes.profileContainer}>
        <Avatar alt="Srikar Chundury" src={process.env.PUBLIC_URL + '/selfie.jpeg'} className={classes.avatar} />
        <Typography variant="subtitle1" className={classes.description}>
          శ్రీకర్ చుండూరి
        </Typography>
        <Typography variant="subtitle2" className={classes.description}>
          Srikar Chundury
        </Typography>

        <div className={classes.socialIcons}>
          <a href="https://www.linkedin.com/in/srikarchundury/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className={classes.icon} />
          </a>
          <a href="https://github.com/srikarchundury" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className={classes.icon} />
          </a>
          <a href="https://www.instagram.com/chundurysrikar" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={classes.icon} />
          </a>
          <a href="https://www.facebook.com/chundurysrikar" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className={classes.icon} />
          </a>
          <a href="https://twitter.com/chundurysrikar" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className={classes.icon} />
          </a>
        </div>
      </div>

      <Divider className={classes.divider} />

      <List>
        {sections.map((section, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleSectionClick(section)}
            className={`${classes.listItem} ${section === selectedSection ? classes.selected : ''}`}
          >
            <ListItemText primary={section.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;