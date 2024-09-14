import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import './App.css';
import Homepage from './pages/Homepage';
import Dashboard from "./pages/Dashboard";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route  path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
