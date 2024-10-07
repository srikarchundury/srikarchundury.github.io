import { React, useEffect } from "react";
import { Box, Typography, Divider, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  School as SchoolIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
	  position: 'relative',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  verticalLine: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: theme.palette.divider, // Set divider color
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  subtitle: {
    fontSize: theme.typography.subtitle1.fontSize,
    color: theme.palette.text.primary,
  },
  name: {
    fontSize: theme.typography.h3.fontSize,
    color: theme.palette.text.primary,
  },
  company: {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  date: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
  },
  subtitle1: {
    color: theme.palette.text.primary,
  },
  description: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
  },
  skills: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function Resume(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { scrollTo } = props;

  // Scroll to the divider element based on the value of scrollTo
  useEffect(() => {
    const dividerElement = document.getElementById(scrollTo.toString());
    if (dividerElement) {
      dividerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [scrollTo]);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.verticalLine} style={{ backgroundColor: theme.palette.divider }}></div>
      {/* <Box mb={4}>
              <Typography
                variant="h3"
                align="center"
                gutterBottom
                className={classes.name}
              >
                Srikar Chundury
              </Typography>
            </Box> */}

            
            <Divider
              variant="middle"
              style={{ backgroundColor: theme.palette.divider }}
              id="work"
            />

            <Box mt={4}>
              <Typography variant="h4" className={classes.sectionTitle}>
                <WorkIcon className={classes.icon} />
                Work and Research Experience
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Graduate Research Assistant
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        Systems Laboratory, NC State University
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        Sept 2022 – Present
                      </Typography>
                      <Typography className={classes.description}>
                        Working on analyzing sparsity of tensor networks in quantum simulations. Co-advised by Dr. Frank Mueller and Dr. Jiajia Li on developing a novel numerical library to leverage sparse patterns to achieve realize digital quantum simulation. Presented my work as posters at QCUF, ORNL and QSim 2023.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Research Intern
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        Oak Ridge National Laboratory, Tennessee
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        May 2024 – August 2024
                      </Typography>
                      <Typography className={classes.description}>
                          Continued graduate research under Dr. In-Saeng Suh & Dr. Frank Mueller, working on the novel sparse data format DiaQ and contributed to showcasing a hybrid QC-HPC ecosystem via QFw: A Quantum Framework for HPC-QC integration. Awarded best poster at QCUF 2024 and nominated for Best Poster at Super Computing 2024.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Graduate Research Intern
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        Oak Ridge National Laboratory, Tennessee
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        May 2023 – July 2023
                      </Typography>
                      <Typography className={classes.description}>
                        Worked on formulating, developing, and improving high-performance tensor network libraries used for quantum simulations, as part of the Quantum Natural Language Processing group. Presented my work as a poster at IEEE QCE 2023.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Software Development Engineer III
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        Walmart Global Tech, Bangalore
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        August 2021 – July 2022
                      </Typography>
                      <Typography className={classes.description}>
                        Developed microservices in GoLang and micro frontends in React, and deployed them on Walmart's cloud-native Kubernetes platform.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Software Development Engineer II
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        Walmart Labs, Bangalore
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        August 2019 – July 2021
                      </Typography>
                      <Typography className={classes.description}>
                        Full-stack development of an internal orchestration web-based tool to automate life cycle management of Walmart's enormous infrastructure (stores, distribution centers, and in-house machines).
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Software Development Intern
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        Walmart Labs, Bangalore
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        January 2019 – June 2019
                      </Typography>
                      <Typography className={classes.description}>
                        Developed a dynamic task scheduler for application-level function scheduling. Actively being used by Walmart infrastructure teams to schedule maintenance tasks that include patching and provisioning systems.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Intern
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        Agneyas Labs, Bangalore
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        December 2018 – January 2019, June 2019 – August 2019
                      </Typography>
                      <Typography className={classes.description}>
                        Deployed Spark on Kubernetes. Built a pipeline to submit jars via spark-submit and return results back. Built a basic login page for a client's website. Captured time-sensitive edge metrics in InfluxDB. Analyzed this time series using basic visualizations of data after cleaning and preprocessing.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Co-Op
                      </Typography>
                      <Typography variant="body2" className={classes.company}>
                        AMD, Bangalore
                      </Typography>
                      <Typography variant="body2" className={classes.date}>
                        May 2018 – July 2018
                      </Typography>
                      <Typography className={classes.description}>
                        Analyzed performance for various then-latest AMD server processors, and contrasted them with that of intel server processors for kernel-level benchmarks like netperf and string-copy.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <br />
            <Divider
              variant="middle"
              style={{ backgroundColor: theme.palette.divider }}
            />

            <Box mt={4}>
              <Typography variant="h4" className={classes.sectionTitle}>
                <SchoolIcon className={classes.icon} />
                Education
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" className={classes.subtitle1}>
                    <strong>Ph.D. in Computer Science</strong>
                    <br />
                    Aug 2022 – May 2027
                  </Typography>
                  <Typography className={classes.description}>
                    North Carolina State University, Raleigh, NC
                    <br />
                    GPA – 3.95/4.0
                    <br />
                    Relevant Courses: Quantum Computing, Resource-dependent Deep Learning, Graph Theory, Parallel Systems, Efficient Tensor Computation for AI, Real-time AI \& Machine Learning Systems.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" className={classes.subtitle1}>
                    <strong>
                      Bachelor of Technology in Computer Science and Engineering
                    </strong>
                    <br />
                    Aug 2015 – May 2019
                  </Typography>
                  <Typography className={classes.description}>
                    PES University, Bangalore, India
                    <br />
                    GPA – 9.29/10
                    <br />
                    Specialization: Systems and Core Computing
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <br />
            <Divider
              variant="middle"
              style={{ backgroundColor: theme.palette.divider }}
              id="skills"
            />

            <Box mt={4}>
              <Typography variant="h4" className={classes.sectionTitle}>
                <CodeIcon className={classes.icon} />
                Skills
              </Typography>
              <Typography className={classes.description}>
                <strong>Languages:</strong> C++, Python, Go, C, R, SQL, JavaScript, JSX, CSS, HTML
              </Typography>
              <Typography className={classes.description}>
                <strong>Frameworks/Technologies:</strong> Flask, Hadoop, Spark, Redis, PostgreSQL, MariaDB, InfluxDB, MongoDB, Ansible, Jenkins, Docker, Kubernetes, TensorFlow, PyTorch, Horovod, Qiskit, Cirq, Quimb, D-wave, React, LATEX, Apache TVM.
              </Typography>
            </Box>
            <br />
            <Divider
              variant="middle"
              style={{ backgroundColor: theme.palette.divider }}
            />

            <Box mt={4}>
              <Typography variant="h4" className={classes.sectionTitle}>
                <AssignmentIcon className={classes.icon} />
                Relevant Projects
              </Typography>
              <Typography className={classes.description}>
                <strong>High Performance Tensor Network Quantum Circuit Simulation</strong>
                <br />
                Sept 2022 – Present
                <br />
                Working on various aspects of tensor network based quantum simulations as part of my masters' thesis. Acquired full quantum stack knowledge of various high performance libraries, started contributing to a few.
              </Typography>
              <Typography className={classes.description}>
                <strong>Distributed deep neural network training optimization</strong>
                <br />
                Sept 2022 – December 2022
                <br />
                Comparative study of Uber's horovod with different synchronous averaging techniques like ring reduce, ring all-reduce, ring grouped-reduce. Experimented with a new averaging technique called asynchronous step-wise reduce.
              </Typography>
              <Typography className={classes.description}>
                <strong>Program Phase Characterization for Big Data Workloads</strong>
                <br />
                Jan 2019 – May 2019
                <br />
                Identified micro architecturally different phases in a program and analyze these phases for similarities across other phases to aid design engineers in the performance optimization process. Introduced a new technique that uses Self-Organizing maps. Thus saving a significant amount of time for design engineers who optimize processors for performance uplifts.
              </Typography>
              <Typography className={classes.description}>
                <strong>Impact Of Software Stack Version On Microarchitecture</strong>
                <br />
                Aug 2018 – Jan 2019
                <br />
                Demonstrates the micro-architectural differences in their hardware utilization. Results show that Spark v2.2 generates more efficient code compared to Spark v1.3 and hence reduces the total number of page faults by 10%.
              </Typography>
              <Typography className={classes.description}>
                <strong>Object Classification, Detection and Segmentation (PASCAL VOC2010)</strong>
                <br />
                June 2018
                <br />
                Built a classifier using regular CNN with Keras. Removed the top layers and replaced them with a 20 layer Softmax to compare confusion matrix metrics. Used Keras under the TensorFlow GPU version with CUDA libraries.
              </Typography>
              <Typography className={classes.description}>
                <strong>Mouth Tracking</strong>
                <br />
                Nov 2017
                <br />
                Improving the accuracy of speech-to-text engines by taking into account the video of the audio generator (person speaking). Dlib to track lips- lip segmentation. Used a Bayesian model using a self-generated Audio-Video training dataset to predict sentences.
              </Typography>
              <Typography className={classes.description}>
                <strong>Terrorist Attack analysis and prediction using GTD</strong>
                <br />
                Aug 2017 - Dec 2017
                <br />
                Different kinds of visualizations to understand the Global Terrorism Dataset better. ARIMA-based time series analysis to forecast the number of attacks in the following years. Used decision trees, knn, naive bayes classifiers and logistic regression to predict the following: culpable terrorist group (accuracy = 92.34%), victim count (accuracy = 62.26%), extent of property damage (accuracy = 88.65%) and safe return of hostages (accuracy = 93.0%).
              </Typography>
              <Typography className={classes.description}>
                <strong>Green Bangalore</strong>
                <br />
                Apr 2017
                <br />
                Determined the greenery of a given place in Bangalore relative to Cubbon park. Used Google Earth to get the satellite imagery of the entire place. The edges of a place have been determined by KML files that were available online on a government site. Used Hadoop for distributed computation of green index of multiple images of a given place at the same time (green index = ratio of green pixels to total pixels). Compared the result with a pre-computed green index of Cubbon park.
              </Typography>
              <Typography className={classes.description}>
                <strong>Simulation of Sir.Michael Conway's game of life</strong>
                <br />
                Aug 2016 - Dec 2016
                <br />
                A modified version of the standard game of life where the user can specify the inclusion bit string and the dead state rule. Provided options to switch between user-defined-rule game and standard-rule game. Data Structures used were 2D-array and N-ary tree.
              </Typography>
            </Box>
            <br />
            <Divider
              variant="middle"
              style={{ backgroundColor: theme.palette.divider }}
            />
          </div>
        );
      }

      export default Resume;
