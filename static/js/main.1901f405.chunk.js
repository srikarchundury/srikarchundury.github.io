(this["webpackJsonpsrikar-website"]=this["webpackJsonpsrikar-website"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),s=a.n(r),o=a(138),c=a(23),l=a(157),d=a(163),m=a(158),p=a(141),b=a(159),h=a(160),j=a(139),u=a(162),g=a(165),x=a(142),f=a(143),v=a(144),y=a(145),O=a(75),w=a.n(O),k=a(76),S=a.n(k),C=a(72),N=a.n(C),I=a(32),z=a.n(I),T=a(73),A=a.n(T),D=a(74),P=a.n(D),L=a(1);const M=Object(o.a)((e=>({sectionItem:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5vw",[e.breakpoints.down("sm")]:{display:"flex-start",justifyContent:"flex-start",alignItems:"flex-start",fontSize:"4vw"}},listOfContent:{display:"flex",flexDirection:"column",alignItems:"center",padding:0,[e.breakpoints.down("sm")]:{display:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"}},heading:{fontSize:"1.5vw",color:e.palette.text.primary,textAlign:"center",[e.breakpoints.down("sm")]:{fontSize:"4vw",textAlign:"left"}},subheading:{fontSize:"0.8vw",color:e.palette.text.secondary,textAlign:"center",[e.breakpoints.down("sm")]:{fontSize:"2vw",textAlign:"left"}},sidebarContainer:{padding:"2.5vw",backgroundColor:e.palette.background.default,display:"flex",justifyContent:"center",alignItems:"center",[e.breakpoints.down("sm")]:{padding:"1vw",display:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"}},drawer:{width:"18vw"},drawerPaper:{width:"18vw",backgroundColor:e.palette.background.default,display:"flex",justifyContent:"center",alignItems:"center",[e.breakpoints.down("sm")]:{display:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"}},listItem:{"&:hover":{backgroundColor:e.palette.action.hover},display:"flex",justifyContent:"left",alignItems:"center",[e.breakpoints.down("sm")]:{display:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"}},listItemText:{fontSize:"1.5vw",marginLeft:"0.5vw",color:e.palette.text.primary,[e.breakpoints.down("sm")]:{fontSize:"4vw"}},selected:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,"&:hover":{backgroundColor:e.palette.primary.main},"& .MuiListItemText-primary":{color:e.palette.primary.contrastText}},profileContainer:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{width:"6vw",height:"10vw",marginBottom:"1.5vw",[e.breakpoints.down("sm")]:{width:"12vw",height:"15vw"}},divider:{margin:"2vw 0",marginTop:"1vw",fontColor:e.palette.divider,backgroundColor:e.palette.divider,width:"15vw",[e.breakpoints.down("sm")]:{width:"100%"}},icon:{fontSize:"2vw",padding:"0.5vw",color:e.palette.text.secondary,transition:"color 0.3s ease","&:hover":{color:e.palette.primary.main},[e.breakpoints.down("sm")]:{fontSize:"4vw",padding:"1vw"}},listIcon:{fontSize:"1.5vw",color:e.palette.text.secondary,[e.breakpoints.down("sm")]:{fontSize:"4vw"}},button:{fontSize:"0.8vw",backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,"&:hover":{backgroundColor:e.palette.primary.main},display:"flex",justifyContent:"center",alignItems:"center",width:"4vw",[e.breakpoints.down("sm")]:{fontSize:"2vw",display:"flex-start",justifyContent:"center",alignItems:"flex-start",padding:"1vw"}},socialIcons:{display:"justify",justifyContent:"center",alignItems:"center",marginTop:"1vw",[e.breakpoints.down("sm")]:{display:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"}}}))),B=[{title:"Timeline",content:"milestones",icon:Object(L.jsx)(N.a,{})},{title:"Work/Research",content:"work",icon:Object(L.jsx)(z.a,{})},{title:"Skills",content:"skills",icon:Object(L.jsx)(A.a,{})},{title:"Publications",content:"publications",icon:Object(L.jsx)(P.a,{})}],R=i.a.createContext().Provider;var E=function(e){let{setCurrentPage:t}=e;const a=M(),i=Object(c.a)(),[r,s]=Object(n.useState)(B[1]),o=Object(j.a)(i.breakpoints.down("sm")),l="Srikar";return Object(L.jsx)(R,{value:i,children:Object(L.jsx)("div",{className:a.sidebarContainer,children:Object(L.jsxs)(u.a,{variant:"permanent",classes:{root:a.drawer,paper:a.drawerPaper},children:[Object(L.jsxs)("div",{className:a.profileContainer,children:[Object(L.jsx)(g.a,{alt:"Srikar Chundury",src:"/selfie.jpeg",className:a.avatar}),o?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(p.a,{className:a.heading,children:l}),Object(L.jsx)(p.a,{className:a.subheading,children:"PhD Student"})]}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(p.a,{className:a.heading,children:[l," ","Chundury"]}),Object(L.jsx)(p.a,{className:a.subheading,children:"Computer Science PhD Student"})]}),Object(L.jsx)(x.a,{className:a.divider}),Object(L.jsx)(f.a,{variant:"contained",className:a.button,onClick:()=>{window.open("/Resume.pdf","_blank")},children:"Resume"}),Object(L.jsxs)("div",{className:a.socialIcons,children:[Object(L.jsx)("a",{href:"https://www.linkedin.com/in/srikarchundury/",target:"_blank",rel:"noopener noreferrer",children:Object(L.jsx)(w.a,{className:a.icon})}),Object(L.jsx)("a",{href:"https://github.com/srikarchundury",target:"_blank",rel:"noopener noreferrer",children:Object(L.jsx)(S.a,{className:a.icon})})]})]}),Object(L.jsx)(x.a,{className:a.divider}),Object(L.jsx)(v.a,{className:a.listOfContent,children:B.map(((e,n)=>Object(L.jsxs)(y.a,{button:!0,onClick:()=>(e=>{s(e),t(e.content)})(e),className:`${a.listItem} ${e===r?a.selected:""}`,children:[Object(L.jsx)(e.icon.type,{className:a.listIcon,style:{color:e===r?i.palette.primary.contrastText:i.palette.text.secondary}}),!o&&Object(L.jsxs)(p.a,{style:{marginLeft:i.spacing(2),color:e===r?i.palette.primary.contrastText:i.palette.text.primary,fontSize:"1vw"},children:[e.title," "]})]},n)))}),Object(L.jsx)(x.a,{className:a.divider})]})})})},Q=a(161),F=a(147),G=a(146),U=a(148),$=a(149),J=a(150);const W=Object(o.a)((e=>({pageContainer:{position:"relative",paddingTop:"3vw",paddingBottom:"3vw",paddingLeft:"1vw",backgroundColor:e.palette.background.default},verticalLine:{position:"absolute",top:0,left:0,height:"100%",backgroundColor:e.palette.divider},sectionTitle:{display:"flex",alignItems:"center",marginBottom:"1vw",fontWeight:"bold",color:e.palette.text.primary,fontSize:"1.5vw",[e.breakpoints.down("sm")]:{fontSize:"4vw"}},icon:{fontSize:"1.5vw",[e.breakpoints.down("sm")]:{fontSize:"4vw"},marginRight:"1vw",color:e.palette.primary.main},subtitle:{fontSize:"1vw",[e.breakpoints.down("sm")]:{fontSize:"3vw"},color:e.palette.text.primary},name:{fontSize:"2vw",[e.breakpoints.down("sm")]:{fontSize:"3vw"},color:e.palette.text.primary},company:{fontSize:"0.8vw",[e.breakpoints.down("sm")]:{fontSize:"2vw"},fontWeight:"bold",color:e.palette.text.primary},date:{fontSize:"0.8vw",[e.breakpoints.down("sm")]:{fontSize:"2vw"},color:e.palette.text.primary},subtitle1:{color:e.palette.text.primary},description:{marginTop:"0.7vw",fontSize:"0.7vw",[e.breakpoints.down("sm")]:{fontSize:"2vw"},color:e.palette.text.primary},skills:{fontSize:"0.8vw",[e.breakpoints.down("sm")]:{fontSize:"2vw"},color:e.palette.text.primary},link:{color:e.palette.primary.main,textDecoration:"underline","&:hover":{textDecoration:"none"}}})));var H=function(e){const t=W(),a=Object(c.a)(),{scrollTo:i}=e;return Object(n.useEffect)((()=>{const e=document.getElementById(i.toString());e&&e.scrollIntoView({behavior:"smooth",block:"start"})}),[i]),Object(L.jsxs)("div",{className:t.pageContainer,children:[Object(L.jsx)("div",{className:t.verticalLine,style:{backgroundColor:a.palette.divider}}),Object(L.jsx)(x.a,{variant:"middle",style:{backgroundColor:a.palette.divider},id:"work"}),Object(L.jsxs)(Q.a,{mt:4,children:[Object(L.jsxs)(p.a,{variant:"h4",className:t.sectionTitle,children:[Object(L.jsx)(G.a,{className:t.icon}),"Work and Research Experience"]}),Object(L.jsxs)(F.a,{container:!0,spacing:2,children:[Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Graduate Research Assistant"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"Systems Laboratory, NC State University"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"Sept 2022 \u2013 Present"}),Object(L.jsx)(p.a,{className:t.description,children:"Working on analyzing sparsity of tensor networks in quantum simulations. Co-advised by Dr. Frank Mueller and Dr. Jiajia Li on developing a novel numerical library to leverage sparse patterns to achieve realize digital quantum simulation. Presented my work as posters at QCUF, ORNL and QSim 2023."})]})})}),Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Research Intern"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"Oak Ridge National Laboratory, Tennessee"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"May 2024 \u2013 August 2024"}),Object(L.jsx)(p.a,{className:t.description,children:"Continued graduate research under Dr. In-Saeng Suh & Dr. Frank Mueller, working on the novel sparse data format DiaQ and contributed to showcasing a hybrid QC-HPC ecosystem via QFw: A Quantum Framework for HPC-QC integration. Awarded best poster at QCUF 2024 and nominated for Best Poster at Super Computing 2024."})]})})}),Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Graduate Research Intern"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"Oak Ridge National Laboratory, Tennessee"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"May 2023 \u2013 July 2023"}),Object(L.jsx)(p.a,{className:t.description,children:"Worked on formulating, developing, and improving high-performance tensor network libraries used for quantum simulations, as part of the Quantum Natural Language Processing group. Presented my work as a poster at IEEE QCE 2023."})]})})}),Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Software Development Engineer III"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"Walmart Global Tech, Bangalore"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"August 2021 \u2013 July 2022"}),Object(L.jsx)(p.a,{className:t.description,children:"Developed microservices in GoLang and micro frontends in React, and deployed them on Walmart's cloud-native Kubernetes platform."})]})})}),Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Software Development Engineer II"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"Walmart Labs, Bangalore"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"August 2019 \u2013 July 2021"}),Object(L.jsx)(p.a,{className:t.description,children:"Full-stack development of an internal orchestration web-based tool to automate life cycle management of Walmart's enormous infrastructure (stores, distribution centers, and in-house machines)."})]})})}),Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Software Development Intern"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"Walmart Labs, Bangalore"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"January 2019 \u2013 June 2019"}),Object(L.jsx)(p.a,{className:t.description,children:"Developed a dynamic task scheduler for application-level function scheduling. Actively being used by Walmart infrastructure teams to schedule maintenance tasks that include patching and provisioning systems."})]})})}),Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Intern"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"Agneyas Labs, Bangalore"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"December 2018 \u2013 January 2019, June 2019 \u2013 August 2019"}),Object(L.jsx)(p.a,{className:t.description,children:"Deployed Spark on Kubernetes. Built a pipeline to submit jars via spark-submit and return results back. Built a basic login page for a client's website. Captured time-sensitive edge metrics in InfluxDB. Analyzed this time series using basic visualizations of data after cleaning and preprocessing."})]})})}),Object(L.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{children:Object(L.jsxs)(Q.a,{children:[Object(L.jsx)(p.a,{variant:"subtitle1",className:t.subtitle,children:"Co-Op"}),Object(L.jsx)(p.a,{variant:"body2",className:t.company,children:"AMD, Bangalore"}),Object(L.jsx)(p.a,{variant:"body2",className:t.date,children:"May 2018 \u2013 July 2018"}),Object(L.jsx)(p.a,{className:t.description,children:"Analyzed performance for various then-latest AMD server processors, and contrasted them with that of intel server processors for kernel-level benchmarks like netperf and string-copy."})]})})})]})]}),Object(L.jsx)("br",{}),Object(L.jsx)(x.a,{variant:"middle",style:{backgroundColor:a.palette.divider}}),Object(L.jsxs)(Q.a,{mt:4,children:[Object(L.jsxs)(p.a,{variant:"h4",className:t.sectionTitle,children:[Object(L.jsx)(U.a,{className:t.icon}),"Education"]}),Object(L.jsxs)(F.a,{container:!0,spacing:2,children:[Object(L.jsxs)(F.a,{item:!0,xs:12,md:6,children:[Object(L.jsxs)(p.a,{variant:"subtitle1",className:t.subtitle,children:[Object(L.jsx)("strong",{children:"Ph.D. in Computer Science"}),Object(L.jsx)("br",{}),"Aug 2022 \u2013 May 2027"]}),Object(L.jsxs)(p.a,{className:t.description,children:["North Carolina State University, Raleigh, NC",Object(L.jsx)("br",{}),"GPA \u2013 3.95/4.0",Object(L.jsx)("br",{}),"Relevant Courses: Quantum Computing, Resource-dependent Deep Learning, Graph Theory, Parallel Systems, Efficient Tensor Computation for AI, Real-time AI \\& Machine Learning Systems."]})]}),Object(L.jsxs)(F.a,{item:!0,xs:12,md:6,children:[Object(L.jsxs)(p.a,{variant:"subtitle1",className:t.subtitle,children:[Object(L.jsx)("strong",{children:"MS in Computer Science"}),Object(L.jsx)("br",{}),"Aug 2022 \u2013 May 2024"]}),Object(L.jsxs)(p.a,{className:t.description,children:["North Carolina State University, Raleigh, NC ",Object(L.jsx)("br",{}),Object(L.jsx)("strong",{children:' Master\'s Thesis: "DiaQ: A Novel Quantum-Tailored Numerical Format" '})]})]}),Object(L.jsxs)(F.a,{item:!0,xs:12,md:6,children:[Object(L.jsxs)(p.a,{variant:"subtitle1",className:t.subtitle,children:[Object(L.jsx)("strong",{children:"Bachelor of Technology in Computer Science and Engineering"}),Object(L.jsx)("br",{}),"Aug 2015 \u2013 May 2019"]}),Object(L.jsxs)(p.a,{className:t.description,children:["PES University, Bangalore, India",Object(L.jsx)("br",{}),"GPA \u2013 9.29/10",Object(L.jsx)("br",{}),"Specialization: Systems and Core Computing"]})]})]})]}),Object(L.jsx)("br",{}),Object(L.jsx)(x.a,{variant:"middle",style:{backgroundColor:a.palette.divider},id:"skills"}),Object(L.jsxs)(Q.a,{mt:4,children:[Object(L.jsxs)(p.a,{variant:"h4",className:t.sectionTitle,children:[Object(L.jsx)($.a,{className:t.icon}),"Skills"]}),Object(L.jsxs)(p.a,{className:t.skills,children:[Object(L.jsx)("strong",{children:"Languages:"})," C++, Python, Go, C, R, SQL, JavaScript, JSX, CSS, HTML"]}),Object(L.jsxs)(p.a,{className:t.skills,children:[Object(L.jsx)("strong",{children:"Frameworks/Technologies:"})," Flask, Hadoop, Spark, Redis, PostgreSQL, MariaDB, InfluxDB, MongoDB, Ansible, Jenkins, Docker, Kubernetes, TensorFlow, PyTorch, Horovod, Qiskit, Cirq, Quimb, D-wave, React, LATEX, Apache TVM."]})]}),Object(L.jsx)("br",{}),Object(L.jsx)(x.a,{variant:"middle",style:{backgroundColor:a.palette.divider}}),Object(L.jsxs)(Q.a,{mt:4,children:[Object(L.jsxs)(p.a,{variant:"h4",className:t.sectionTitle,children:[Object(L.jsx)(J.a,{className:t.icon}),"Relevant Projects"]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"High Performance Tensor Network Quantum Circuit Simulation"}),Object(L.jsx)("br",{}),"Sept 2022 \u2013 Present",Object(L.jsx)("br",{}),"Working on various aspects of tensor network based quantum simulations as part of my masters' thesis. Acquired full quantum stack knowledge of various high performance libraries, started contributing to a few."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Distributed deep neural network training optimization"}),Object(L.jsx)("br",{}),"Sept 2022 \u2013 December 2022",Object(L.jsx)("br",{}),"Comparative study of Uber's horovod with different synchronous averaging techniques like ring reduce, ring all-reduce, ring grouped-reduce. Experimented with a new averaging technique called asynchronous step-wise reduce."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Program Phase Characterization for Big Data Workloads"}),Object(L.jsx)("br",{}),"Jan 2019 \u2013 May 2019",Object(L.jsx)("br",{}),"Identified micro architecturally different phases in a program and analyze these phases for similarities across other phases to aid design engineers in the performance optimization process. Introduced a new technique that uses Self-Organizing maps. Thus saving a significant amount of time for design engineers who optimize processors for performance uplifts."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Impact Of Software Stack Version On Microarchitecture"}),Object(L.jsx)("br",{}),"Aug 2018 \u2013 Jan 2019",Object(L.jsx)("br",{}),"Demonstrates the micro-architectural differences in their hardware utilization. Results show that Spark v2.2 generates more efficient code compared to Spark v1.3 and hence reduces the total number of page faults by 10%."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Object Classification, Detection and Segmentation (PASCAL VOC2010)"}),Object(L.jsx)("br",{}),"June 2018",Object(L.jsx)("br",{}),"Built a classifier using regular CNN with Keras. Removed the top layers and replaced them with a 20 layer Softmax to compare confusion matrix metrics. Used Keras under the TensorFlow GPU version with CUDA libraries."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Mouth Tracking"}),Object(L.jsx)("br",{}),"Nov 2017",Object(L.jsx)("br",{}),"Improving the accuracy of speech-to-text engines by taking into account the video of the audio generator (person speaking). Dlib to track lips- lip segmentation. Used a Bayesian model using a self-generated Audio-Video training dataset to predict sentences."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Terrorist Attack analysis and prediction using GTD"}),Object(L.jsx)("br",{}),"Aug 2017 - Dec 2017",Object(L.jsx)("br",{}),"Different kinds of visualizations to understand the Global Terrorism Dataset better. ARIMA-based time series analysis to forecast the number of attacks in the following years. Used decision trees, knn, naive bayes classifiers and logistic regression to predict the following: culpable terrorist group (accuracy = 92.34%), victim count (accuracy = 62.26%), extent of property damage (accuracy = 88.65%) and safe return of hostages (accuracy = 93.0%)."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Green Bangalore"}),Object(L.jsx)("br",{}),"Apr 2017",Object(L.jsx)("br",{}),"Determined the greenery of a given place in Bangalore relative to Cubbon park. Used Google Earth to get the satellite imagery of the entire place. The edges of a place have been determined by KML files that were available online on a government site. Used Hadoop for distributed computation of green index of multiple images of a given place at the same time (green index = ratio of green pixels to total pixels). Compared the result with a pre-computed green index of Cubbon park."]}),Object(L.jsxs)(p.a,{className:t.description,children:[Object(L.jsx)("strong",{children:"Simulation of Sir.Michael Conway's game of life"}),Object(L.jsx)("br",{}),"Aug 2016 - Dec 2016",Object(L.jsx)("br",{}),"A modified version of the standard game of life where the user can specify the inclusion bit string and the dead state rule. Provided options to switch between user-defined-rule game and standard-rule game. Data Structures used were 2D-array and N-ary tree."]})]}),Object(L.jsx)("br",{}),Object(L.jsx)(x.a,{variant:"middle",style:{backgroundColor:a.palette.divider}})]})},q=a(151),K=a(152),V=a(153),_=a(155),Y=a(156),X=a(154),Z=a(57),ee=a.n(Z),te=a(77),ae=a.n(te),ne=a(78),ie=a.n(ne),re=a(61),se=a.n(re),oe=a(79),ce=a.n(oe),le=a(80),de=a.n(le),me=a(81),pe=a.n(me),be=a(82),he=a.n(be);const je=Object(o.a)((e=>({pageContainer:{position:"relative",paddingTop:"3vw",paddingBottom:"3vw",paddingLeft:"1vw",backgroundColor:e.palette.background.default},timelineItem:{"&:hover $timelineIcon, &:hover $timelineContent":{transform:"scale(1.05)",backgroundColor:e.palette.primary.main,"& svg":{color:e.palette.primary.contrastText},"& $title, & $content":{color:e.palette.primary.contrastText}}},timelineIcon:{padding:"2vh",marginRight:"2vw",marginLeft:"2vw",border:`0.1vh solid ${e.palette.grey[300]}`,borderRadius:"1vh",color:e.palette.text.secondary,backgroundColor:e.palette.background.paper,transition:"transform 0.3s, background-color 0.2s","&:hover":{transform:"scale(1.05)",backgroundColor:e.palette.primary.main,"& svg":{color:e.palette.primary.contrastText}},[e.breakpoints.down("sm")]:{padding:"1vh",marginRight:"1vw",marginLeft:"1vw"},[e.breakpoints.down("xs")]:{padding:"0.5vh",marginRight:"0.5vw",marginLeft:"0.5vw"}},timelineContent:{padding:"2vh",border:`0.1vh solid ${e.palette.grey[300]}`,borderRadius:"1vh",backgroundColor:e.palette.background.paper,transition:"transform 0.3s, background-color 0.2s","&:hover":{transform:"scale(1.05)",backgroundColor:e.palette.primary.main,"& $title, & $content":{color:e.palette.primary.contrastText}},[e.breakpoints.down("sm")]:{padding:"1vh"},[e.breakpoints.down("xs")]:{padding:"0.5vh"}},title:{fontSize:"2.2vh",fontWeight:"bold",marginBottom:"1vh",color:e.palette.text.primary,transition:"color 0.2s",[e.breakpoints.down("sm")]:{fontSize:"1.8vh"},[e.breakpoints.down("xs")]:{fontSize:"1.4vh"}},content:{fontSize:"1.6vh",marginBottom:"2vh",color:e.palette.text.secondary,transition:"color 0.2s",[e.breakpoints.down("sm")]:{fontSize:"1.4vh"},[e.breakpoints.down("xs")]:{fontSize:"1.2vh"}}})));var ue=function(){const e=je(),t=[{title:"Finished Schooling",note:"Completed my schooling at DAV PUBLIC SCHOOL, Safilguda, Hyderabad, Telangana, India. A special shoutout to my remarkable mathematics teacher, Yamini Madam, who not only taught me math but also understood me deeply as a person. Grateful for her unwavering support throughout my school journey.",icon:Object(L.jsx)(ee.a,{})},{title:"Moved to Bangalore",note:"Packed my bags and ventured to Bangalore to kickstart my bachelor\u2019s degree journey. Exciting times awaited in the tech hub! Here is where I met Dr. Subramaniam Kalambur (Dr. KVS sir) whom I revere as my guru. His mentorship and guidance have been instrumental in shaping my career path.",icon:Object(L.jsx)(ae.a,{})},{title:"AMD Internship & Mentorship",note:"Embarked on an enlightening internship journey at AMD, where I had the privilege of meeting Mr. Prasun Ratn, a mentor par excellence and an alumnus of NC State. His guidance and insights were invaluable in shaping my professional journey.",icon:Object(L.jsx)(z.a,{})},{title:"Agneyas Labs Internship",note:"Thrived in an internship at Agneyas Labs under the tutelage of my maternal uncle, Mr. Chandrasekhar Buduguru, whose passion for computer science ignited my own. His mentorship has been instrumental in my career path.",icon:Object(L.jsx)(se.a,{})},{title:"Hackathon Victory",note:"Secured a significant victory at a hackathon, winning 40 grand INR\u2014an achievement that marked a significant milestone in our journey, making it a memorable accomplishment even today!",icon:Object(L.jsx)(ie.a,{})},{title:"Internship at Walmart Labs",note:"Joined the dynamic platforms team at Walmart Labs, Kadubeesanahalli, Bangalore, India. Grateful for the guidance and mentorship from an incredible team that swiftly led to a full-time role. Special thanks to mentors: Nikhil, Nitish, Muzzakir, Suhail, Ashutosh, Mukesh, Santosh, and Anuj. Kumar, my manager, played a pivotal role in shaping my journey here.",icon:Object(L.jsx)(z.a,{})},{title:"Undergraduate Graduation",note:"Successfully graduated with a Bachelor of Technology in Computer Science and Engineering from PES University, Bangalore, India. Specialization in Systems and Core Computing, with a GPA of 9.29/10.",icon:Object(L.jsx)(ee.a,{})},{title:"Started Full-time Role at Walmart Global Tech",note:"Transitioned to a full-stack developer role at Walmart Global Tech. Kathy, my manager, provided unwavering support, fostering growth amidst challenges while steering the product with clarity and vision.",icon:Object(L.jsx)(se.a,{})},{title:"Promotion to SDE 3",note:"Elevated to Software Development Engineer 3, delving into microservices and microfrontends, unlocking a realm of innovative possibilities.",icon:Object(L.jsx)(ce.a,{})},{title:"Moved to Raleigh, USA",note:"Embraced the pursuit of higher education in the USA to explore High-Performance Computing (HPC) techniques, a pivotal step toward my passion for parallel programming.",icon:Object(L.jsx)(de.a,{})},{title:"Start of Master\u2019s Program at NC State",note:"Commenced my Master of Science in Computer Science at NC State, meeting mentors Dr. Frank Mueller and Dr. Jiajia Li. Engaged in the fascinating world of HPC techniques for quantum simulations, relishing the challenges and forging new friendships in Raleigh.",icon:Object(L.jsx)(ee.a,{})},{title:"Current Role as Graduate Research Assistant",note:"Embarked on my current role as a Graduate Research Assistant under the guidance of Dr. Mueller, diving deeper into my passion for research and exploration.",icon:Object(L.jsx)(z.a,{})},{title:"Internship at Oak Ridge National Lab",note:"Seized an enriching internship opportunity at Oak Ridge National Lab, delving into the realm of HPC clusters under the mentorship of Dr. In-Saeng Suh. Presented my work at IEEE-QCE 2023.",icon:Object(L.jsx)(pe.a,{})},{title:"PhD",note:"By the support of my mentors, decided to embark on the exciting path of a Ph.D., fueled by a passion for research and innovation.",icon:Object(L.jsx)(he.a,{})},{title:"Internship at Oak Ridge National Labs",note:"Best Poster at QCUF 2024 for work under Amir Shehata and Dr. In-Saeng Suh on Quantum Framework for HPC-QC integrated ecosystem.",icon:Object(L.jsx)(z.a,{})}];return t.reverse(),Object(L.jsx)("div",{className:e.pageContainer,children:Object(L.jsx)(q.a,{align:"alternate",children:t.map(((a,n)=>Object(L.jsxs)(K.a,{className:e.timelineItem,children:[Object(L.jsxs)(V.a,{children:[Object(L.jsx)(X.a,{className:e.timelineIcon,children:a.icon}),n!==t.length-1&&Object(L.jsx)(_.a,{})]}),Object(L.jsxs)(Y.a,{className:e.timelineContent,children:[Object(L.jsx)(p.a,{className:e.title,children:a.title}),Object(L.jsx)(p.a,{className:e.content,children:a.note})]})]},n)))})})};const ge=Object(o.a)((e=>({pageContainer:{position:"relative",padding:`${e.spacing(3)}px`,display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:`${e.spacing(3)}px`,backgroundColor:e.palette.background.default,height:"95%"},verticalLine:{position:"absolute",top:0,left:0,height:"100%",backgroundColor:e.palette.divider},tile:{height:"30vh",padding:`${e.spacing(2)}px`,border:`1px solid ${e.palette.grey[300]}`,boxShadow:`0px ${e.spacing(.3)}px ${e.spacing(.8)}px rgba(0, 0, 0, 0.2)`,transition:"transform 0.3s, background-color 0.3s","&:hover":{transform:"scale(1.05)",backgroundColor:e.palette.primary.main,"& $title, & $content":{color:e.palette.primary.contrastText}}},title:{fontSize:"1.2rem",fontWeight:"bold",marginBottom:`${e.spacing(1)}px`,color:e.palette.text.primary,transition:"color 0.3s"},content:{fontSize:"0.9rem",marginBottom:`${e.spacing(2)}px`,color:e.palette.text.secondary,transition:"color 0.3s"}})));var xe=function(e){const t=ge(),a=Object(c.a)();return Object(L.jsxs)("div",{className:t.pageContainer,children:[Object(L.jsx)("div",{className:t.verticalLine,style:{backgroundColor:a.palette.divider}}),e.tilesData.map(((e,a)=>Object(L.jsx)("div",{className:t.tile,children:Object.entries(e).map((e=>{let[a,n]=e;return Object(L.jsxs)(i.a.Fragment,{children:[Object(L.jsx)(p.a,{variant:"h6",className:t.title,children:a}),Object(L.jsx)(p.a,{variant:"body1",className:t.content,children:n})]},a)}))},a)))]})},fe=a(83),ve=a.n(fe);const ye=Object(o.a)((e=>({pageContainer:{position:"relative",paddingTop:"3vw",paddingBottom:"3vw",paddingLeft:"1vw",[e.breakpoints.down("sm")]:{paddingTop:"1vw",paddingBottom:"1vw",paddingLeft:"5vw"},backgroundColor:e.palette.background.default,width:"100%",height:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",[e.breakpoints.down("sm")]:{justifyContent:"space-evenly"}},tile:{height:"15vw",width:"15vw",[e.breakpoints.down("sm")]:{height:"40vw",width:"50vw"},border:`0.1vw solid ${e.palette.grey[300]}`,boxShadow:"0px 0.3vw 0.8vw rgba(0, 0, 0, 0.2)",position:"relative",transition:"transform 0.3s, background-color 0.3s","&:hover":{transform:"scale(1.05)",backgroundColor:e.palette.primary.main,"& $title, & $content":{color:e.palette.primary.contrastText},"& $linkContainer":{opacity:1}},margin:"2vw",padding:"2vw"},title:{fontSize:"1.2vw",[e.breakpoints.down("sm")]:{fontSize:"4vw"},fontWeight:"bold",marginBottom:"1vw",color:e.palette.text.primary,transition:"color 0.3s"},content:{fontSize:"0.9vw",[e.breakpoints.down("sm")]:{fontSize:"3vw"},marginBottom:"2vw",color:e.palette.text.secondary,transition:"color 0.3s"},linkContainer:{position:"absolute",top:0,right:0,padding:"1vw",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,transition:"opacity 0.3s","& svg":{color:e.palette.primary.contrastText,fontSize:"2vw",[e.breakpoints.down("sm")]:{fontSize:"5vw"}}}})));var Oe=function(e){const t=ye(),[a,i]=(Object(c.a)(),Object(n.useState)(!1));return Object(L.jsx)("div",{className:t.pageContainer,children:e.tilesData&&e.tilesData.map(((e,n)=>{const[r,s]=Object.entries(e)[0],{publication:o,link:c}=s;return Object(L.jsxs)("div",{className:t.tile,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[Object(L.jsx)("div",{className:t.linkContainer,children:a&&Object(L.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(L.jsx)(ve.a,{})})}),Object(L.jsx)(p.a,{className:t.title,children:r}),Object(L.jsx)(p.a,{className:t.content,children:o})]},n)}))})},we=a(84),ke=a(85),Se=a(86),Ce=a(87),Ne=a(89);const Ie=Object(Ne.a)({palette:{type:"light",primary:{main:"#1976d2"},secondary:{main:"#f50057"}}}),ze=Object(Ne.a)({palette:{type:"dark",primary:{main:"#90caf9"},secondary:{main:"#ff4081"}}}),Te=Object(o.a)((e=>({copyright:{fontSize:"0.8vw",[e.breakpoints.down("sm")]:{fontSize:"2vw"}},title:{flexGrow:1,textAlign:"left"},sidebar:{flexGrow:1,position:"fixed",overflowY:"auto",zIndex:e.zIndex.drawer,boxSizing:"border-box",width:"18vw"},pageContent:{marginLeft:"18vw",position:"fixed",overflowY:"auto",padding:0,top:0,bottom:0,left:0,zIndex:e.zIndex.drawer,boxSizing:"border-box"},footer:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,display:"flex",justifyContent:"space-between",alignItems:"center",position:"fixed",left:0,bottom:0,width:"100%",height:"2vw",[e.breakpoints.down("sm")]:{height:"3.5vw"},zIndex:e.zIndex.drawer+1,paddingBottom:"0%"},toggleIcon:{fontSize:"2vw",[e.breakpoints.down("sm")]:{fontSize:"3vw"},transition:"color 0.3s ease",color:"dark"===e.palette.type?e.palette.primary.light:e.palette.primary.dark,"&:hover":{color:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.light}},poweredBy:{marginRight:"1%"},tooltip:{fontSize:"1.4vh",[e.breakpoints.down("sm")]:{fontSize:"2.5vw"}}})));var Ae=function(){const e=Te(),[t,a]=(Object(c.a)(),Object(n.useState)("work")),[i,r]=Object(n.useState)(Math.random()<.5?Ie:ze),[s,o]=Object(n.useState)("100%"),[j,u]=Object(n.useState)(!1);Object(n.useEffect)((()=>{const e=()=>{const e=window.innerHeight,t=document.getElementById("footer").offsetHeight;o(`${e-t}px`)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]);const g=(new Date).getFullYear();return Object(L.jsxs)(l.a,{theme:i,children:[Object(L.jsx)("div",{className:e.sidebar,children:Object(L.jsx)(E,{setCurrentPage:a})}),Object(L.jsx)("div",{className:e.pageContent,children:(()=>{switch(t){case"work":return Object(L.jsx)(H,{scrollTo:"work"});case"skills":return Object(L.jsx)(H,{scrollTo:"skills"});case"milestones":return Object(L.jsx)(ue,{});case"books":return Object(L.jsx)(xe,{tilesData:Se});case"songs":return Object(L.jsx)(xe,{tilesData:ke});case"life":return Object(L.jsx)(xe,{tilesData:we});case"publications":return Object(L.jsx)(Oe,{tilesData:Ce});default:return null}})()}),Object(L.jsxs)("footer",{className:e.footer,style:{backgroundColor:i.palette.primary.main,color:i.palette.primary.contrastText},id:"footer",children:[Object(L.jsx)("div",{children:Object(L.jsx)(d.a,{title:i===Ie?"Change to dark":"Change to light",placement:"top",classes:{tooltip:e.tooltip},children:Object(L.jsx)(m.a,{className:e.toggleIcon,onClick:()=>{r(i===Ie?ze:Ie)},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),"aria-label":"Toggle Mode",children:i===Ie?j?Object(L.jsx)(b.a,{style:{color:i.palette.primary.light}}):Object(L.jsx)(h.a,{style:{color:i.palette.primary.light}}):j?Object(L.jsx)(h.a,{style:{color:i.palette.primary.dark}}):Object(L.jsx)(b.a,{style:{color:i.palette.primary.dark}})})})}),Object(L.jsx)("div",{children:Object(L.jsxs)(p.a,{className:e.copyright,children:["\xa9 ",g," Srikar Chundury. Some Rights Reserved."]})}),Object(L.jsx)("div",{className:e.poweredBy,children:Object(L.jsx)(p.a,{className:e.copyright,children:"Powered by Material-UI"})})]})]})};s.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(Ae,{})}),document.getElementById("root"))},84:function(e){e.exports=JSON.parse('[{"Welcome":"This is one-way traffic, I\'m gonna give gyan, that\'s about it!"},{"Luck":"No such thing. Just destiny!"},{"Work":"Try your best, leave the rest!"}]')},85:function(e){e.exports=JSON.parse('[{"Manasa vaacha (Godavari)":"Mind calming lyrics and music! good one by Mr. Radhakrishna! This entire movie is a different vibe!"},{"Chal-chalo chalo life se milo (s/o Satyamurthy)":"Pick yourself up and get to work kinda lyrics!"},{"Inthe-Inthinthe (Balu)":"Nothing is tough if you really think about it!"},{"Chaila-Chaila (Shankar Dada MBBS)":"At 5:00 boss says something that really sticks to you about life! listen and enjoy."}]')},86:function(e){e.exports=JSON.parse('[{"The Silent Patient":"Mind-bogglingly amazing psychological thriller! I never would have guessed. Loved it!"},{"The Surgeon":"The resolution felt somewhat abrupt and left me craving a more satisfying conclusion. Nonetheless, it was still an exhilarating read that kept me guessing until the very end."},{"The Midnight Library":"Decent read. It\'s not my usual type but still had fun. Boderline self-help with child-like fiction."},{"Verity":"Amazing! Fast paced thriller. A definite recommend! A somewhat eerie climax though."},{"Insomnia":"A unique horror thriller sci-fi blend! Loved it."},{"A Cry in the Dark":"currently reading... Stay tuned fellas! Also, do hit me up with recommendations!"},{"\u0c24\u0c41\u0c32\u0c38\u0c3f \u0c26\u0c33\u0c02 (Tulasi Dalam)":"A horror thriller recommendation from my mum. Intend to pick it up soon!"}]')},87:function(e){e.exports=JSON.parse('[{"QFw: A Quantum Framework for Large-scale HPC Ecosystems":{"publication":"Best Poster QCUF 2024, Oak Ridge National Lab; SC 2024 Best Poster Finalist (Top 6)","link":"https://sc24.supercomputing.org/proceedings/poster/poster_pages/post243.html"}},{"A PEPS Plugin for TNQVM":{"publication":"IEEE International Conference for Quantum Computing and Software Engineering (2023)","link":"https://ieeexplore.ieee.org/document/10313902"}},{"A Novel Approach to Sparsity in Quantum Simulations":{"publication":"QSim, Telluride, Colorado, USA and QCUF, ORNL, USA (2023)","link":"https://arcb.csc.ncsu.edu/~mueller/ftp/pub/mueller/papers/qsim23-1.pdf"}},{"Spark Version Study":{"publication":"ACM International Conference on Performance Engineering (2019)","link":"https://dl.acm.org/doi/abs/10.1145/3302541.3311963"}}]')}},[[105,1,2]]]);
//# sourceMappingURL=main.1901f405.chunk.js.map