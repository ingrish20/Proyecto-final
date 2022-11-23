
LOCK TABLES `pedidosdetalle` WRITE;
/*!40000 ALTER TABLE `pedidosdetalle` DISABLE KEYS */;
INSERT INTO `tiendaonline`.`pedidosdetalle`(`IdPedido`, `IdProducto`, `Cantidad`, `PrecioUnitario`) VALUES (1,2,1,50),(2,2,1,50),(1,1,1,20);
/*!40000 ALTER TABLE `pedidosdetalle` ENABLE KEYS */;
UNLOCK TABLES;

