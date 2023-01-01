
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseEffect from './pages/useEffect/UseEffect'
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
      <Route path="/useeffect" element={<UseEffect />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
