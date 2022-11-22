USE [master]
GO
/****** Object:  Database [TiendaOnline]    Script Date: 20/11/2022 23:15:46 ******/
CREATE DATABASE [TiendaOnline]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Productos', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\TiendaOnline.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Productos_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\TiendaOnline_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [TiendaOnline] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TiendaOnline].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TiendaOnline] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TiendaOnline] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TiendaOnline] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TiendaOnline] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TiendaOnline] SET ARITHABORT OFF 
GO
ALTER DATABASE [TiendaOnline] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TiendaOnline] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TiendaOnline] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TiendaOnline] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TiendaOnline] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TiendaOnline] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TiendaOnline] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TiendaOnline] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TiendaOnline] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TiendaOnline] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TiendaOnline] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TiendaOnline] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TiendaOnline] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TiendaOnline] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TiendaOnline] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TiendaOnline] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TiendaOnline] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TiendaOnline] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [TiendaOnline] SET  MULTI_USER 
GO
ALTER DATABASE [TiendaOnline] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TiendaOnline] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TiendaOnline] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TiendaOnline] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TiendaOnline] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [TiendaOnline] SET QUERY_STORE = OFF
GO
USE [TiendaOnline]
GO
/****** Object:  Table [dbo].[EstadoPedido]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadoPedido](
	[IdEstadoPedido] [int] IDENTITY(1,1) NOT NULL,
	[Estado] [varchar](100) NULL,
 CONSTRAINT [PK_EstadoPedido] PRIMARY KEY CLUSTERED 
(
	[IdEstadoPedido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pedidos]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pedidos](
	[IdPedido] [bigint] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[Fecha] [datetime] NOT NULL,
	[Total] [decimal](18, 0) NOT NULL,
	[IdEstadoPedido] [int] NOT NULL,
 CONSTRAINT [PK_Pedidos] PRIMARY KEY CLUSTERED 
(
	[IdPedido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PedidosDetalle]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PedidosDetalle](
	[IdDetallePedido] [bigint] IDENTITY(1,1) NOT NULL,
	[IdPedido] [bigint] NULL,
	[IdProducto] [bigint] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[PrecioUnitario] [decimal](18, 0) NOT NULL,
 CONSTRAINT [PK_PedidosDetalle] PRIMARY KEY CLUSTERED 
(
	[IdDetallePedido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Productos]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Productos](
	[IdProducto] [bigint] IDENTITY(1,1) NOT NULL,
	[NombreProducto] [varchar](500) NOT NULL,
	[DescripcionProducto] [varchar](500) NOT NULL,
	[PrecioUnitario] [decimal](18, 0) NOT NULL,
	[UrlImagen] [text] NOT NULL,
	[UrlImagenAgotado] [text] NULL,
	[Existencias] [int] NOT NULL,
	[Activo] [int] NOT NULL,
	[IdTipoProducto] [int] NOT NULL,
 CONSTRAINT [PK_Productos] PRIMARY KEY CLUSTERED 
(
	[IdProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoProductos]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoProductos](
	[IdTipoProducto] [int] IDENTITY(1,1) NOT NULL,
	[TipoProducto] [varchar](100) NOT NULL,
	[UrlImagenTipo] [text] NULL,
	[Activo] [int] NOT NULL,
 CONSTRAINT [PK_TipoProductos] PRIMARY KEY CLUSTERED 
(
	[IdTipoProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[Usuario] [varchar](50) NOT NULL,
	[Clave] [varchar](20) NULL,
	[Nombre] [varchar](300) NOT NULL,
	[FechaRegistro] [datetime] NOT NULL,
	[Activo] [int] NOT NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ValoracionesProductos]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ValoracionesProductos](
	[IdValoracionProducto] [bigint] IDENTITY(1,1) NOT NULL,
	[IdProducto] [bigint] NOT NULL,
	[ValoracionPromedio] [decimal](18, 0) NOT NULL,
 CONSTRAINT [PK_ValoracionesProductos] PRIMARY KEY CLUSTERED 
(
	[IdValoracionProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ValoracionesProductosDetalle]    Script Date: 20/11/2022 23:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ValoracionesProductosDetalle](
	[IdDetalleValoracionProducto] [bigint] IDENTITY(1,1) NOT NULL,
	[IdValoracionProducto] [bigint] NOT NULL,
	[Fecha] [datetime] NOT NULL,
	[Valoracion] [decimal](18, 2) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[Comentario] [varchar](500) NULL,
 CONSTRAINT [PK_ValoracionesProductosDetalle] PRIMARY KEY CLUSTERED 
(
	[IdDetalleValoracionProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Pedidos] ADD  CONSTRAINT [DF_Pedidos_Fecha]  DEFAULT (getdate()) FOR [Fecha]
GO
ALTER TABLE [dbo].[Productos] ADD  CONSTRAINT [DF_Productos_Existencias]  DEFAULT ((0)) FOR [Existencias]
GO
ALTER TABLE [dbo].[Usuarios] ADD  CONSTRAINT [DF_Usuarios_FechaRegistro]  DEFAULT (getdate()) FOR [FechaRegistro]
GO
ALTER TABLE [dbo].[ValoracionesProductosDetalle] ADD  CONSTRAINT [DF_ValoracionesProductosDetalle_Fecha]  DEFAULT (getdate()) FOR [Fecha]
GO
ALTER TABLE [dbo].[ValoracionesProductosDetalle] ADD  CONSTRAINT [DF_ValoracionesProductosDetalle_Valoracion]  DEFAULT ((0)) FOR [Valoracion]
GO
ALTER TABLE [dbo].[Pedidos]  WITH CHECK ADD  CONSTRAINT [FK_Pedidos_EstadoPedido] FOREIGN KEY([IdEstadoPedido])
REFERENCES [dbo].[EstadoPedido] ([IdEstadoPedido])
GO
ALTER TABLE [dbo].[Pedidos] CHECK CONSTRAINT [FK_Pedidos_EstadoPedido]
GO
ALTER TABLE [dbo].[Pedidos]  WITH CHECK ADD  CONSTRAINT [FK_Pedidos_Usuarios] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuarios] ([IdUsuario])
GO
ALTER TABLE [dbo].[Pedidos] CHECK CONSTRAINT [FK_Pedidos_Usuarios]
GO
ALTER TABLE [dbo].[PedidosDetalle]  WITH CHECK ADD  CONSTRAINT [FK_PedidosDetalle_Pedidos] FOREIGN KEY([IdPedido])
REFERENCES [dbo].[Pedidos] ([IdPedido])
GO
ALTER TABLE [dbo].[PedidosDetalle] CHECK CONSTRAINT [FK_PedidosDetalle_Pedidos]
GO
ALTER TABLE [dbo].[PedidosDetalle]  WITH CHECK ADD  CONSTRAINT [FK_PedidosDetalle_Productos] FOREIGN KEY([IdProducto])
REFERENCES [dbo].[Productos] ([IdProducto])
GO
ALTER TABLE [dbo].[PedidosDetalle] CHECK CONSTRAINT [FK_PedidosDetalle_Productos]
GO
ALTER TABLE [dbo].[Productos]  WITH CHECK ADD  CONSTRAINT [FK_Productos_TipoProductos] FOREIGN KEY([IdTipoProducto])
REFERENCES [dbo].[TipoProductos] ([IdTipoProducto])
GO
ALTER TABLE [dbo].[Productos] CHECK CONSTRAINT [FK_Productos_TipoProductos]
GO
ALTER TABLE [dbo].[ValoracionesProductos]  WITH CHECK ADD  CONSTRAINT [FK_ValoracionesProductos_Productos] FOREIGN KEY([IdProducto])
REFERENCES [dbo].[Productos] ([IdProducto])
GO
ALTER TABLE [dbo].[ValoracionesProductos] CHECK CONSTRAINT [FK_ValoracionesProductos_Productos]
GO
ALTER TABLE [dbo].[ValoracionesProductosDetalle]  WITH CHECK ADD  CONSTRAINT [FK_ValoracionesProductosDetalle_Usuarios] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuarios] ([IdUsuario])
GO
ALTER TABLE [dbo].[ValoracionesProductosDetalle] CHECK CONSTRAINT [FK_ValoracionesProductosDetalle_Usuarios]
GO
ALTER TABLE [dbo].[ValoracionesProductosDetalle]  WITH CHECK ADD  CONSTRAINT [FK_ValoracionesProductosDetalle_ValoracionesProductos] FOREIGN KEY([IdValoracionProducto])
REFERENCES [dbo].[ValoracionesProductos] ([IdValoracionProducto])
GO
ALTER TABLE [dbo].[ValoracionesProductosDetalle] CHECK CONSTRAINT [FK_ValoracionesProductosDetalle_ValoracionesProductos]
GO
USE [master]
GO
ALTER DATABASE [TiendaOnline] SET  READ_WRITE 
GO
