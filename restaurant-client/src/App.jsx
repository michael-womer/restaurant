import './App.css'
import Home from './Home'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      
        <Navbar/>

        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reserve" element={<Reservation/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
