// REACT
import { HashRouter, Routes, Route } from "react-router-dom";

// APPS
import Launches from './apps/launches'

// COMPONENTS
import Layout from './components/Layout'

// CSS
import './App.css'

function App() {

  return (
    <>      
      <HashRouter>
          <Routes>
              <Route path = "/" element = {<Layout />}>
                  <Route path = "/launches" element = {<Launches />}/>
              </Route>
          </Routes>
      </HashRouter>
    </>
  )
}

export default App
