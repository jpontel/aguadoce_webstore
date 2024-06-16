import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./modules/home";
import {Fragment} from "react";
import './App.css'

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
