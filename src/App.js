import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Param1 from "./components/Param1";
import Param2 from "./components/Param2";
import Param3 from './components/Param3';

function App() {
  return (
    <div className="App">
      <div>
        ----------------------------
      </div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Comp1' element={<Comp1 />} />
            <Route path='/Comp2' element={<Comp2 />} />
            <Route path='/Comp3' element={<Comp3 />} />
            <Route path='/param/:id/:name' element={<Param1 />}/>
            <Route path='/param' element={<Param2/>} />
            <Route path='/param3/:id/:pw' element={<Param3/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
