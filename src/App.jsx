// REACT
import { BrowserRouter, Routes, Route } from "react-router-dom";

// APPS
import Launches from './apps/launches'

// COMPONENTS
import Layout from './components/Layout'

// CSS
import './App.css'

function App() {

  return (
    <>      
      <BrowserRouter>
          <Routes>
              <Route path = "/" element = {<Layout />}>
                  <Route path = "/launches" element = {<Launches />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
