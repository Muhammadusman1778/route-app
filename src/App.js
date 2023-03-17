import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
/* import About from './components/About'; */
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import New from './components/New';
import Featured from './components/Featured';
import User from './components/User';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
const LazyAbout= React.lazy(()=>import('./components/About'));
function App() {
  return (
      <>
      <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
      {/*  <Route  path='/about' element={<About/>}/> */}

      <Route  path='/about'
       element={
      <React.Suspense fallback='Loading..................'>
         <LazyAbout/>
      </React.Suspense>
      
      
      }
       
       
       /> 
       <Route  path='/order-summary' element={<OrderSummary/>}/>
       <Route  path='/products' element={<Product/>}>
       <Route index element={<Featured/>}></Route>
       <Route path='new-products' element={<New/>}></Route>
       <Route path='featured' element={<Featured/>}></Route>
       </Route>

{/*        <Route  path='/users' element={<User/>}/>
       <Route  path='users/:userId' element={<UserDetails/>}/>
       <Route  path='users/admin' element={<Admin/>}/>
 */}
         <Route  path='/users' element={<User/>}>
       <Route  path=':userId' element={<UserDetails/>}/>
       <Route  path='admin' element={<Admin/>}/>
         </Route>
       <Route  path='*' element={<NoMatch/>}/>
       </Routes>
      </>
  )
}

export default App;
