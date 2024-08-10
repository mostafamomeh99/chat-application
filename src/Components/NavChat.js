import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './State';
function NavChat(){
  let {datainchat,gohome,gofavoirte,showfavourite,gobook,showbook}=useContext(context)
    
return(
    
<nav className="navbar navbar-expand-lg navbar-light sticky-top" id="navbarchat">
  <div className="container-fluid" >
    {Object.keys(datainchat).length === 0?"":
    (showfavourite||showbook?"":<div className='mt-1'><img src={datainchat.image} className="card-img" alt="..." id='messageuser'/>
      <span className='ms-1' style={{color:" rgb(12, 12, 150)",fontWeight:"600",}} id='usernameinchatnav'>
        {datainchat.username}</span></div>)
    }
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
      <li className="nav-item">
      <Link className="nav-link " aria-current="page" onClick={gohome}>Home</Link>  </li>
        <li className="nav-item">
        <Link className="nav-link " aria-current="page" onClick={gofavoirte}>Favourites</Link>  </li>
        <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={gobook}>BookMarks</Link>  </li>
      </ul>
    </div>
  </div>
</nav>
    
)

}
export default NavChat;