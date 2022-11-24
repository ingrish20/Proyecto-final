
const { executeQuery } = require("./db")

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


const guardarPedidoHeader= async(IdUsuario, Total, IdEstadoPedido) => {

  const queryPedidos = `INSERT INTO pedidos (IdUsuario, Total, IdEstadoPedido) VALUES ( ${IdUsuario}, ${Total}, ${IdEstadoPedido})`

  let resp = await executeQuery(queryPedidos);
   
  var id = resp.insertId;

  return id;
}

const guardarPedidoDetalle= async(productos) => {
console.log(productos)
  var listaId = [];

  productos.forEach( async e => {
    const queryPedidos = `INSERT INTO pedidosdetalle( IdPedido,IdProducto,Cantidad,PrecioUnitario) VALUES (${e.IdPedido}, ${e.IdProducto}, ${e.Cantidad}, ${e.PrecioUnitario})`
    let resp = await executeQuery(queryPedidos);

    var id = resp.insertId;

    listaId.push({
      IdItem: id
    });

  });

  return listaId;
}

module.exports = {
  getProductosByIdTipoProducto,
  getProductoByIdProducto,
  getTipoProductos,
  getUsuarios,
  getUsuariosByUsuario,
  getPedidosByIdPedido,
  getPedidosByIdUsuario,
  getPedidosByUsuario,
  guardarPedidoHeader,
  guardarPedidoDetalle
}