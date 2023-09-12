import Basichc1 from "./pages/Basichc1";
import Basichc2 from "./pages/Basichc2";
import Basichc3 from "./pages/Basichc3";
import Basichc4 from "./pages/Basichc4";
import Basichc5 from "./pages/Basichc5";
import Basichc6 from "./pages/Basichc6";
import Basichc7 from "./pages/Basichc7";
import Concern1 from "./pages/Concern1";
import Concern2 from "./pages/Concern2";
import Diabetes1 from "./pages/Diabetes1";
import Diabetes2 from "./pages/Diabetes2";
import Diabetes3 from "./pages/Diabetes3";
import Diabetes4 from "./pages/Diabetes4";
import FingerPrint from "./pages/FingerPrint";
import FrontPage from "./pages/FrontPage";
import IrisScan from "./pages/IrisScan";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import SelectCase from "./pages/SelectCase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/selectCase" element={<SelectCase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fingerPrint" element={<FingerPrint />} />
        <Route path="/irisScan" element={<IrisScan />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/concern1" element={<Concern1 />} />
        <Route path="/concern2" element={<Concern2 />} />
        <Route path="/bhcInfo" element={<Basichc1 />} />
        <Route path="/bhcHeight" element={<Basichc2 />} />
        <Route path="/bhcWeight" element={<Basichc3 />} />
        <Route path="/bhcTemp" element={<Basichc4 />} />
        <Route path="/bhcHeartbeat" element={<Basichc5 />} />
        <Route path="/bhcSPO2" element={<Basichc6 />} />
        <Route path="/bhcBP" element={<Basichc7 />} />
        <Route path="/DiabetesGlucose" element={<Diabetes1/>} />
        <Route path="/DiabetesSugar" element={<Diabetes2/>} />
        <Route path="/DiabetesRecord" element={<Diabetes3/>} />
        <Route path="/DiabetesConnect" element={<Diabetes4/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
