import React from 'react'
import './App.css';

import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Contactus from './pages/Contactus'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Notfound from './pages/Notfound'
function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route path ='/' exact component={Home}/>
       <Route path ='/about' component={About}/>
       <Route path ='/services' component={Services}/>
       <Route path ='/products' component={Products}/>
       <Route path ='/contactus' component={Contactus}/>
       <Route path ='/signup' component={Signup}/>
       <Route component = {Notfound}/>
     </Switch>

   </Router>
  );
}

export default App;
