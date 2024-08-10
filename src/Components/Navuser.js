import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './State';
function Navuser(){
  let {gohome,searchstart,searchend,enablesearch,searchref,userEnter}=useContext(context)
return(
  <>
<nav className="navbar navbar-light " id='navbaruser'>
  <div className="container-fluid">
    <Link  className="navbar-brand" id='accountuser'><i className="fa-solid fa-user fa-xl" style={{color: "rgb(12, 12, 150)",}}>
      </i>My account</Link >
    <i className="fa-solid fa-circle-down fa-xl" style={{color: "rgb(12, 12, 150)",}} onClick={gohome}></i> 
 </div>
</nav>
<form className="d-flex mt-2 mx-2">
        {enablesearch? <input className="form-control me-2" type="text" placeholder="Search for UsersName"
         aria-label="Search" disabled/>:
        <input className="form-control me-2" type="text" placeholder="Search for UsersName"
         aria-label="Search"  ref={searchref} onKeyDown={userEnter}/>}
    
       {enablesearch?
       <button className="btn btn-outline-primary" onClick={searchend} >Cancel</button>
       :<button className="btn btn-outline-primary" onClick={searchstart}>Search</button>} 
      </form>
</>
)
}

export default Navuser