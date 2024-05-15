import { useState } from 'react'
import useProductosStore from './store/ProductosStore';
import { v4 } from 'uuid'
import { Link } from 'react-router-dom';
import TablaProductos from './TablaProductos';

function FormularioPro() {
  const [productoEditando, setProductoEditando] = useState(null)

  const [newProduct, setNewProduct] = useState({
    nombre: '',
    precioCompra: 0,
    precioVenta: 0,
    stock: 0
  });

  const { productos, addProducto, removeProduct, editProducto } = useProductosStore();

  //

  
  //

  const guardar = (e) => {
    e.preventDefault();
    const productoconId = { ...newProduct, id: v4() };
    addProducto(productoconId);
    alert('producto registrado!!')
    setNewProduct({
      nombre: '',
      precioCompra: 0,
      precioVenta: 0,
      stock: 0
    })

  }

  const handleEditPro = (e) => {
    e.preventDefault();
    const updatePro = {
      id: productoEditando,
      nombre: newProduct.nombre,
      precioCompra:newProduct.precioCompra,
      precioVenta: newProduct.precioVenta,
      stock:newProduct.stock
    }

    editProducto(updatePro)

    setNewProduct({
      nombre: '',
      precioCompra: 0,
      precioVenta:0
    })

    console.log('editado correctamente')
    setProductoEditando(null);

  }

  const editar = (producId) => {
    const producto = productos.find(p => (p.id === producId));
    setNewProduct({ ...producto })
    setProductoEditando(producId);
  }

  const cancelar = () => {
    setNewProduct({
      nombre: '',
      precioCompra: 0,
      precioVenta:0,
      stock:0

    })
    setProductoEditando(null);
  }


  return (
    <>
      <Link to="/"> Vender</Link>
      <hr />
      <h1>Nuevos Productos</h1>
      <form onSubmit={productoEditando ? handleEditPro : guardar}>
        <label> Nombre: </label>
        <input
          type="text"
          placeholder='nombre producto'
          value={newProduct.nombre}
          onChange={(e) => { setNewProduct({ ...newProduct, nombre: e.target.value }) }}
        />
        <br />
        <br />
        <label>Precio Compra:</label>
        <input
          type="number"
          placeholder='precioCompra'
          value={newProduct.precioCompra}
          onChange={(e) => { setNewProduct({ ...newProduct, precioCompra: parseInt(e.target.value) }) }}
        />
        <br />
        <br />
        <label>Precio Venta: </label>
        <input
          type="number"
          placeholder='precioVenta'
          value={newProduct.precioVenta}
          onChange={(e) => { setNewProduct({ ...newProduct, precioVenta: parseInt(e.target.value) }) }}
        />
        <br />
        <br />
        <label>Stock</label>
        <input
          type="number"
          placeholder='stock'
          value={newProduct.stock}
          onChange={(e) => { setNewProduct({ ...newProduct, stock: parseInt(e.target.value) }) }}
        />
        <br />
        <br />
        <input
          type="submit"
          value={productoEditando ? 'Actualizar' : 'Registrar'}
        />
        {productoEditando && <button onClick={cancelar}>cancelar</button>}
      </form>


      <div>
        <TablaProductos update={editar}/>
      </div>
    </>
  )
}


export default FormularioPro;
