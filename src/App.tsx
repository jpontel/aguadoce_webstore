import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GenericProductDetail from "./components/generic-product-detail";
import BestSellers from "./modules/best-sellers";
import Favorites from "./components/favorites";
import Messages from "./components/messages";
import Masculino from "./modules/masculino";
import Novidades from "./modules/novidades";
import Profile from "./components/profile";
import Feminino from "./modules/feminino";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Marcas from "./modules/marcas";
import Login from "./auth/login/index.tsx";
import Home from "./modules/home";
import {Fragment} from "react";
import './App.css';
import AdminMenu from "./auth/admin/main-menu";

function App() {
    return (
        <Router>
            <Fragment>
                <Navbar/>
                <Messages/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"*"} element={<div>404</div>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    {/*<Route path={"/cart"} element={<Cart/>}/>*/}
                    <Route path={"/product"} element={<GenericProductDetail/>}/>
                    <Route path={"/favorites"} element={<Favorites/>}/>
                    <Route path={'/admin'} element={<AdminMenu/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/masculino"} element={<Masculino/>}/>
                    <Route path={"/feminino"} element={<Feminino/>}/>
                    <Route path={"/marcas"} element={<Marcas/>}/>
                    <Route path={"/novidades"} element={<Novidades/>}/>
                    <Route path={"/best-sellers"} element={<BestSellers/>}/>
                </Routes>
                <Footer/>
            </Fragment>
        </Router>
    )
}

export default App
