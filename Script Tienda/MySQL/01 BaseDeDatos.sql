-- MySQL Script generated by MySQL Workbench
-- Tue Nov 22 14:44:24 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema tiendaonline
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tiendaonline` ;

-- -----------------------------------------------------
-- Schema tiendaonline
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tiendaonline` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `tiendaonline` ;

-- -----------------------------------------------------
-- Table `tiendaonline`.`estadopedido`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`estadopedido` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`estadopedido` (
  `IdEstadoPedido` INT NOT NULL,
  `Estado` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`IdEstadoPedido`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiendaonline`.`pedidos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`pedidos` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`pedidos` (
  `IdPedido` BIGINT NOT NULL,
  `IdUsuario` INT NOT NULL,
  `Fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Total` BIGINT NOT NULL,
  `IdEstadoPedido` INT NOT NULL,
  PRIMARY KEY (`IdPedido`),
  CONSTRAINT `FK_Pedidos_EstadoPedido`
    FOREIGN KEY (`IdEstadoPedido`)
    REFERENCES `tiendaonline`.`estadopedido` (`IdEstadoPedido`),
  CONSTRAINT `FK_Pedidos_Usuarios`
    FOREIGN KEY (`IdUsuario`)
    REFERENCES `tiendaonline`.`usuarios` (`IdUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiendaonline`.`pedidosdetalle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`pedidosdetalle` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`pedidosdetalle` (
  `IdDetallePedido` BIGINT NOT NULL,
  `IdPedido` BIGINT NULL DEFAULT NULL,
  `IdProducto` BIGINT NOT NULL,
  `Cantidad` INT NOT NULL,
  `PrecioUnitario` BIGINT NOT NULL,
  PRIMARY KEY (`IdDetallePedido`),
  CONSTRAINT `FK_PedidosDetalle_Pedidos`
    FOREIGN KEY (`IdPedido`)
    REFERENCES `tiendaonline`.`pedidos` (`IdPedido`),
  CONSTRAINT `FK_PedidosDetalle_Productos`
    FOREIGN KEY (`IdProducto`)
    REFERENCES `tiendaonline`.`productos` (`IdProducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiendaonline`.`productos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`productos` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`productos` (
  `IdProducto` BIGINT NOT NULL,
  `NombreProducto` VARCHAR(500) NOT NULL,
  `DescripcionProducto` VARCHAR(500) NOT NULL,
  `PrecioUnitario` BIGINT NOT NULL,
  `UrlImagen` LONGTEXT NOT NULL,
  `UrlImagenAgotado` LONGTEXT NULL DEFAULT NULL,
  `Existencias` INT NOT NULL DEFAULT '0',
  `Activo` INT NOT NULL,
  `IdTipoProducto` INT NOT NULL,
  PRIMARY KEY (`IdProducto`),
  CONSTRAINT `FK_Productos_TipoProductos`
    FOREIGN KEY (`IdTipoProducto`)
    REFERENCES `tiendaonline`.`tipoproductos` (`IdTipoProducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiendaonline`.`tipoproductos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`tipoproductos` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`tipoproductos` (
  `IdTipoProducto` INT NOT NULL,
  `TipoProducto` VARCHAR(100) NOT NULL,
  `UrlImagenTipo` LONGTEXT NULL DEFAULT NULL,
  `Activo` INT NOT NULL,
  PRIMARY KEY (`IdTipoProducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiendaonline`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`usuarios` (
  `IdUsuario` INT NOT NULL,
  `Usuario` VARCHAR(50) NOT NULL,
  `Clave` VARCHAR(20) NULL DEFAULT NULL,
  `Nombre` VARCHAR(300) NOT NULL,
  `FechaRegistro` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Activo` INT NOT NULL,
  PRIMARY KEY (`IdUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiendaonline`.`valoracionesproductos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`valoracionesproductos` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`valoracionesproductos` (
  `IdValoracionProducto` BIGINT NOT NULL,
  `IdProducto` BIGINT NOT NULL,
  `ValoracionPromedio` BIGINT NOT NULL,
  PRIMARY KEY (`IdValoracionProducto`),
  CONSTRAINT `FK_ValoracionesProductos_Productos`
    FOREIGN KEY (`IdProducto`)
    REFERENCES `tiendaonline`.`productos` (`IdProducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiendaonline`.`valoracionesproductosdetalle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiendaonline`.`valoracionesproductosdetalle` ;

CREATE TABLE IF NOT EXISTS `tiendaonline`.`valoracionesproductosdetalle` (
  `IdDetalleValoracionProducto` BIGINT NOT NULL,
  `IdValoracionProducto` BIGINT NOT NULL,
  `Fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Valoracion` DECIMAL(18,2) NOT NULL DEFAULT '0.00',
  `IdUsuario` INT NOT NULL,
  `Comentario` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`IdDetalleValoracionProducto`),
  CONSTRAINT `FK_ValoracionesProductosDetalle_Usuarios`
    FOREIGN KEY (`IdUsuario`)
    REFERENCES `tiendaonline`.`usuarios` (`IdUsuario`),
  CONSTRAINT `FK_ValoracionesProductosDetalle_ValoracionesProductos`
    FOREIGN KEY (`IdValoracionProducto`)
    REFERENCES `tiendaonline`.`valoracionesproductos` (`IdValoracionProducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
