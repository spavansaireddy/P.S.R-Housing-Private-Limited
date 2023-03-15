import './App.css';
import Properties from './body/properties';
import Sales from './body/sales';
import About from './body/about';
import Login from './body/login';
import Sign from './body/sign';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './body/home';
// import Navbar from './body/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
