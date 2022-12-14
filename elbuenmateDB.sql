-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: elbuenmate
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `tb_productos`
--

DROP TABLE IF EXISTS `tb_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `detail` varchar(500) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `category` varchar(20) NOT NULL,
  `isnew` tinyint NOT NULL,
  `issale` tinyint NOT NULL,
  `imgsrc` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_productos`
--

LOCK TABLES `tb_productos` WRITE;
/*!40000 ALTER TABLE `tb_productos` DISABLE KEYS */;
INSERT INTO `tb_productos` VALUES (1,'Termo Stanley Termo Clásico 1.4 LTS','Este termo Stanley fue pensado para acompañarte a través de los años, ya que durabilidad y estilo son las palabras que definen a la marca. Gracias a su resistencia, obtendrás un gran rendimiento térmico y garantizarás que el líquido permanezca con la temperatura ideal por más tiempo.',18999.00,'Termos',1,0,'images/shopProducts/1.png',NULL,NULL),(2,'Termo Lumilagro Acero Inoxidable','Termo de acero inoxidable. Capacidad 1L. Su doble pared de acero inoxidable y el proceso de vacío exclusivo garantiza una alta performance del producto y asegura el mantenimiento de temperatura por muchas horas.',9370.00,'Termos',0,0,'images/shopProducts/2.png',NULL,NULL),(3,'Mate Uruguayo Camionero Boca Ancha','Mate Camionero hechos en Cuero Vacuno de 4mm, excelente calidad y durabilidad.',4200.00,'Mates',0,0,'images/shopProducts/3.png',NULL,NULL),(4,'Bombilla Pico De Loro De Alpaca','BOMBILLA PICO DE LORO DE ALPACA BRASILERA BI COLOR. FABRICADA EN PLATEADO Y DORADO. NO SE TAPA. EXCELENTE CALIDAD.',1059.00,'Bombillas',0,0,'images/shopProducts/4.png',NULL,NULL),(5,'Yerba Mate Playadito 1000grs Suave Sin Tacc','Elaborada con palo y libre de gluten, se caracteriza por su delicioso sabor suave. Recomendado para quienes toman mate con frecuencia y prefieren sabores suaves y duraderos.',695.00,'Yerba',0,0,'images/shopProducts/5.png',NULL,NULL),(6,'Yerba Canarias Para Mate Sabor Tradicional 1 Kg','Se compone principalmente de polvo con hojas muy pequeñas y cortadas, sin tallos (sin palo). Su sabor es fuerte y amargo, y su textura casi cremosa.',1000.00,'Yerba',0,0,'images/shopProducts/6.png',NULL,NULL);
/*!40000 ALTER TABLE `tb_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuarios`
--

DROP TABLE IF EXISTS `tb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(250) NOT NULL,
  `admin` tinyint NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuarios`
--

LOCK TABLES `tb_usuarios` WRITE;
/*!40000 ALTER TABLE `tb_usuarios` DISABLE KEYS */;
INSERT INTO `tb_usuarios` VALUES (1,'prueba','prueba@gmail.com','$2b$10$j.5V8pcmz.OV2evike8QDuZ6v7M4UHKaNP95NLZeGnZ2fe5tmny6G',0,NULL,NULL),(2,'prueba2','prueba2@gmail.com','$2b$10$PQL78LQanEKtU9d4G9u3nO2Iw1NfWBZ1JGl/DffbnAipUJ6TyG5FG',0,'2022-11-29','2022-11-29'),(3,'prueba3','prueba3@gmail.com','$2b$10$YgTZpL.4bDNcTC4kRAoROemGLVMZK2JqDWYqglU0cFXVDTINmzYvS',0,'2022-11-29','2022-11-29'),(5,'administrador','administrador@gmail.com','$2b$10$wnyNyPVPUmTFZkNiDmz5ROoxmpGro5hC/qfebwL6JKWi6l4e3c3UW',1,'2022-12-07','2022-12-07');
/*!40000 ALTER TABLE `tb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-28 15:48:35
