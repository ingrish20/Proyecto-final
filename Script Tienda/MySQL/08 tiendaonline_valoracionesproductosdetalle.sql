
LOCK TABLES `valoracionesproductosdetalle` WRITE;
/*!40000 ALTER TABLE `valoracionesproductosdetalle` DISABLE KEYS */;
INSERT INTO `tiendaonline`.`valoracionesproductosdetalle` (`IdValoracionProducto`, `Fecha`, `Valoracion`, `IdUsuario`, `Comentario`) VALUES (1,'2022-11-21 04:24:24',4.50,2,NULL),(2,'2022-11-21 04:24:41',5.00,2,'Me gusto el producto');
/*!40000 ALTER TABLE `valoracionesproductosdetalle` ENABLE KEYS */;
UNLOCK TABLES;

