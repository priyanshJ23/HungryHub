

import Home from './screens/Home';
import Info from "./screens/info";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Testimonial from './components/Testimonial';
import data from './components/data.json';
import NewHome from './screens/NewHome';

import './App.css'
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<NewHome />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/address" element={<Info/>}/>
            <Route exact path="/review" element={<Testimonial testimonialData={data}/>}/>
            <Route exact path="/order" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
