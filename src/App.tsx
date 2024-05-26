import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./modules/home";
import {Fragment} from "react";
import './App.css'
import Navbar from "./components/navbar";

function App() {

    return (
        <Router>
            <Fragment>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App
