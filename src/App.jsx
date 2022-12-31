
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './pages/contacts/Contacts'
import Home from "./pages/home/Home"
import UseState from './pages/useState/UseState'
import  NavBar  from "./components/nav/Nav"


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usestate" element={<UseState/>} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
