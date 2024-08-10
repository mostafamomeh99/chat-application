import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './App.css';
import NavChat from './Components/NavChat';
import Home from './Components/Home';
import SendMessage from './Components/SendMessage';
import Navuser from './Components/Navuser';
import Users from './Components/Users';
import { Route, Routes } from 'react-router-dom';
function App() {
 
  return (
   <div className='container-fluid' id='appnavbar'>
<div className='row row-cols-2'>
  <div className=' col-lg-3 col-sm-4 col-5 ' id='userpage'>
<Navuser />
<Users/>
  </div>
  <div className=' col-lg-9 col-sm-8  col-7' id='Chatpage'>
  <NavChat/>
    <Routes>
    <Route path='/' element={<><Home />
      <SendMessage /> </> }/>
      <Route path='/:anything' element={<><Home />
        <SendMessage /> </> }/>
     
  </Routes>
  </div>
</div>
    </div>
  
);
}

export default App;
