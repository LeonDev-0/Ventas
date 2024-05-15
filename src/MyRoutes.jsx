import { Route,Routes } from "react-router-dom"
import App from "./App"
import Ventas from "./Ventas"
import FormularioPro from "./FormularioPro"
import DetallVentas from "./DetallVentas"
const MyRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Ventas />}/>
        <Route path="nuevo" element={<FormularioPro />}/>
        <Route path="detalle" element={<DetallVentas />}/>
      </Routes>
  )
}

export default MyRoutes