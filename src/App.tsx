import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BestSellers from "./modules/best-sellers";
import Favorites from "./components/favorites";
import Messages from "./components/messages";
import Masculino from "./modules/masculino";
import Novidades from "./modules/novidades";
import Profile from "./components/profile";
import Feminino from "./modules/feminino";
import Navbar from "./components/navbar";
import Marcas from "./modules/marcas";
import Home from "./modules/home";
import {Fragment} from "react";
import './App.css';
import Login from "./modules/login";

function App() {
    return (
        <Router>
            <Fragment>
                <Navbar/>
                <Messages/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"*"} element={<div>404</div>}/>
                    <Route path={"login"} element={<Login/>}/>
                    {/*<Route path={"/cart"} element={<Cart/>}/>*/}
                    <Route path={"/favorites"} element={<Favorites/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/masculino"} element={<Masculino/>}/>
                    <Route path={"/feminino"} element={<Feminino/>}/>
                    <Route path={"/marcas"} element={<Marcas/>}/>
                    <Route path={"/novidades"} element={<Novidades/>}/>
                    <Route path={"/best-sellers"} element={<BestSellers/>}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App
