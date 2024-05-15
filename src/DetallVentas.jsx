import React from 'react'
import useVentasStore from './store/VentasStore'
import { Link } from 'react-router-dom';
import Comprobante from './Comprobante';
import { PDFDownloadLink } from '@react-pdf/renderer';
const DetallVentas = () => {
    const { ventas, caja } = useVentasStore();

    return (
        <>
            <Link to={'/'}>Vender</Link>
            <div style={{ marginLeft: '50px' }}>
                <h2>Ventas realizadas</h2>
                {
                    ventas.map((v, index) => (
                        <div>
                            <hr />
                            <h3>Venta{index + 1}</h3>
                            <h4>Productos:</h4>
                            <ul>
                                {v.productos.map(p => (
                                    <li key={p.id}>{p.nombre}---{p.precioVenta}Bs</li>
                                ))}
                            </ul>
                            <p>Total:{v.total} Bs</p>
                        </div>
                    ))
                }
                <hr />

                <h3 style={{ color: 'green' }}>ventas Del Dia: {caja} Bs</h3>
            </div>

<PDFDownloadLink document={<Comprobante/>} fileName='comprobante.pd'>
<Comprobante/>
</PDFDownloadLink>

        </>



    )
}

export default DetallVentas