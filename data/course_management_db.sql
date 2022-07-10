DROP TABLE IF EXISTS OFFERING_COURSE; 
DROP TABLE IF EXISTS EVALUATION_DETAILS; 
DROP TABLE IF EXISTS COURSE_LECTURERS; 
DROP TABLE IF EXISTS SYLLABUS_OUTLINE; 
DROP TABLE IF EXISTS PREREQUISITES; 
DROP TABLE IF EXISTS ALLOWED_DEPTS; 
DROP TABLE IF EXISTS COURSE; 
DROP TABLE IF EXISTS USERS; 
DROP TABLE IF EXISTS DEPARTMENTS; 

CREATE TABLE DEPARTMENTS(
Dept_ID tinyint NOT NULL UNIQUE,
Department VARCHAR(150) NOT NULL,
PRIMARY KEY(Dept_ID)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

CREATE TABLE USERS(
Emp_id CHAR(11) NOT NULL UNIQUE,
Fname VARCHAR(150) NOT NULL,
Lname VARCHAR(150) NOT NULL,
Department tinyint NOT NULL,
email VARCHAR(120) NOT NULL,
Phone_No char(11),
Position VARCHAR(150),
Password CHAR(8) NOT NULL,
Is_available BIT NOT NULL,
PRIMARY KEY(Emp_id),
FOREIGN KEY(Department) REFERENCES DEPARTMENTS(Dept_ID)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 


CREATE TABLE COURSE(
Course_code CHAR(15) NOT NULL UNIQUE,
Course_title VARCHAR(250) NOT NULL,
Department tinyint NOT NULL,
Semester CHAR(1) NOT NULL,
Credits INT NOT NULL,
Core_Elective CHAR(15) NOT NULL,
Course_coordinator CHAR(11) NOT NULL,
Learning_Outcomes TEXT,
Is_senate_approved BIT NOT NULL,
Is_ready_to_offer BIT NOT NULL,
PRIMARY KEY(Course_code),
FOREIGN KEY(Course_coordinator) REFERENCES USERS(Emp_id),
FOREIGN KEY(Department) REFERENCES DEPARTMENTS(Dept_ID)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

CREATE TABLE ALLOWED_DEPTS(
Course_code CHAR(15) NOT NULL,
Allowed_dept tinyint,
FOREIGN KEY(Course_code) REFERENCES COURSE(Course_code),
FOREIGN KEY(Allowed_dept) REFERENCES DEPARTMENTS(Dept_ID)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

CREATE TABLE PREREQUISITES(
Course_code CHAR(15) NOT NULL,
Prerequisite CHAR(15),
FOREIGN KEY(Course_code) REFERENCES COURSE(Course_code),
FOREIGN KEY(Prerequisite) REFERENCES COURSE(Course_code)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

CREATE TABLE SYLLABUS_OUTLINE(
Course_code CHAR(15) NOT NULL,
Chapter INT NOT NULL,
Main_topic VARCHAR(150) NOT NULL,
Description TEXT,
Lecture_hours INT,
Tutorial_hours INT,
Lab_Field_hours INT,
Assignment_hours INT,
PRIMARY KEY(Course_code,Chapter),
FOREIGN KEY(Course_code) REFERENCES COURSE(Course_code)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

CREATE TABLE COURSE_LECTURERS(
Course_code CHAR(15) NOT NULL,
Course_lecturer CHAR(11),
FOREIGN KEY(Course_code) REFERENCES COURSE(Course_code),
FOREIGN KEY(Course_lecturer) REFERENCES USERS(Emp_id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

CREATE TABLE EVALUATION_DETAILS(
Course_code CHAR(15) NOT NULL,
Assignment_method VARCHAR(150),
Precentage INT,
FOREIGN KEY(Course_code) REFERENCES COURSE(Course_code)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

CREATE TABLE OFFERING_COURSE(
Batch CHAR(3) NOT NULL,
Semester CHAR(1) NOT NULL,
Course_code CHAR(15),
FOREIGN KEY(Course_code) REFERENCES COURSE(Course_code)
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

INSERT INTO DEPARTMENTS VALUES
('1','Computer Engineering'),
('2','Civil Engineering'),
('3','Electrical and Electronic Engineering'),
('4','Interdisciplinary Studies'),
('5','Admin');

INSERT INTO USERS VALUES
('987987988','Nishantha','Galappaththi','1','nishantha999@gmail.com','0768971235','Lecturer','nish4@11','1'),
('987987989','Pubudu','Jayasinghe','2','pubudumora@gmail.com','0754123698','HOD','pubudu/1','1'),
('999887777','Jecobe','Fernando','3','mrjecobe@gmail.com','0789632586','Lecturer','jecobe78','0'),
('987987987','Ahmad','Jabbar','4','ahmadahmad@gmail.com','0789632145','HOD','Ahmad@11','1'),
('987987980','Amila','Rajapaksha','5','aamila789@yahoo.com','0725693214','AR','AMILA@11','1'),
('987987981','Upul','Kumara','5','upulb123@yahoo.com','0756931245','System Engineer','upul1234','1'),
('123456789','Rubi','Somasundaram','3','rubi555@yahoo.com','0756971245','HOD','rubiie78','1'),
('333445555','Sanath','Kumarathunga','3','sanath.t@gmail.com','0756939245','Lecturer','sanath56','1'),
('987654321','Jennifer','Wallace','2','jenifr@gmail.com','0754123648','Lecurer','JENNIE/1','1'),
('666884444','Ramesh','Kumar','1','rameshkumar@gmail.com','0768971235','HOD','ramesh@1','1'),
('333445556','Raveendra','Rthnayaka','4','raveendra5@gmail.com','0789632145','HOD','ravee564','1'),
('987654322','Lakshmi','Sundaram','3','laxmi65@gmail.com','0750931245','Lecturer','lakx1111','1');

INSERT INTO COURSE VALUES
('MC1010','English Language Enhancement','4','1','3','Core','333445556','comprehend lectures in English; communicate in English; refer textbooks, manuals, articles in English; prepare laboratory reports, assignments in English','1','1'),
('ID1021','Engineering Metrology','4','1','3','Core','333445556','Measure basic engineering quantities and present the results in correct units and significant figures using charts, tables and plots; Select appropriate measurement technique and devise solutions to a given engineering problem; Identify different types of errors in measurements, considering the basic components and performance indicators of measuring instruments, and apply procedures to minimise the impact of errors in measurements; Analyse time dependent output of an instrument through rigorous or numerical methods to obtain errors and input characteristics.','1','1'),
('EC2010','Computer Programming','1','2','3','Core','987987988','Describe various program building blocks; Develop simple applications for problem solving using a high-level programming language; Apply Object Oriented Programming concepts; Build simple graphical user interfaces.','1','1'),
('ID1010','Engineering Drawing','4','1','3','Core','333445556','describe standard drafting principles and theory of projection; plot mechanical, architectural, and household wiring drawings at designated scales; recognize underlying techniques behind engineering graphics; sketch objects freehand in 3-D; prepare drawings using Computer Aided Drawing (CAD) software package.','1','1'),
('CE2021','Engineering Mechanics','2','2','3','Core','987654321','understand the basic laws and principles of mechanics; classify structural elements based on their load carrying behavior; compute internal forces and draw bending moment and shear force diagrams for simple structures; solve problems in fluids and friction by using static pressure.','1','1'),
('EC3011','Introduction to Electronics and Instrumentation','3','3','3','Core','987654322','Demonstrate applications of diodes in electronic circuits; Explain behaviors of Biasing circuits small signal models of an BJT amplifier circuit; Design simple op amp and BJT circuits; Analyze RC and RL circuits and its step response; Demonstrate data acquisition systems and actuator systems.','1','1'),
('EC4040','Signals and Systems','3','3','3','Core','987654322','Explain differences between signals and systems and properties of LTI systems; Analyse continuous-time signals and systems in both time domain and frequency domain; Analyse resonant circuits and two port networks; Design analogue filters.','1','1'),
('EC5010','Digital Signal Processing','3','5','3','Core','333445555','Develop A/D or D/A conversion systems; Apply transformation of digital signals into frequency domain to analyse the signals; Apply time-frequency analysis for signal processing tasks; Design digital filters for a given specification or an application; Apply conversion of sampling frequency of a digital signal using multirate techniques.','1','1'),
('MC4010','Discrete Mathematics','4','4','3','Core','333445556','identify fundamental mathematical concepts and terminology; analyse recursive definitions; describe different types of discrete structures; apply techniques for constructing mathematical proofs, illustrated by discrete mathematics examples; identify basics of discrete probability and number theory; apply the methods from discrete probability and number theory in problem solving.','1','1');


INSERT INTO ALLOWED_DEPTS VALUES
('MC1010','4'),
('MC1010','3'),
('MC1010','1'),
('MC1010','2'),
('ID1021','4'),
('ID1021','3'),
('ID1021','1'),
('ID1021','2'),
('EC2010','4'),
('EC2010','3'),
('EC2010','1'),
('EC2010','2'),
('ID1010','4'),
('ID1010','3'),
('ID1010','1'),
('ID1010','2'),
('CE2021','4'),
('CE2021','3'),
('CE2021','1'),
('CE2021','2'),
('EC3011','4'),
('EC3011','3'),
('EC3011','1'),
('EC5010','3'),
('EC5010','1'),
('EC4040','3'),
('EC4040','1'),
('MC4010','1'),
('EC3011','2');

INSERT INTO PREREQUISITES VALUES
('EC5010','EC4040');

INSERT INTO SYLLABUS_OUTLINE VALUES
('MC1010','1','General and Academic Reading','Understanding the general and academic meaning of a short text, Understanding the functions of discourse markers, Answering simple questions, finding main ideas from complex tests (Reading Comprehension), Inferring word meaning (Vocabulary access, general or academic), Identifying implicit information, Separating main ideas and supporting ideas, Understanding cause and effect Labelling skills.','10',NULL,NULL,'6'),
('MC1010','2','General and Academic Writing','Combining simple sentences, Writing short descriptions on familiar topics, Transfer of information from graphic to text and vice-versa, Using relative -clauses, Using passive - structures, Describing processes using sequence markers, Expressing cause and effect and comparison and contrast, Summarizing short texts.','13',NULL,NULL,'6'),
('MC1010','3','General and Academic Listening','Understanding simple information instructions & statements, Understanding announcements and lectures, Understanding narrative texts, Identifying main and supportive ideas, Understanding simple explanations and description, Understanding instruction of a process. Eg: Experiments, Taking down notes while listening to academic genres.','7',NULL,NULL,'3'),
('MC1010','4','General and Academic Speaking','Speaking about people and their backgrounds and on familiar topics such as ambitions, leisure activities and culture using simple/omplex language structures, Directing a person to a known destination, Gathering information using 1/no and WH-questions, Delivering short speeches of 2-3 minutes length on discipline related topics, Retelling the stories found in narrative texts.','9',NULL,NULL,'3'),
('ID1021','1','Introduction to engineering measurements, unit and standards',NULL,'3',NULL,NULL,'3'),
('ID1021','2','Measurements to quantities in different engineering disciplines',NULL,'12',NULL,'36','6'),
('ID1021','3','errors in measurements and error minimization procedures',NULL,'2',NULL,NULL,'3'),
('ID1021','4','Performance indicators and error propagation',NULL,'3',NULL,NULL,NULL),
('ID1021','5','Calibration',NULL,'4',NULL,NULL,NULL),
('ID1021','6','Presentation of engineering information',NULL,'2',NULL,NULL,NULL),
('ID1021','7','Time and frequency domain measurement and analysis of signals',NULL,'3',NULL,NULL,'3'),
('EC2010','1','Program Structure','Basic structure of programming languages; Compilers and Interpreters; Using library functions for input/ output;','3','2','3',NULL),
('EC2010','2','Data types and expressions','Variables/ Identifiers; Basic data types; Constants, Formatting and naming conventions; operators, expressions, Literals; Type conversions; Arrays','4','2','2',NULL),
('EC2010','3','Controlling Program Flow','Decisions constructs; Loop constructs; break and continue','4','2','3',NULL),
('EC2010','4','Program Building Blocks','Methods/ Functions; Elements of methods; Function calls and return; Arguments and parameters; Recursion ','5','2','6','6'),
('EC2010','5','Pointers and Memory Handling','Introduction to pointers; Arguments passing by value and reference','3','2','3',NULL),
('EC2010','6','Introduction to Object-Oriented Programming','Introduction to Objected oriented concept; Classes and Objects','5','2','3',NULL),
('EC2010','7','Graphical User Interface Designing','Introduction to GUI Libraries','2',NULL,'3','9'),
('ID1010','1','Fundamentals of Engineering Drawing',NULL,'1',NULL,NULL,NULL),
('ID1010','2','Drawing in First and Third Angle Orthographic Projections, International Standards in Engineering Drawing Practice',NULL,'1',NULL,'10',NULL),
('ID1010','3','Mechanical, Architectural and Household Wiring Drawing',NULL,'3',NULL,'30',NULL),
('ID1010','4','Engineering Graphics',NULL,'2',NULL,'12',NULL),
('ID1010','5','Freehand Sketching',NULL,NULL,NULL,'10',NULL),
('ID1010','6','Fundamental Knowledge in Computer Aided Drawing',NULL,'2',NULL,'10',NULL),
('CE2021','1',"Laws of Nature and Fundamental Concepts","Forces and Newton's Laws; static equilibrium of rigid body: forcemoment systems, reduction of system of forces, equilibrium in two dimensions.",'2','2',NULL,NULL),
('CE2021','2','Centre of Gravity and Centroid','Inertial properties: first moment and centroid, second moment and moment of inertia, polar moment of inertia, parallel and perpendicular axis theorems, principal axes and principal moment of inertia, moment of inertia of composite bodies','2','2',NULL,NULL),
('CE2021','3','Analysis of Simple Structures','Classification of structural elements: truss, beam and cables; Free body diagram; internal forces; Analysis of trusses: method of joints, method of sections, compound and space truss; Analysis of beams: coordinate system for internal forces and moments, sign convention; Straight beams: diagrams for internal forces and moments; relationship between distributed loads, shear forces and bending moments; Intuitive drawing of bending moment and shear force diagrams; Statically determinate and indeterminate structures.','7','4','6',NULL),
('CE2021','4','Work and Energy Theorems','Work done by forces and couples; virtual displacements and virtual work; strain energy and potential energy; energy principles; unit load method applied to plane trusses and beams. ','5',NULL,NULL,'3'),
('CE2021','5','Static Friction','Friction between solid bodies: stick-slip effect, angle of friction, wedges; Belt and rope friction: V-shaped belts, and numerical problems.','10','2','3',NULL),
('CE2021','6','Fluid Pressure','Fluid pressure: fluids in equilibrium; pressure variation in constant and variable density media including atmosphere; pressure gauges; measurement of pressure; pressure head ','5',NULL,'3',NULL),
('CE2021','7','Fluid Statics','Fluid statics: forces on plane surfaces; forces on curved surfaces; buoyancy and floatation; stability of floating bodies; Compressible fluids; Hoop or circumferential tension; Hydrostatic forces on Dams. ','7','2','3',NULL),
('EC3011','1','Applications of Diodes','Revision of p-n junction, I-V characteristics, Half wave and full wave rectifiers, diode clamper and limiter circuits, Zener diodes, regulators, protection circuits, logic gate, voltage multipliers, photovoltaics and photo diodes. Note: semiconductor p-n junction is covered in another course (Material Science) ','2','2',NULL,NULL),
('EC3011','2','BJTs and MOSFETs','Transistor Configurations (Common Emitter, Common Collector, etc), Biasing circuit and DC analysis of transistor circuits; Small signal analysis; Operation and characterization; Transistor as switch, Transistor amplifier design, cascading transistor amplifiers. MOSFET types , and configurations and applications as switches and amplifiers, MOSFET types , and configurations and applications as switches and amplifiers','2','2',NULL,NULL),
('EC3011','3','Operational Amplifier','Ideal op-amp; Characteristics of op-amp; Simple op-amp circuits (inverting and non-inverting amplifier, buffer, comparator, integrator and differentiator) ','7','4','6',NULL),
('EC3011','4','RC, RL Circuit Transient Behavior','Step response and parameters; RC, RL transient and steady state first order and second order circuit analysis (Laplace transformation based).','5','2',NULL,NULL),
('EC3011','5','Implementation (Soldering) of an Amplifier Circuit (op amp)',NULL,'2','2',NULL,NULL),
('EC3011','7','Introduction to Motor Control','Simple DC, Servo and Stepper motor controllers with PWM using 555 timer simulations. ','10','2','3',NULL),
('EC3011','6','DAQ','Introduction to simple sensor, properties of sensors and Thermal, strain and light sensors and their applications. Digital and Analog signals, Introduction to frequency domain representation of signals, Ideal Filters (Low-pass, high-pass, band-pass, notch), Nyquist theorem, sampling, quantization, noise, anti-aliasing filtering, PCM Modulation. Introduction to PC based DAQ, ADC types, DAC types, Multiplexing, USB Serial Port, implementing a simple PC based sensor data acquisition system and real time data plot with Matlab ','2',NULL,'3',NULL),
('EC5010','1','Digital Signals and Digital Systems','Digital signals, Sampling and reconstruction, Aliasing, Quantization, Reconstruction filter, Ideal D/A conversion, digital systems, classification of digital systems, LTI systems, impulse response and stability of LTI systems, FIR and IIR systems, convolution.','4','1',NULL,NULL),
('EC5010','2','Z-Transform','Definition of z-transform, Properties of z-transform, inverse z-transform, applications of z- transform to estimation of frequency response, pole-zero diagram, second order resonant systems','7','1','3',NULL),
('EC5010','3','Digital Filter Design','Selection criteria of FIR and IIR, IIR filter design methods (bilinear, impulse invariant), digital to digital transforms, FIR filter design methods (windowing and frequency sampling) ','5','1','3','2'),
('EC5010','4','Discrete Fourier Transform and Discrete Time Fourier Transform',"Discrete Fourier Transform and Discrete Time Fourier Transform, their inverse transforms, Parseval's theorem, effect of zero padding.",'5','2',NULL,NULL),
('EC5010','5','Digital Filters','Recursive and non-recursive filters, digital filter realizations, magnitude and phase response, all pass filters, oscillators, notch filters, second order resonance filter and stability','2','2',NULL,NULL),
('EC5010','6','Multi rate signal processing','Up sampling and down sampling. Time domain and frequency domain interpretation of up/down sampling, conversion by non-integer factor. Modulation.','10','2','3',NULL),
('EC5010','7','Introduction to time-frequency analysis','Short time Fourier transform and its application, introduction to wavelet transform.','4',NULL,NULL,NULL),
('EC5010','8','Independent learning and implementation assignment','Small task on speech, image or biomedical signal processing',NULL,NULL,NULL,'13'),
('EC4040','1','Introduction to digital logic','Digital signals, Digital Logic, Number Systems, Computers and Digital Systems, TTL/ CMOS, Purpose and role of digital logic in computer engineering, CMOS logic circuits ','3',NULL,NULL,NULL),
('EC4040','2','Representation of Linear Time invariant Systems','Representation of signals in-terms of impulses, Impulse Response, The convolution integral, Representation of LTI systems with differential equations and their zero-state and zero-input responses','4',NULL,NULL,NULL),
('EC4040','3','Fourier Analysis of Continuous time Signals and Systems','Fourier Transform, Frequency representation of signals, Spectrum of signals, Properties of Fourier Transform, Application to Modulation.','5','1',NULL,'4'),
('EC4040','4','Analysis of LTI System using Laplace transform','Analysis and characterization of LTI systems (RLC circuits, etc) using Laplace transform (zero-state, zero-input response, transfer function, Impulse and step responses), Pole-zero representations of Systems, BIBO stability of systems. Note: Laplace transform and application to solve differential equation is already introduced through another subject MC3010','5','1','3','4'),
('EC4040','5','Frequency Response','Frequency response of Systems (RLC circuits, etc), Bode plots, realizations of systems.','5',NULL,'3',NULL),
('EC4040','6','Resonant Circuits','Series resonance, Resonance Frequency, Resonance Curves, Variation of current and voltage distribution in series RLC circuit with frequency, Selectivity, "Q" factor, Half power frequencies, Bandwidth, Parallel resonance, Two branch parallel circuits, Resonance frequency, Q Factor, series to parallel conversion','4','2','3',NULL),
('EC4040','7','Introduction to Two Port Networks','Impedance and Admittance, Hybrid parameters, inverse hybrid parameters, Transmission and Inverse Transmission parameters.','2',NULL,NULL,NULL),
('EC4040','8','Analogue Filter Design','Analogue filters, types of analogue filters and properties, Basic filter design, Butterworth filter design, Low pass filter to high pass, band pass filter and band stop transformations, Realization of transfer function into opamp circuits.','7',NULL,'3','4'),
('MC4010','1','Functions, relations and sets','Basic terminology, operations, practical examples, basic counting principles, diagonalization and pigeonhole principle','7','4',NULL,NULL),
('MC4010','2','Basic logic','Propositional and predicate logic','4','6',NULL,NULL),
('MC4010','3','Proof techniques','Basic structures, recursion, structural induction','7','6',NULL,NULL),
('MC4010','4','Basics of counting','permutations and combination, Master theorem, recurrence equations ','7','6',NULL,NULL),
('MC4010','5','Discrete Probability','Monte Carlo method, case analysis of algorithms, and hashing ','5','6',NULL,NULL);


INSERT INTO EVALUATION_DETAILS VALUES
('MC1010','Assignment','10'),
('MC1010','Student Presentation','5'),
('MC1010','Oral Examination','5'),
('MC1010','Mid Semester Assessment','30'),
('MC1010','End Semester Examination','50'),
('ID1021','Assignment','5'),
('ID1021','Quiz','5'),
('ID1021','Lab Report / Field Report','30'),
('ID1021','Mid Semester Assessment','20'),
('ID1021','End Semester Examination','40'),
('EC2010','Assignment','20'),
('EC2010','Lab Report / Field Report','10'),
('EC2010','Mid Semester Assessment','20'),
('EC2010','End Semester Examination','50'),
('ID1010','Assignment','10'),
('ID1010','Lab Report / Field Report','20'),
('ID1010','Mid Semester Assessment','30'),
('ID1010','End Semester Examination','40'),
('CE2021','Tutorials + Assignment','10'),
('CE2021','Practical (Lab Report / Field Report)','10'),
('CE2021','Mid Semester Assessment','30'),
('CE2021','End Semester Examination','50'),
('EC3011','Assignment','15'),
('EC3011','Lab Report / Field Report','20'),
('EC3011','Mid Semester Assessment','15'),
('EC3011','End Semester Examination','50'),
('EC4040','Assignment','20'),
('EC4040','Lab Report / Field Report','15'),
('EC4040','Mid Semester Assessment','15'),
('EC4040','End Semester Examination','50'),
('EC5010','Assignment','20'),
('EC5010','Lab Report / Field Report','15'),
('EC5010','Mid Semester Assessment','15'),
('EC5010','End Semester Examination','50'),
('MC4010','Assignment','10'),
('MC4010','Mid Semester Assessment','30'),
('MC4010','End Semester Examination','60');

INSERT INTO COURSE_LECTURERS VALUES
('MC1010','333445556'),
('ID1021','987987987'),
('EC2010','987987988'),
('EC2010','666884444'),
('ID1010','987987987'),
('CE2021','987654321'),
('EC3011','333445555'),
('EC3011','987654322'),
('EC4040','987654322'),
('EC5010','123456789'),
('MC4010','333445556');

INSERT INTO OFFERING_COURSE VALUES
('E18','1','MC1010'),
('E18','1','ID1010'),
('E18','1','ID1021'),
('E18','2','EC2010'),
('E18','2','ID1010'),
('E18','3','EC3011'),
('E18','4','EC4040'),
('E18','4','EC4040'),
('E18','5','EC5010'),
('E20','1','MC1010'),
('E20','1','ID1010'),
('E20','1','ID1021'),
('E20','2','EC2010'),
('E20','2','ID1010');