import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import SchoolIcon from '@material-ui/icons/School';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FlightIcon from '@material-ui/icons/Flight';
import PublicIcon from '@material-ui/icons/Public';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: 'relative',
    // padding: '3vh',
    paddingTop: '3vw',
    paddingBottom: '3vw',
    paddingLeft: '1vw',
    backgroundColor: theme.palette.background.default,
  },
  timelineItem: {
    '&:hover $timelineIcon, &:hover $timelineContent': {
      transform: 'scale(1.05)',
      backgroundColor: theme.palette.primary.main,
      '& svg': {
        color: theme.palette.primary.contrastText,
      },
      '& $title, & $content': {
        color: theme.palette.primary.contrastText,
      },
    },
  },
  timelineIcon: {
    padding: '2vh',
    marginRight: '2vw',
    marginLeft: '2vw',
    border: `0.1vh solid ${theme.palette.grey[300]}`,
    borderRadius: '1vh',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s, background-color 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: theme.palette.primary.main,
      '& svg': {
        color: theme.palette.primary.contrastText,
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1vh',
      marginRight: '1vw',
      marginLeft: '1vw',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.5vh',
      marginRight: '0.5vw',
      marginLeft: '0.5vw',
    },
  },
  timelineContent: {
    padding: '2vh',
    border: `0.1vh solid ${theme.palette.grey[300]}`,
    borderRadius: '1vh',
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s, background-color 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: theme.palette.primary.main,
      '& $title, & $content': {
        color: theme.palette.primary.contrastText,
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1vh',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.5vh',
    },
  },
  title: {
    fontSize: '2.4vh',
    fontWeight: 'bold',
    marginBottom: '1vh',
    color: theme.palette.text.primary,
    transition: 'color 0.2s',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2vh', // Adjust font size for smaller screens
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.6vh', // Adjust font size for extra small screens
    },
  },
  content: {
    fontSize: '1.8vh',
    marginBottom: '2vh',
    color: theme.palette.text.secondary,
    transition: 'color 0.2s',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6vh', // Adjust font size for smaller screens
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4vh', // Adjust font size for extra small screens
    },
  },
}));

function Milestones() {
  const classes = useStyles();

  const milestones = [
	{
		title: 'Finished Schooling',
		note: 'Completed my schooling at DAV PUBLIC SCHOOL, Safilguda, Hyderabad, Telangana, India. A special shoutout to my remarkable mathematics teacher, Yamini Madam, who not only taught me math but also understood me deeply as a person. Grateful for her unwavering support throughout my school journey.',
		icon: <SchoolIcon />,
	},
	{
		title: 'Moved to Bangalore',
		note: 'Packed my bags and ventured to Bangalore to kickstart my bachelor’s degree journey. Exciting times awaited in the tech hub! Here is where I met Dr. Subramaniam Kalambur (Dr. KVS sir) whom I revere as my guru. His mentorship and guidance have been instrumental in shaping my career path.',
		icon: <FlightTakeoffIcon />,
	},
	{
		title: 'AMD Internship & Mentorship',
		note: 'Embarked on an enlightening internship journey at AMD, where I had the privilege of meeting Mr. Prasun Ratn, a mentor par excellence and an alumnus of NC State. His guidance and insights were invaluable in shaping my professional journey.',
		icon: <WorkIcon />,
	},
	{
		title: 'Agneyas Labs Internship',
		note: 'Thrived in an internship at Agneyas Labs under the tutelage of my maternal uncle, Mr. Chandrasekhar Buduguru, whose passion for computer science ignited my own. His mentorship has been instrumental in my career path.',
		icon: <WorkOutlineIcon />,
	},
	{
		title: 'Hackathon Victory',
		note: 'Secured a significant victory at a hackathon, winning 40 grand INR—an achievement that marked a significant milestone in our journey, making it a memorable accomplishment even today!',
		icon: <EmojiEventsIcon />,
	},
	{
		title: 'Internship at Walmart Labs',
		note: 'Joined the dynamic platforms team at Walmart Labs, Kadubeesanahalli, Bangalore, India. Grateful for the guidance and mentorship from an incredible team that swiftly led to a full-time role. Special thanks to mentors: Nikhil, Nitish, Muzzakir, Suhail, Ashutosh, Mukesh, Santosh, and Anuj. Kumar, my manager, played a pivotal role in shaping my journey here.',
		icon: <WorkIcon />,
	},
	{
		title: 'Undergraduate Graduation',
		note: 'Successfully graduated with a Bachelor of Technology in Computer Science and Engineering from PES University, Bangalore, India. Specialization in Systems and Core Computing, with a GPA of 9.29/10.',
		icon: <SchoolIcon />,
	},
	{
		title: 'Started Full-time Role at Walmart Global Tech',
		note: 'Transitioned to a full-stack developer role at Walmart Global Tech. Kathy, my manager, provided unwavering support, fostering growth amidst challenges while steering the product with clarity and vision.',
		icon: <WorkOutlineIcon />,
	},
	{
		title: 'Promotion to SDE 3',
		note: 'Elevated to Software Development Engineer 3, delving into microservices and microfrontends, unlocking a realm of innovative possibilities.',
		icon: <TrendingUpIcon />,
	},
	{
		title: 'Moved to Raleigh, USA',
		note: 'Embraced the pursuit of higher education in the USA to explore High-Performance Computing (HPC) techniques, a pivotal step toward my passion for parallel programming.',
		icon: <FlightIcon />,
	},
	{
		title: 'Start of Master’s Program at NC State',
		note: 'Commenced my Master of Science in Computer Science at NC State, meeting mentors Dr. Frank Mueller and Dr. Jiajia Li. Engaged in the fascinating world of HPC techniques for quantum simulations, relishing the challenges and forging new friendships in Raleigh.',
		icon: <SchoolIcon />,
	},
	{
		title: 'Current Role as Graduate Research Assistant',
		note: 'Embarked on my current role as a Graduate Research Assistant under the guidance of Dr. Mueller, diving deeper into my passion for research and exploration.',
		icon: <WorkIcon />,
	},
	{
		title: 'Internship at Oak Ridge National Lab',
		note: 'Seized an enriching internship opportunity at Oak Ridge National Lab, delving into the realm of HPC clusters under the mentorship of Dr. In-Saeng Suh. Presented my work at IEEE-QCE 2023.',
		icon: <PublicIcon />,
	},
	{
		title: 'PhD',
		note: 'By the support of my mentors, decided to embark on the exciting path of a Ph.D., fueled by a passion for research and innovation.',
		icon: <EmojiObjectsIcon />,
	},
  {
    title: 'Internship at Oak Ridge National Labs',
    note: 'Best Poster at QCUF 2024 for work under Amir Shehata and Dr. In-Saeng Suh on Quantum Framework for HPC-QC integrated ecosystem.',
    icon: <WorkIcon />,
  },
	// You can continue adding milestones here as per your timeline
];

  // Reverse the order of milestones
  milestones.reverse();

  return (
    <div className={classes.pageContainer}>
      <Timeline align="alternate">
        {milestones.map((milestone, index) => (
          <TimelineItem key={index} className={classes.timelineItem}>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineIcon}>{milestone.icon}</TimelineDot>
              {index !== milestones.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              <Typography className={classes.title}>
                {milestone.title}
              </Typography>
              <Typography className={classes.content}>
                {milestone.note}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Milestones;
