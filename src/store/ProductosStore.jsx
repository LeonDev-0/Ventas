import {create} from 'zustand'

const useProductosStore = create((set,get)=>({
    productos:[],
    addProducto: (pro) =>
        set((state)=>({productos:[...state.productos,pro]})),
    removeProduct: (id) =>
        set(()=>({productos:get().productos.filter(function(p){
            return p.id !== id;
        })})),
    editProducto: (producto)=>
        set(()=>({productos:get().productos.map((p)=>p.id === producto.id ? producto: p)}))

}))
export default useProductosStore;