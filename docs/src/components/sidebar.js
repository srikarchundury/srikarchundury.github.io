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
  sectionItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5vw",
  },
  listOfContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
  },
  heading: {
    fontSize: "1.5vw",
    color: theme.palette.text.primary, // Set text color
    textAlign: "center",
  },
  subheading: {
    fontSize: "0.8vw",
    color: theme.palette.text.secondary, // Set text color
    textAlign: "center",
  },
  sidebarContainer: {
    padding: "2.5vw",
    backgroundColor: theme.palette.background.default, // Set background color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawer: {
    width: "15vw",
  },
  drawerPaper: {
    width: "15vw",
    backgroundColor: theme.palette.background.default, // Set background color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  listItemText: {
    fontSize: "1.5vw",
    marginLeft: "0.5vw",
    color: theme.palette.text.primary, // Set text color
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiListItemText-primary": {
      color: theme.palette.primary.contrastText,
    },
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "2vw",
  },
  avatar: {
    width: "6vw",
    height: "10vw",
    marginBottom: "1.5vw",
  },
  divider: {
    margin: "2vw 0",
    marginTop: "1vw",
    fontColor: theme.palette.divider, // Set divider color
    backgroundColor: theme.palette.divider, // Set divider color
    width: "15vw",
    // fontWeight: "bold",
  },
  icon: {
    fontSize: "2vw",
    padding: "0.5vw",
    color: theme.palette.text.secondary,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  listIcon : {
    fontSize: "1.5vw",
    color: theme.palette.text.secondary
  },
  button: {
    fontSize: "0.8vw",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "4vw",
  },
  socialIcons: {
    display: "justify",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1vw",
  },
}));

const sections = [
  { title: "Timeline", content: "milestones", icon: <InfoIcon  /> },
  { title: "Work/Research", content: "work", icon: <WorkIcon  /> },
  { title: "Skills", content: "skills", icon: <CodeIcon  /> },
  { title: "Publications", content: "publications", icon: <DescriptionIcon  /> },
  // { title: "Philosophies", content: "life", icon: <EmojiObjectsOutlined className={classes.icon} /> },,
  // { title: "Leisure Reading", content: "books", icon: <LibraryBooks className={classes.icon} /> },,
  // { title: "Songs", content: "songs", icon: <MusicNote className={classes.icon} /> },,
];

const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;

function Sidebar({ setCurrentPage }) {
  const classes = useStyles();
  const theme = useTheme();
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
            <Typography className={classes.heading}>
              {firstName2} {lastName2}
            </Typography>
            <Typography className={classes.subheading}>
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
              {/* <a
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
              </a> */}
              {/* <a
                href="https://twitter.com/chundurysrikar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className={classes.icon} />
              </a> */}
            </div>
          </div>

          <Divider className={classes.divider} />

          <List className={classes.listOfContent}>
            {sections.map((section, index) => (
              <ListItem
                button
                onClick={() => handleSectionClick(section)}
                className={`${classes.listItem} ${
                  section === selectedSection ? classes.selected : ""
                }`}
                key={index}
              >
                <section.icon.type
                  className={classes.listIcon}
                  style={{
                    color:
                      section === selectedSection
                        ? theme.palette.primary.contrastText
                        : theme.palette.text.secondary,
                    // fontSize: "1.5vw",
                  }}
                />
                <Typography
                  style={{
                    marginLeft: theme.spacing(2), // Add space between icon and text
                    color:
                      section === selectedSection
                        ? theme.palette.primary.contrastText
                        : theme.palette.text.primary,
                    fontSize: "1vw",
                  }}
                >
                  {section.title} {/* The text you want to display next to the icon */}
                </Typography>
              </ListItem>
            ))}
          </List>


          <Divider className={classes.divider} />

        </Drawer>
      </div>
    </ThemeProvider>
  );
}

export default Sidebar;
