// REACT
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";

// APPS
import Launches from './apps/launches'

// COMPONENTS
import Layout from './components/Layout'

// CSS
import './App.css'

const App: React.FC = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path = "/" element = {<Layout />}>
                <Route path = "/launches" element = {<Launches />}/>
            </Route>
        </Routes>
    </HashRouter>
  )
}

export default App
