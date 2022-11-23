
LOCK TABLES `tipoproductos` WRITE;
/*!40000 ALTER TABLE `tipoproductos` DISABLE KEYS */;

INSERT INTO `tiendaonline`.`tipoproductos` (`TipoProducto`, `UrlImagenTipo`, `Activo`) VALUES ('LIBROS','https://gifs.eco.br/wp-content/uploads/2022/08/gifs-de-livros-29.gif',1),('VIDEO JUEGOS','https://i.gifer.com/origin/05/05d659e459c263e604e7f23619bc2266.gif',1);

/*!40000 ALTER TABLE `tipoproductos` ENABLE KEYS */;
UNLOCK TABLES;
