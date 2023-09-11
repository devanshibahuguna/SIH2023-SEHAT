import Concern1 from "./pages/Concern1"
import FingerPrint from "./pages/FingerPrint"
import FrontPage from "./pages/FrontPage"
import IrisScan from "./pages/IrisScan"
import Login from "./pages/Login"
import LoginSuccess from "./pages/LoginSuccess"
import SelectCase from "./pages/SelectCase"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/selectCase" element={<SelectCase/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/fingerPrint" element={<FingerPrint/>}/>
      <Route path="/irisScan" element={<IrisScan/>}/>
      <Route path="/loginSuccess" element={<LoginSuccess/>}/>
      <Route path="/concern1" element={<Concern1/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
