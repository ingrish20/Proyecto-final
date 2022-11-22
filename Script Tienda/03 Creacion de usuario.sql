USE [master]
GO
CREATE LOGIN [test] WITH PASSWORD=N'123456', DEFAULT_DATABASE=[TiendaOnline], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
use [TiendaOnline];
GO
use [master];
GO
USE [TiendaOnline]
GO
CREATE USER [test1] FOR LOGIN [test]
GO
USE [TiendaOnline]
GO
ALTER ROLE [db_owner] ADD MEMBER [test]
GO
