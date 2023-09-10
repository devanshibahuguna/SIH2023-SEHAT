import FrontPage from "./pages/FrontPage"
import Login from "./pages/Login"
import SelectCase from "./pages/SelectCase"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/selectCase" element={<SelectCase/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
