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
-- Table structure for table `evaluation_details`
--

DROP TABLE IF EXISTS `evaluation_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluation_details` (
  `course_code` varchar(6) NOT NULL,
  `assessment_method` varchar(32) NOT NULL,
  `percentage` tinyint DEFAULT NULL,
  PRIMARY KEY (`course_code`,`assessment_method`),
  CONSTRAINT `evaluation_details_to_course` FOREIGN KEY (`course_code`) REFERENCES `course` (`course_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluation_details`
--

LOCK TABLES `evaluation_details` WRITE;
/*!40000 ALTER TABLE `evaluation_details` DISABLE KEYS */;
INSERT INTO `evaluation_details` VALUES ('EC4060','Assignment',20),('EC4060','End Semester Examination',50),('EC4060','Lab / Field Work',10),('EC4060','Mid Semester Assessment',20),('EC6020','Assignment/Project',30),('EC6020','End Semester Examination',40),('EC6020','Lab Report / Field Report',10),('EC6020','Mid Semester Assessment',20),('EC6060','Assignment (project milestones)',15),('EC6060','End Semester Assessment ',40),('EC6060','Lab Report/Field Report ',15),('EC6060','Mid Semester Assessment',10),('EC6060','Quiz',10),('EC6060','Student Presentation',10),('EC6110','Assignment',15),('EC6110','End Semester Examination',50),('EC6110','Lab / Field Work',10),('EC6110','Mid Semester Assessment',25),('EC9500',' End Semester Examination',40),('EC9500','Assignment (Project)',30),('EC9500','Mid Semester Assessment',20),('EC9500','Quiz/Tutorial',10),('EC9630','Assignment',10),('EC9630','End semester examination ',60),('EC9630','Lab report',10),('EC9630','Mid semester assessment',20),('EC9640','Assignment',25),('EC9640','End Semester Assessment',40),('EC9640','Lab/Field Work',5),('EC9640','Mid Semester Assessment',20),('EC9640','Quiz',10),('EE4050','Assignment',15),('EE4050','End Semester Examination',50),('EE4050','Lab / Field Work',20),('EE4050','Mid Semester Assessment',15),('EE6030','Assignment',10),('EE6030','End Semester Examination',50),('EE6030','Lab / Field Work',20),('EE6030','Mid Semester Assessment',20),('EE6080','Annotated Bibliography',15),('EE6080','End Semester Assessment',50),('EE6080','Mid Semester Assessment',35),('EE6090',' End Semester Examination',30),('EE6090','Assignment',30),('EE6090','Lab Report / Field Report',20),('EE6090','Mid Semester Assessment',20),('EE6100','Assignment',10),('EE6100','End Semester Examination',50),('EE6100','Lab Report / Field Report',15),('EE6100','Mid Semester Assessment',25),('EE9100','Assignment',10),('EE9100','End Semester Examination',50),('EE9100','Lab Report / Field Report ',20),('EE9100','Mid Semester Assessment',20);
/*!40000 ALTER TABLE `evaluation_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-25 17:50:31
