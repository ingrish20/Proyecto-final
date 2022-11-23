
LOCK TABLES `valoracionesproductos` WRITE;
/*!40000 ALTER TABLE `valoracionesproductos` DISABLE KEYS */;
INSERT INTO `tiendaonline`.`valoracionesproductos`(`IdProducto`, `ValoracionPromedio`) VALUES (1,4),(2,5);
/*!40000 ALTER TABLE `valoracionesproductos` ENABLE KEYS */;
UNLOCK TABLES;
