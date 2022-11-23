
LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `tiendaonline`.`pedidos`(`IdUsuario`, `Fecha`, `Total`, `IdEstadoPedido`) VALUES (1,'2022-11-21 03:29:21',50,1),(2,'2022-11-21 04:09:00',70,1);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

