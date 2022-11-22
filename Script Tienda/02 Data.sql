USE [TiendaOnline]
GO
SET IDENTITY_INSERT [dbo].[TipoProductos] ON 
GO
INSERT [dbo].[TipoProductos] ([IdTipoProducto], [TipoProducto], [UrlImagenTipo], [Activo]) VALUES (1, N'LIBROS', N'https://gifs.eco.br/wp-content/uploads/2022/08/gifs-de-livros-29.gif', 1)
GO
INSERT [dbo].[TipoProductos] ([IdTipoProducto], [TipoProducto], [UrlImagenTipo], [Activo]) VALUES (2, N'VIDEO JUEGOS', N'https://i.gifer.com/origin/05/05d659e459c263e604e7f23619bc2266.gif', 1)
GO
SET IDENTITY_INSERT [dbo].[TipoProductos] OFF
GO
SET IDENTITY_INSERT [dbo].[Productos] ON 
GO
INSERT [dbo].[Productos] ([IdProducto], [NombreProducto], [DescripcionProducto], [PrecioUnitario], [UrlImagen], [UrlImagenAgotado], [Existencias], [Activo], [IdTipoProducto]) VALUES (1, N'HARRY POTTER Y LA PIEDRA FILOSOFAL | J.K. ROWLING', N'Fecha de publicación: 26 de junio de 1997', CAST(20 AS Decimal(18, 0)), N'https://kbimages1-a.akamaihd.net/909b88f6-425d-4535-9925-8e9bcfa90f9b/353/569/90/False/harry-potter-y-la-piedra-filosofal-1.jpg', N'http://pckernelshop.com/wp-content/uploads/2016/07/agotado.png', 10, 1, 1)
GO
INSERT [dbo].[Productos] ([IdProducto], [NombreProducto], [DescripcionProducto], [PrecioUnitario], [UrlImagen], [UrlImagenAgotado], [Existencias], [Activo], [IdTipoProducto]) VALUES (4, N'MORTAL KOMBAT 11', N'Fecha de estreno inicial: 23 de abril de 2019', CAST(50 AS Decimal(18, 0)), N'https://1000marcas.net/wp-content/uploads/2020/11/Mortal-Kombat-logo-497x500.png', N'https://1000marcas.net/wp-content/uploads/2020/11/Mortal-Kombat-logo-497x500.png', 25, 1, 2)
GO
INSERT [dbo].[Productos] ([IdProducto], [NombreProducto], [DescripcionProducto], [PrecioUnitario], [UrlImagen], [UrlImagenAgotado], [Existencias], [Activo], [IdTipoProducto]) VALUES (5, N'PRODUCTO DE PRUEBA', N'Fecha de publicación: 26 de junio de 1997', CAST(20 AS Decimal(18, 0)), N'https://kbimages1-a.akamaihd.net/909b88f6-425d-4535-9925-8e9bcfa90f9b/353/569/90/False/harry-potter-y-la-piedra-filosofal-1.jpg', N'http://pckernelshop.com/wp-content/uploads/2016/07/agotado.png', 10, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[Productos] OFF
GO
SET IDENTITY_INSERT [dbo].[ValoracionesProductos] ON 
GO
INSERT [dbo].[ValoracionesProductos] ([IdValoracionProducto], [IdProducto], [ValoracionPromedio]) VALUES (1, 1, CAST(4 AS Decimal(18, 0)))
GO
INSERT [dbo].[ValoracionesProductos] ([IdValoracionProducto], [IdProducto], [ValoracionPromedio]) VALUES (3, 4, CAST(5 AS Decimal(18, 0)))
GO
SET IDENTITY_INSERT [dbo].[ValoracionesProductos] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios] ON 
GO
INSERT [dbo].[Usuarios] ([IdUsuario], [Usuario], [Clave], [Nombre], [FechaRegistro], [Activo]) VALUES (2, N'dcampos', N'54321', N'Diana Campos', CAST(N'2022-11-20T21:01:08.843' AS DateTime), 1)
GO
INSERT [dbo].[Usuarios] ([IdUsuario], [Usuario], [Clave], [Nombre], [FechaRegistro], [Activo]) VALUES (3, N'test', N'54321', N'Usuario Pruebas', CAST(N'2022-11-20T21:01:35.267' AS DateTime), 1)
GO
SET IDENTITY_INSERT [dbo].[Usuarios] OFF
GO
SET IDENTITY_INSERT [dbo].[ValoracionesProductosDetalle] ON 
GO
INSERT [dbo].[ValoracionesProductosDetalle] ([IdDetalleValoracionProducto], [IdValoracionProducto], [Fecha], [Valoracion], [IdUsuario], [Comentario]) VALUES (3, 1, CAST(N'2022-11-20T22:24:24.463' AS DateTime), CAST(4.50 AS Decimal(18, 2)), 2, NULL)
GO
INSERT [dbo].[ValoracionesProductosDetalle] ([IdDetalleValoracionProducto], [IdValoracionProducto], [Fecha], [Valoracion], [IdUsuario], [Comentario]) VALUES (4, 3, CAST(N'2022-11-20T22:24:40.900' AS DateTime), CAST(5.00 AS Decimal(18, 2)), 2, N'Me gusto el producto')
GO
SET IDENTITY_INSERT [dbo].[ValoracionesProductosDetalle] OFF
GO
SET IDENTITY_INSERT [dbo].[EstadoPedido] ON 
GO
INSERT [dbo].[EstadoPedido] ([IdEstadoPedido], [Estado]) VALUES (1, N'Orden Recibida')
GO
INSERT [dbo].[EstadoPedido] ([IdEstadoPedido], [Estado]) VALUES (2, N'Orden en Camino')
GO
INSERT [dbo].[EstadoPedido] ([IdEstadoPedido], [Estado]) VALUES (3, N'Orden Entregada')
GO
SET IDENTITY_INSERT [dbo].[EstadoPedido] OFF
GO
SET IDENTITY_INSERT [dbo].[Pedidos] ON 
GO
INSERT [dbo].[Pedidos] ([IdPedido], [IdUsuario], [Fecha], [Total], [IdEstadoPedido]) VALUES (4, 2, CAST(N'2022-11-20T21:29:21.220' AS DateTime), CAST(50 AS Decimal(18, 0)), 1)
GO
INSERT [dbo].[Pedidos] ([IdPedido], [IdUsuario], [Fecha], [Total], [IdEstadoPedido]) VALUES (5, 3, CAST(N'2022-11-20T22:09:00.387' AS DateTime), CAST(70 AS Decimal(18, 0)), 1)
GO
SET IDENTITY_INSERT [dbo].[Pedidos] OFF
GO
SET IDENTITY_INSERT [dbo].[PedidosDetalle] ON 
GO
INSERT [dbo].[PedidosDetalle] ([IdDetallePedido], [IdPedido], [IdProducto], [Cantidad], [PrecioUnitario]) VALUES (1, 4, 4, 1, CAST(50 AS Decimal(18, 0)))
GO
INSERT [dbo].[PedidosDetalle] ([IdDetallePedido], [IdPedido], [IdProducto], [Cantidad], [PrecioUnitario]) VALUES (2, 5, 4, 1, CAST(50 AS Decimal(18, 0)))
GO
INSERT [dbo].[PedidosDetalle] ([IdDetallePedido], [IdPedido], [IdProducto], [Cantidad], [PrecioUnitario]) VALUES (3, 5, 1, 1, CAST(20 AS Decimal(18, 0)))
GO
SET IDENTITY_INSERT [dbo].[PedidosDetalle] OFF
GO
