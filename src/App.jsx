import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="max-w-[1728px] mx-auto bg-background">
     <NavBar />
     <Routes>
     <Route path='/Home' element={<Home />} />
     </Routes>
    </div>
  )
}

export default App
