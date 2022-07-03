import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Nav/Navbar';
import Home from './pages/Home'
import Creations from './pages/Creations'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Pdfpage from './pages/Pdfpage';
import Counterapp from './counter-app/Counterapp';
import Agecalculator from './age-calculator/Agecalculator';
 

function App() {
  return (
     <Router> 
       <Navbar/>
      
      
        
       <Switch>
         <Route path="/" exact component={Home}>
               <Home/>
         </Route>
         <Route path="/Creations" component={Creations}>
               <Creations/>
         </Route>
         <Route path="/Products" component={Products}>
               <Products/>
         </Route>
         <Route path="/Contact" component={Contact}>
               <Contact/>
         </Route>
         <Route path="/Pdfpage" component={Pdfpage}>
               <Pdfpage/>
         </Route>
         <Route path="/Counterapp" component={Counterapp}>
               <Counterapp/>
         </Route>
         <Route path="/Agecalculator" component={Agecalculator}>
               <Agecalculator/>
         </Route>
         
       </Switch>
     </Router>
  );
}

export default App;
