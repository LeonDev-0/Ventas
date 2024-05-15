import React from 'react'
import { Link } from 'react-router-dom'
import useProductosStore from './store/ProductosStore'
import useVentasStore from './store/VentasStore'

const Ventas = () => {
    const {carrito,agregarAlCarrito,totalAPagar,realizarVenta} = useVentasStore();
    const { productos } = useProductosStore();

    return (
        <div style={{ margin: '50px', display: 'flex ', alignContent: 'space-between' }}>
            <div>

                <Link to={'/nuevo'}> Registrar nuevos Productos</Link>
                <br />
        <Link to={'/detalle'}>DetalleVentas</Link>

                <hr />

                    <h1>Productos</h1>
                    <ul>
                        {
                            productos.map(p => (
                                <li key={p.id}>
                                    {p.nombre}----{p.precioVenta} Bs
                                    <button onClick={()=>{agregarAlCarrito(p)}} style={{marginLeft:'20px'}}>Agregar al carrito</button>
                                </li>
                            ))
                        }
                    </ul>


            </div>

            <div style={{  display:'flex',flexDirection:'column' }}>
                <div>

                <h2>Carrito</h2>
                {carrito.map(producto=>(
                    <div key={producto.id}>
                        <p>{producto.nombre}----{producto.precioVenta}Bs</p>
                    </div>
                ))}

                <strong>Total: {totalAPagar} Bs</strong>
                <br />
                <br />
                <button onClick={realizarVenta}>Realizar Venta</button>
                <hr />
                </div>
            </div>


        </div>
    )
}

export default Ventas