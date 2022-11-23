
LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `tiendaonline`.`productos`(`NombreProducto`, `DescripcionProducto`, `PrecioUnitario`, `UrlImagen`, `UrlImagenAgotado`, `Existencias`, `Activo`, `IdTipoProducto`) VALUES ('HARRY POTTER Y LA PIEDRA FILOSOFAL | J.K. ROWLING','Fecha de publicación: 26 de junio de 1997',20,'https://kbimages1-a.akamaihd.net/909b88f6-425d-4535-9925-8e9bcfa90f9b/353/569/90/False/harry-potter-y-la-piedra-filosofal-1.jpg','http://pckernelshop.com/wp-content/uploads/2016/07/agotado.png',10,1,1),('MORTAL KOMBAT 11','Fecha de estreno inicial: 23 de abril de 2019',50,'https://1000marcas.net/wp-content/uploads/2020/11/Mortal-Kombat-logo-497x500.png','https://1000marcas.net/wp-content/uploads/2020/11/Mortal-Kombat-logo-497x500.png',25,1,2),('PRODUCTO DE PRUEBA','Fecha de publicación: 26 de junio de 1997',20,'https://kbimages1-a.akamaihd.net/909b88f6-425d-4535-9925-8e9bcfa90f9b/353/569/90/False/harry-potter-y-la-piedra-filosofal-1.jpg','http://pckernelshop.com/wp-content/uploads/2016/07/agotado.png',10,1,1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

