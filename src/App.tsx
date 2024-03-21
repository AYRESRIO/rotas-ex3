import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Subscription from "./routes/Home/Subscription";
import Home from "./routes";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
           <Route index element={<Navigate to = "/home"/>} />
            <Route path ="home" element={<HomeBody />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="subscription" element={<Subscription />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App
