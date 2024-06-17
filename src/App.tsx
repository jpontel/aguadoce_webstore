import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BestSellers from "./modules/best-sellers";
import Novidades from "./modules/novidades";
import Masculino from "./modules/masculino";
import Feminino from "./modules/feminino";
import Navbar from "./components/navbar";
import Home from "./modules/home";
import {Fragment} from "react";
import './App.css'

function App() {
    return (
        <Router>
            <Fragment>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"*"} element={<div>404</div>}/>
                    <Route path={"/masculino"} element={<Masculino/>}/>
                    <Route path={"/feminino"} element={<Feminino/>}/>
                    <Route path={"/novidades"} element={<Novidades/>}/>
                    <Route path={"/best-sellers"} element={<BestSellers/>}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App
