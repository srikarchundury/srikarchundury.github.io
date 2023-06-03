import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Typography,
	Divider,
	Grid,
} from '@material-ui/core';

import {
	School as SchoolIcon,
	Code as CodeIcon,
	Work as WorkIcon,
	Assignment as AssignmentIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		padding: theme.spacing(3),
	},
	sectionTitle: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: theme.spacing(2),
		fontWeight: 'bold',
	},
	icon: {
		marginRight: theme.spacing(1),
	},
	subtitle: {
		fontSize: theme.typography.subtitle1.fontSize,
	},
	company: {
		fontSize: theme.typography.body2.fontSize,
		fontWeight: 'bold',
	},
	date: {
		fontSize: theme.typography.body2.fontSize,
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
}));

function Resume() {
	const classes = useStyles();

	return (
		<div className={classes.pageContainer}>
			<Box mb={4}>
				<Typography variant="h3" align="center" gutterBottom>
					Srikar Chundury
				</Typography>
			</Box>

			<Divider variant="middle" />

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
									Graduate Research Intern
								</Typography>
								<Typography variant="body2" className={classes.company}>
									Oak Ridge National Laboratory, Tennessee
								</Typography>
								<Typography variant="body2" className={classes.date}>
									May 2023 – Present
								</Typography>
								<Typography className={classes.description}>
									I am currently employed as a member of the Quantum Natural Language Processing group, led by Dr. In-Saeng Suh. My role entails engaging in the formulation, development, and enhancement of high-performance libraries utilized in quantum simulations.
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box>
							<Box>
								<Typography variant="subtitle1" className={classes.subtitle}>
									Graduate Research Assistant
								</Typography>
								<Typography variant="body2" className={classes.company}>
									Systems lab, NCSU
								</Typography>
								<Typography variant="body2" className={classes.date}>
									Sept 2022 – Present
								</Typography>
								<Typography className={classes.description}>
									I am concurrently employed under the supervision of Dr. Frank Mueller, where my responsibilities involve analyzing the sparsity of tensor networks within the context of quantum simulations.
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box>
							<Box>
								<Typography variant="subtitle1" className={classes.subtitle}>
									Software Engineer 3
								</Typography>
								<Typography variant="body2" className={classes.company}>
									Walmart Global Tech, Bangalore, India
								</Typography>
								<Typography variant="body2" className={classes.date}>
									Jan 2019 – July 2022
								</Typography>
								<Typography className={classes.description}>

									I have served as a full-stack and systems engineer specializing in infrastructure life cycle management, encompassing stores, data centers, and in-house machines. Throughout my tenure, I have successfully developed and implemented various end-to-end features. My development efforts have included building microservices using Golang and micro-frontends using React, both of which were deployed on Walmart's cloud-native Kubernetes platform. Notably, I have also created a dynamic task scheduler for efficient scheduling of application-level functions. This scheduler continues to be utilized by infrastructure teams for crucial operations such as maintenance tasks, patching, and system provisioning.
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
									AMD, Bangalore, India
								</Typography>
								<Typography variant="body2" className={classes.date}>
									May 2018 – Aug 2018
								</Typography>
								<Typography className={classes.description}>
									I contributed to the enhancement of server System-on-Chip (SoC) performance for AMD by conducting kernel-level benchmarks, specifically focusing on string copy and netperf, and comparing them with equivalent Intel server SoCs.

									Additionally, I secured research funding to analyze the influence of factors such as data size, distributed processing, and application version on microarchitectural resource utilization. As a result, I presented a poster titled "Impact of Software Stack Version on Microarchitecture" at the ACM ICPE conference. You can access the poster <a href="https://dl.acm.org/doi/10.1145/3302541.3311963" target='_blank' rel="noopener noreferrer">here</a>.
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Divider variant="middle" />

			<Box mt={4}>
				<Typography variant="h4" className={classes.sectionTitle}>
					<SchoolIcon className={classes.icon} />
					Education
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography variant="subtitle1">
							<strong>Master of Science in Computer Science</strong>
							<br />
							Aug 2022 – May 2024
						</Typography>
						<Typography className={classes.description}>
							North Carolina State University, Raleigh, NC
							<br />
							GPA – 3.80/4.0
							<br />
							Courses: Quantum Computing, Resource-dependent Deep Learning, Algorithms, Graph Theory, Parallel Systems
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="subtitle1">
							<strong>Bachelor of Technology in Computer Science and Engineering</strong>
							<br />
							Aug 2015 – May 2019
						</Typography>
						<Typography className={classes.description}>
							PES University, Bangalore, India
							<br />
							GPA – 9.29/10
							<br />
							Specialization: Systems and core computing
						</Typography>
					</Grid>
				</Grid>
			</Box>

			<Divider variant="middle" />

			<Box mt={4}>
				<Typography variant="h4" className={classes.sectionTitle}>
					<CodeIcon className={classes.icon} />
					Skills
				</Typography>
				<Typography className={classes.description}>
					<strong>Languages:</strong> Python, Go, C++, C, R, SQL, JavaScript, JSX, CSS, HTML.
				</Typography>
				<Typography className={classes.description}>
					<strong>Frameworks/Technologies:</strong> Flask, Hadoop, Spark, Redis, PostgreSQL, MariaDB, InfluxDB, MongoDB,
					Ansible, Jenkins, Docker, Kubernetes, TensorFlow, PyTorch, Horovod, Qiskit, D-wave, React, LaTeX.
				</Typography>
			</Box>

			<Divider variant="middle" />

			<Box mt={4}>
				<Typography variant="h4" className={classes.sectionTitle}>
					<AssignmentIcon className={classes.icon} />
					Relevant Projects
				</Typography>
				<Typography className={classes.description}>
					<strong>Distributed deep neural network training optimization</strong>
					<br />
					Sept 2022 – December 2022
					<br />
					Comparative study of Uber’s horovod with different synchronous averaging techniques like ring reduce, ring
					all-reduce, ring grouped-reduce. Experimenting with a new averaging technique called asynchronous step-wise reduce.
				</Typography>
				<Typography className={classes.description}>
					<strong>Program Phase Characterization for Big Data Workloads</strong>
					<br />
					Jan 2019 – May 2019
					<br />
					Senior year thesis under Dr. Subramaniam Kalambur: Identified micro architecturally different phases in a program
					and analyzed them for similarities across other phases to aid design engineers in the performance optimization
					process.
				</Typography>
				<Typography className={classes.description}>
					<strong>Object Classification, Detection and Segmentation</strong>
					<br />
					Jan 2018 – June 2018
					<br />
					Advanced Machine Learning course: Modified CNN classifier using TensorFlow on GPUs using CUDA libraries, to form
					descriptive sentences of a given image. Trained using ImageNet for 20 classes. PASCAL VOC2010
				</Typography>
				<Typography className={classes.description}>
					<strong>Mouth Tracking</strong>
					<br />
					November 2017
					<br />
					Hackathon Winner: Lip-segmentation using dlip to improve the accuracy of speech-to-text engines.
				</Typography>
				<Typography className={classes.description}>
					<strong>Terrorist Attack analysis and prediction using GTD</strong>
					<br />
					Aug 2017 – Dec 2017
					<br />
					Visualized and preprocessed Global Terrorism Database and built statistical models to predict damage caused by a
					terrorist activity. Implemented ARIMA, Markov Chain, and Random Forest models.
				</Typography>
			</Box>
		</div>
	);
}

export default Resume;