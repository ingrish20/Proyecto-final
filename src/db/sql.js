const mySql = require("mysql");
const sqlServer = require("mssql");
const db ="sqlServer";


const executeQuery= async (query) =>
{
    var data="";

    if (db==='sqlServer') {

       await sqlServer.connect(sqlServerConfig);

        var result = await sqlServer.query(query);

        return result.recordset;
         
    }
    else
    {
        var conect =  mySql.createConnection(mySqlConfig);

        conect.query(query, function (error, results, fields) {
            if (error)
                throw error;
    
           data = results;
        });
    
        conect.end(); 
        return data;
    }

}

const getProductosByIdTipoProducto =async(idTipo) => {

  const queryProductosByTipo = "SELECT TipoProductos.IdTipoProducto, TipoProductos.TipoProducto, TipoProductos.UrlImagenTipo, "
                                + " Productos.IdProducto, Productos.NombreProducto, Productos.DescripcionProducto, "
                                + " Productos.PrecioUnitario, Productos.UrlImagen, Productos.UrlImagenAgotado, Productos.Existencias, "
                                + " ValoracionesProductos.IdValoracionProducto, ValoracionesProductos.ValoracionPromedio "
                                + " FROM   TipoProductos INNER JOIN "
                                + " Productos ON TipoProductos.IdTipoProducto = Productos.IdTipoProducto LEFT JOIN "
                                + " ValoracionesProductos ON Productos.IdProducto = ValoracionesProductos.IdProducto where Productos.IdTipoProducto=" + parseInt(idTipo) ;

    let resp = await executeQuery(queryProductosByTipo);

    return resp
};

const getProductoByIdProducto =async(idProducto) => {

  const queryProductos = "SELECT TipoProductos.IdTipoProducto, TipoProductos.TipoProducto, TipoProductos.UrlImagenTipo, "
                                + " Productos.IdProducto, Productos.NombreProducto, Productos.DescripcionProducto, "
                                + " Productos.PrecioUnitario, Productos.UrlImagen, Productos.UrlImagenAgotado, Productos.Existencias, "
                                + " ValoracionesProductos.IdValoracionProducto, ValoracionesProductos.ValoracionPromedio "
                                + " FROM   TipoProductos INNER JOIN "
                                + " Productos ON TipoProductos.IdTipoProducto = Productos.IdTipoProducto  LEFT JOIN "
                                + " ValoracionesProductos ON Productos.IdProducto = ValoracionesProductos.IdProducto where Productos.IdProducto=" + parseInt(idProducto) ;

    let resp = await executeQuery(queryProductos);

    return resp
};

const getTipoProductos =async( ) => {

  const queryTipoProductos = "SELECT IdTipoProducto ,TipoProducto ,UrlImagenTipo ,Activo  FROM  TipoProductos";

    let resp = await executeQuery(queryTipoProductos);

    return resp
};

const getUsuarios = async() => {

  const queryUsuarios = "SELECT IdUsuario  ,Usuario ,Nombre  ,FechaRegistro ,Activo FROM Usuarios";

  let resp = await executeQuery(queryUsuarios);

  return resp
}


const getUsuariosByUsuario = async(usuario) => {

  const queryUsuarios = "SELECT IdUsuario  ,Usuario ,Nombre  ,FechaRegistro ,Activo FROM Usuarios where Usuario='" + usuario + "'";

  let resp = await executeQuery(queryUsuarios);

  return resp
}

const getPedidosByUsuario = async(usuario) => {

  const queryPedidos = "SELECT Pedidos.IdPedido, Pedidos.IdUsuario, Usuarios.Usuario, Usuarios.Nombre, Pedidos.Fecha, Pedidos.Total, " 
                        + "	EstadoPedido.IdEstadoPedido, EstadoPedido.Estado, PedidosDetalle.IdDetallePedido," 
                        + "	PedidosDetalle.IdProducto, Productos.NombreProducto, PedidosDetalle.Cantidad, PedidosDetalle.PrecioUnitario," 
                        + "	Productos.UrlImagen, Productos.UrlImagenAgotado, Productos.IdTipoProducto, TipoProductos.TipoProducto," 
                        + "	TipoProductos.UrlImagenTipo " 
                        + " FROM  Productos INNER JOIN " 
                        + "	TipoProductos ON Productos.IdTipoProducto = TipoProductos.IdTipoProducto INNER JOIN " 
                        + "	PedidosDetalle ON Productos.IdProducto = PedidosDetalle.IdProducto INNER JOIN " 
                        + "	Pedidos ON PedidosDetalle.IdPedido = Pedidos.IdPedido INNER JOIN " 
                        + "	EstadoPedido ON Pedidos.IdEstadoPedido = EstadoPedido.IdEstadoPedido INNER JOIN " 
                        + "	Usuarios ON Pedidos.IdUsuario = Usuarios.IdUsuario where Usuarios.Usuario='" + usuario + "'";

  let resp = await executeQuery(queryPedidos);

  return resp
}

