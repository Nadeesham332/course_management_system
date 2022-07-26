-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cms_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `course_code` varchar(6) NOT NULL,
  `parent_course` varchar(6) DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `state` tinyint DEFAULT NULL,
  `core_elective` tinyint DEFAULT NULL,
  `credits` tinyint DEFAULT NULL,
  `learning_outcomes` text,
  PRIMARY KEY (`course_code`),
  KEY `course_to_state` (`state`),
  CONSTRAINT `course_to_state` FOREIGN KEY (`state`) REFERENCES `state` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('EC4060','NULL','Computer and Data Networks',1,1,3,'explain the different types of computer networks and the concepts behind them; identify the different types of network topologies and protocols; describe different networking protocols at different levels of protocol stack and relevant standards that define such protocols; explain the functions of layers of the OSI model and TCP/IP; design a network based on given requirements specification'),('EC6020','NULL','Embedded Systems Design',1,1,3,' explain embedded systems, in terms of both software and hardware; demonstrate in depth knowledge of embedded system design and design methodologies; demonstrate in depth understanding of core issues and aspects of interfacing embedded systems to different peripherals, different protocols to enable this interfacing and write software programs to interface with peripheral devices; demonstrate embedded real-time system operation and main components; explain networked embedded system requirements and constraints; design a microcontroller based system to satisfy given design specifications and document the design'),('EC6060','NULL','Software Engineering ',1,1,3,' Explain on selecting process and methodology to a particular project; identify non-functional requirements and ensure a design meets them; develop use-cases to elucidate functional requirements; design models in the unified modelling language using modelling tools; use OO language idioms and design patterns that enhances system modularity and maintainability; Design automate testing and refactoring into the project lifecycle; Implement a complete Software Engineering project'),('EC6110','NULL','Operating Systems',1,1,3,'describe the functionalities and the applications of operating systems; explain the problems associated with inter-processor communication (IPC) and various solutions for them; explain memory management techniques and virtual memory; describe deadlocks and how to handle them; describe various file and I/O systems and their functionalities; discuss the design issues of modern operating systems'),('EC9500','NULL','Advanced Computer Architecture',1,0,2,' define design decision about cache for performance; explainthe use of Instruction Level Parallelism (ILP) in improving computing performance and its limitations; comprehend the use of Data Level Parallelism (DLP) in improving computing performance; make design decisions on using ILP and DLP for improving performance; explain the dependability issues in computer architecture; design a special purpose processor using HDL.'),('EC9630','NULL','Machine Learning',1,0,2,'Able to demonstrate clear knowledge of the principles of statistical pattern recognition.; Able to apply simple classification models to applied problems in machine learning and be able to quantify their performances.; Systematically apply Machine Learning methods to a new problem and quantify uncertainty in the results.; Apply more sophisticated machine learning modes such as Artificial Neural Networks and Support Vector Machines to real datasets and be able to make judicious choices among the various methods available; Able to appreciate the importance variable selection in high dimensional problems that are known to suffer from the curse of dimensionality'),('EC9640','NULL','Artificial Intelligence',1,0,2,' explain the fundamental principles of Artificial Intelligence; Apply the basic principles, models, and algorithms of Artificial Intelligence to solve problems; Demonstrate the ability to implement Artificial Intelligence based solution.'),('EE4050','NULL','Electronic Circuits and Devices',1,1,3,'Design advanced OP AMP, BJTs and FETs based analogy and digital circuits; Design feedback based amplifiers, oscillators and waveform Generators; Simulate Electrical and thermal Simulations of advanced circuits and PCB designs;'),('EE6030','NULL','Power Systems',1,1,3,' Demonstrate load flow study for a complex electricity network using exact methods and approximate methods; Analyze unbalanced network operations and short circuit faults using symmetrical components; Design protection systems for electricity network; Distinguish stability criteria and control schemes for synchronous generators; Develop economic dispatch solution'),('EE6080','NULL','Electrical and Electronic Engineering Research Project I ',1,1,3,' Assess research articles critically; Identify gaps in existing researches; Formulate research problem based on identified research gaps; Develop comprehensive research proposal;'),('EE6090','NULL','Robotics and Automation',1,1,3,'Analyse models for various types of robot arm manipulators within the calculated workspace; Explain fundamentals of machine vision and image processing techniques; Construct programs for robot control boards using various type of sensors and actuators for localization and control of the robot; Create a simple to medium complexity PLC program'),('EE6100','NULL','Wireless and Mobile Communications ',1,1,3,' Demonstrate understanding in propagation models and its performance in wireless channel models.; Identify countermeasures against fading.; Analyse techniques used to mitigate Inter Symbol Interference (ISI) effects.; Explain multiuser systems.; Design cellular systems using frequency sharing techniques.'),('EE9100','NULL','Optical Communications',1,0,2,' Demonstrate the understanding on functionality of each of components in fiber-optic communication system; Demonstrate the understanding on properties of optical fibre that affect performance of a communication link; Demonstrate the understanding of optical system parameters and amplifiers; Design a basic optical communications link; Explain state of the art tools used for design and analysis of optical communication systems;');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-26 20:53:10
