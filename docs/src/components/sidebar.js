import React, { useState, useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  Divider,
  Avatar,
  Button,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InfoIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import CodeIcon from "@material-ui/icons/Code";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import EmojiObjectsOutlined from "@material-ui/icons/EmojiObjectsOutlined";
import MusicNote from "@material-ui/icons/MusicNote";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default, // Set background color
  },
  drawer: {
    width: "15%",
    [theme.breakpoints.down("sm")]: {
      width: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15%",
    },
  },
  drawerPaper: {
    width: "15%",
    [theme.breakpoints.down("sm")]: {
      width: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15%",
    },
    backgroundColor: theme.palette.background.default, // Set background color
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  listItemText: {
    fontSize: "1rem",
    marginLeft: theme.spacing(2),
    color: theme.palette.text.primary, // Set text color
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    // Add the following lines
    "& .MuiListItemText-primary": {
      color: theme.palette.primary.contrastText,
    },
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    width: "8vw",
    height: "10vw",
    marginBottom: theme.spacing(2),
  },
  description: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: theme.palette.text.primary, // Set text color
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
    backgroundColor: theme.palette.divider, // Set divider color
  },
  icon: {
    fontSize: "2rem",
    padding: "0.5rem",
    color: theme.palette.text.secondary,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  socialIcons: {
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
}));

const sections = [
  { title: "Timeline", content: "milestones", icon: <InfoIcon /> },
  { title: "Work, Research, Education", content: "work", icon: <WorkIcon />},
  { title: "Skills & Projects", content: "skills", icon: <CodeIcon />},
  { title: "Publications", content: "publications", icon: <DescriptionIcon /> },
  // { title: "Philosophies", content: "life", icon: <EmojiObjectsOutlined /> },
  // { title: "Leisure Reading", content: "books", icon: <LibraryBooks /> },
  // { title: "Songs", content: "songs", icon: <MusicNote /> },
];

const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;

function Sidebar({ setCurrentPage }) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setCurrentPage(section.content);
  };

  const handleDownloadResume = () => {
    window.open(process.env.PUBLIC_URL + "/Resume.pdf", "_blank");
  };

  // const firstName2 = "శ్రీకర్";
  // const lastName2 = "చుండూరి";
  const firstName2 = "Srikar";
  const lastName2 = "Chundury";
  const showLastName = !isSmallScreen;

  function Section({ section }) {
    const theme = useTheme();
    const classes = useStyles();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
      <ListItem
        button
        onClick={() => handleSectionClick(section)}
        className={`${classes.listItem} ${
          section === selectedSection ? classes.selected : ""
        }`}
      >
        {isSmallScreen ? (
          <>
            {React.cloneElement(section.icon, {
              className: classes.icon,
              style: {
                fontSize: "1.7rem",
                color:
                  section === selectedSection
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.secondary,
              },
            })}
          </>
        ) : (
          <>
            {React.cloneElement(section.icon, {
              className: classes.icon,
              style: {
                fontSize: "1.7rem",
                color:
                  section === selectedSection
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.secondary,
              },
            })}
            <ListItemText
              className={classes.listItemText}
              variant="subtitle1"
              style={{
                color:
                  section === selectedSection
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
              }}
            >
              {section.title}
            </ListItemText>
          </>
        )}
      </ListItem>
    );
  }

  return (
    <ThemeProvider value={theme}>
      <div className={classes.sidebarContainer}>
        <Drawer
          variant="permanent"
          classes={{
            root: classes.drawer,
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.profileContainer}>
            <Avatar
              alt="Srikar Chundury"
              src={process.env.PUBLIC_URL + "/selfie.jpeg"}
              className={classes.avatar}
            />
            {isSmallScreen ? (
              <Typography variant="subtitle1" className={classes.description}>
                {firstName2}
                {showLastName && " " + lastName2}
              </Typography>
            ) : (
              <Typography variant="subtitle2" className={classes.description}>
                {firstName2}
                {showLastName && " " + lastName2}
              </Typography>
            )}

            <Typography variant="subtitle3">
              Hardware-aware Software Engineer and Researcher
            </Typography>

            <Divider className={classes.divider} />

            <Button
              variant="contained"
              className={classes.button}
              onClick={handleDownloadResume}
            >
              Resume
            </Button>

            <div className={classes.socialIcons}>
              <a
                href="https://www.linkedin.com/in/srikarchundury/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className={classes.icon} />
              </a>
              <a
                href="https://github.com/srikarchundury"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className={classes.icon} />
              </a>
              <a
                href="https://www.instagram.com/chundurysrikar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className={classes.icon} />
              </a>
              <a
                href="https://www.facebook.com/chundurysrikar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className={classes.icon} />
              </a>
              <a
                href="https://twitter.com/chundurysrikar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className={classes.icon} />
              </a>
            </div>
          </div>

          <Divider className={classes.divider} />

          <List>
            {sections.map((section, index) => (
              <Section section={section} key={index} />
            ))}
          </List>

          <Divider className={classes.divider} />
        </Drawer>
      </div>
    </ThemeProvider>
  );
}

export default Sidebar;
