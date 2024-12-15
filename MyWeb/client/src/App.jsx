import {BrowserRouter ,Routes,Route } from 'react-router-dom';

import About from './Pages/About';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from './components/header';
import PrivateRoutes from './components/PrivateRoutes';
import AddItem from './Pages/AddItem';
import ItemProfile from './Pages/ItemProfile';

import AllDetails from './Pages/AllDetails';
import UpdateItem from './Pages/UpdateItem';
import OnePetShow from './Pages/OnePetShow'
import Footer from './Pages/Footer';






export default function App() {
  return <BrowserRouter>
<Header/>
  <Routes>
    <Route path="/" element={<div><AllDetails/><Footer/></div>}></Route>
    <Route path="/about" element={<About/>}></Route>

    <Route path="/sign-in" element={<div><Signin/><Footer/></div>}></Route>
    <Route path="/additem" element={<AddItem/>}></Route>
    <Route path="/sign-up" element={<SignUp/>}></Route>
   
    <Route path="/onepet/:id" element={<OnePetShow/>}></Route>
 
    <Route element={<PrivateRoutes/>}>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/items" element={<ItemProfile/>}></Route>
    <Route path="/update-item/:id" element={<UpdateItem/>}></Route>


    </Route>
 
    
  </Routes>
  
  </BrowserRouter>
  
}
