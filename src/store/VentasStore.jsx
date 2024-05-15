import { create } from 'zustand';
import useProductosStore from './ProductosStore';
const useVentasStore = create((set, get) => ({
  ventas: [],
  carrito: [],
  totalAPagar: 0,
  caja:0,

  agregarAlCarrito: (producto) => {
    const { productos,editProducto} = useProductosStore.getState();
    const productoEncontrado = productos.find((p) => (p.id === producto.id))
    if (productoEncontrado && productoEncontrado.stock > 0) {
      set((state)=>({
        carrito:[...state.carrito,producto],
        totalAPagar: state.totalAPagar + producto.precioVenta
      }));

      editProducto({...productoEncontrado,stock:productoEncontrado.stock-1})
    }else{
      alert('producto agotado');
    }
  },

  // Función para eliminar un producto del carrito
  // eliminarDelCarrito: (productoId) =>
  //   set((state) => {
  //     const nuevoCarrito = state.carrito.filter(
  //       (producto) => producto.id !== productoId
  //     );
  //     const totalActualizado = nuevoCarrito.reduce(
  //       (total, producto) => total + producto.precioVenta,
  //       0
  //     );

  //     return {
  //       carrito: nuevoCarrito,
  //       totalAPagar: totalActualizado,
  //     };
  //   }),

  // Función para realizar una venta
  realizarVenta: () =>
    set((state) => ({
      ventas: [...state.ventas, { productos: state.carrito, total: state.totalAPagar }],
      carrito: [],
      totalAPagar: 0,
      caja:state.caja +state.totalAPagar

    })),
}));

export default useVentasStore;