
LOCK TABLES `estadopedido` WRITE;
/*!40000 ALTER TABLE `estadopedido` DISABLE KEYS */;
INSERT INTO `tiendaonline`.`estadopedido`( `Estado`) VALUES ('Orden Recibida'),('Orden en Camino'),('Orden Entregada');
/*!40000 ALTER TABLE `estadopedido` ENABLE KEYS */;
UNLOCK TABLES;
