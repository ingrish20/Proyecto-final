import { Component } from "react";

class ListaProducto extends Component{
render(){
    console.log(this.props)
    return(
        <div>
            <ListaProducto lista={this.state.productos}></ListaProducto>
        </div>
    )
}
}

export default ListaProducto 

