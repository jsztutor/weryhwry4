
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Details from './Pages/Details';
import Update from './Pages/Update';
function App() {
  return (
   <Router>
    <Nav/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/create' element={<Create/>}/>
       <Route path='/details' element={<Details/>}/>
       <Route path='/update' element={<Update/>}/>
     </Routes>

   </Router>
  );
}

export default App;
