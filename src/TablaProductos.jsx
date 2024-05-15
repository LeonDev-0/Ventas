import React from 'react'
import useProductosStore from './store/ProductosStore'
import DataTable from 'react-data-table-component';
import { TbTrashX } from "react-icons/tb";
import { TbBallpen } from "react-icons/tb";

const TablaProductos = ({update}) => {
    const {productos,removeProduct} = useProductosStore();


    const columns = [
      {
        name:"Nombre",
        selector: row => row.nombre,
        sortable:true
        
      },
      {
        name:"Precio",
        selector: row => row.precioVenta
      },
      {
        name:"Stock",
        selector: row => row.stock
      },
      {
        name:"Acciones",
        cell: row => (
          <div>
            <button onClick={()=>update(row.id)}><TbBallpen style={{color:'blue'}}/></button>
            <button onClick={()=>removeProduct(row.id)}><TbTrashX style={{color:'red'}}/></button>
          </div>
        )
        
      }
    ]

  return (
    <div>
      <DataTable
      columns={columns}
      data={productos}
      fixedHeader
      pagination
      />
    </div>
  )
}

export default TablaProductos