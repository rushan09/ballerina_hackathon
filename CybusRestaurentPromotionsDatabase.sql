CREATE DATABASE  IF NOT EXISTS `restaurent_promotions` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `restaurent_promotions`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurent_promotions
-- ------------------------------------------------------
-- Server version	5.6.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cybus_promotions_mock`
--

DROP TABLE IF EXISTS `cybus_promotions_mock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cybus_promotions_mock` (
  `restaurant_id` varchar(45) NOT NULL,
  `restaurant_name` varchar(45) DEFAULT NULL,
  `offer_name` varchar(45) DEFAULT NULL,
  `offer_period` varchar(45) DEFAULT NULL,
  `description` varchar(90) DEFAULT NULL,
  `offer_price` varchar(45) DEFAULT NULL,
  `valid_for` varchar(45) DEFAULT NULL,
  `nearest` varchar(1) NOT NULL,
  PRIMARY KEY (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cybus_promotions_mock`
--

LOCK TABLES `cybus_promotions_mock` WRITE;
/*!40000 ALTER TABLE `cybus_promotions_mock` DISABLE KEYS */;
INSERT INTO `cybus_promotions_mock` VALUES ('456','a','a','a','a','a','a','Y'),('5800385','KFC','Buy 1 get 1 free','14th July','Buy a 12 pics chicken bucket and get 8 pics one free','only Rs. 2640','Dine in, takeaway, delivery','Y'),('5800465','Pizza Hut','Jolly July','1st to 31st July','Get 1 grand dipper pizza + 1 garlic bread + 1 jumbo coke for Rs. 1800','save up to Rs. 365','Online','N');
/*!40000 ALTER TABLE `cybus_promotions_mock` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-22 18:05:15
