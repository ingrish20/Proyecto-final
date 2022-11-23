
LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `tiendaonline`.`usuarios` (`Usuario`, `Clave`, `Nombre`, `FechaRegistro`, `Activo`) VALUES ('dcampos','54321','Diana Campos','2022-11-21 03:01:09',1), ('test','54321','Usuario Pruebas','2022-11-21 03:01:35',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

