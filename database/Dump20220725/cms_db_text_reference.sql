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
-- Table structure for table `text_reference`
--

DROP TABLE IF EXISTS `text_reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `text_reference` (
  `course_code` varchar(6) NOT NULL,
  `text_referance` varchar(255) NOT NULL,
  PRIMARY KEY (`course_code`,`text_referance`),
  CONSTRAINT `text_reference_to_course` FOREIGN KEY (`course_code`) REFERENCES `course` (`course_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `text_reference`
--

LOCK TABLES `text_reference` WRITE;
/*!40000 ALTER TABLE `text_reference` DISABLE KEYS */;
INSERT INTO `text_reference` VALUES ('EC4060',' Computer Networking: A Top-Down Approach, 6th Edition, James F. Kurose, Keith W. Ross'),('EC4060','Computer Networks (5th Edition) 5th Edition, Andrew S. Tanenbaum, David J. Wetherall.'),('EC6110',' S. Tanenbaum and H. Bos, “Modern Operating Systems”, 4th Edition, 2014'),('EC6110','Silberschatz, P. B. Galvin, and G. Gagne, “Operating System Concepts”, 9th Edition, 2013'),('EC6110','William Stallings, Operating Systems: Internals and Design Principles, 8th Edition, 2014'),('EC9640','Peter Norvig and Stuart J. Russell, “Artificial Intelligence: A Modern Approach”,3rd edition.'),('EE4050','Microelectronics – Milmann and Grabel'),('EE4050','Microelectronics circuits 6th edition – Sedra and Smith.'),('EE4050','Opamps for everyone Mancini Ti/MIT 2002.'),('EE6030','H. Saadat, “Power system Analysis”, McGraw-Hill Book Company, 2002.'),('EE6030','J.J. Grainger, W.D. Stevenson, “Power System Analysis”, McGraw-Hill, 1994'),('EE6090','Siegwart, Roland, et al. Introduction to autonomous mobile robots. MIT press, 2011.'),('EE6090','Spong, Mark W., Seth Hutchinson, and MathukumalliVidyasagar. Robot modeling and control. Vol. 3. New York: Wiley, 2006.'),('EE6100','Wireless Communications by Adrea Goldsmith, 1st Edition, Cambridge University Press, 2005.'),('EE6100','Wireless Communications by Andreas F. Molisch, 2nd Edition, John Wiley & Sons, Inc., 2010'),('EE6100','Wireless Communications: Principles and Practice by Theodore S. Rappaport, 2nd Edition, Prentice Hall, 2002.'),('EE9100','Fiber-Optic Communication Systems, 4th Edition, Govind P. Agrawal'),('EE9100','Optical Network Design and Planning (Optical Networks) 2nd ed. 2014 Editionby Jane M. Simmons');
/*!40000 ALTER TABLE `text_reference` ENABLE KEYS */;
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