const getPedidosByIdUsuario = async(idUsuario) => {

  const queryPedidos =  " SELECT  Pedidos.IdPedido, Pedidos.IdUsuario, Usuarios.Usuario, Usuarios.Nombre, Pedidos.Fecha, Pedidos.Total, " 
                        + "		EstadoPedido.IdEstadoPedido, EstadoPedido.Estado, PedidosDetalle.IdDetallePedido," 
                        + "		PedidosDetalle.IdProducto, Productos.NombreProducto, PedidosDetalle.Cantidad, PedidosDetalle.PrecioUnitario," 
                        + "		Productos.UrlImagen, Productos.UrlImagenAgotado, Productos.IdTipoProducto, TipoProductos.TipoProducto," 
                        + "		TipoProductos.UrlImagenTipo " 
                        + " FROM  Productos INNER JOIN " 
                        + "	 TipoProductos ON Productos.IdTipoProducto = TipoProductos.IdTipoProducto INNER JOIN " 
                        + "	 PedidosDetalle ON Productos.IdProducto = PedidosDetalle.IdProducto INNER JOIN " 
                        + "	 Pedidos ON PedidosDetalle.IdPedido = Pedidos.IdPedido INNER JOIN " 
                        + "	 EstadoPedido ON Pedidos.IdEstadoPedido = EstadoPedido.IdEstadoPedido INNER JOIN " 
                        + "	 Usuarios ON Pedidos.IdUsuario = Usuarios.IdUsuario where Usuarios.IdUsuario=" + idUsuario;

  let resp = await executeQuery(queryPedidos);

  return resp
}

const getPedidosByIdPedido= async(idPedido) => {

  const queryPedidos = " SELECT  Pedidos.IdPedido, Pedidos.IdUsuario, Usuarios.Usuario, Usuarios.Nombre, Pedidos.Fecha, Pedidos.Total, " 
                        + "		EstadoPedido.IdEstadoPedido, EstadoPedido.Estado, PedidosDetalle.IdDetallePedido," 
                        + "		PedidosDetalle.IdProducto, Productos.NombreProducto, PedidosDetalle.Cantidad, PedidosDetalle.PrecioUnitario," 
                        + "		Productos.UrlImagen, Productos.UrlImagenAgotado, Productos.IdTipoProducto, TipoProductos.TipoProducto," 
                        + "		TipoProductos.UrlImagenTipo " 
                        + " FROM  Productos INNER JOIN " 
                        + "	 TipoProductos ON Productos.IdTipoProducto = TipoProductos.IdTipoProducto INNER JOIN " 
                        + "	 PedidosDetalle ON Productos.IdProducto = PedidosDetalle.IdProducto INNER JOIN " 
                        + "	 Pedidos ON PedidosDetalle.IdPedido = Pedidos.IdPedido INNER JOIN " 
                        + "	 EstadoPedido ON Pedidos.IdEstadoPedido = EstadoPedido.IdEstadoPedido INNER JOIN " 
                        + "	 Usuarios ON Pedidos.IdUsuario = Usuarios.IdUsuario where Pedidos.IdPedido=" + parseInt(idPedido);

  let resp = await executeQuery(queryPedidos);

  return resp
}

  const mySqlConfig= {
    host : 'localhost',
    database : 'empleados',
    user : 'USUARIO',
    password : 'PASS',
}


const sqlServerConfig = {
    user: "test",
    password: "123456",
    database: "TiendaOnline",
    server: 'AGRANDEMOV\\SQLEXPRESS',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

module.exports = {
  getProductosByIdTipoProducto,
  getProductoByIdProducto,
  getTipoProductos,
  getUsuarios,
  getUsuariosByUsuario,
  getPedidosByIdPedido,
  getPedidosByIdUsuario,
  getPedidosByUsuario
}