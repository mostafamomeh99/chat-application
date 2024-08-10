import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
import { useContext } from 'react';
import { context } from './State';
function Favourites(props){
  let {addfavoirte}=useContext(context)
return(<>
  <div className="card ms-3 mb-3 " id='cardmessage' style={{width: "fit-content",backgroundColor:"rgb(243, 239, 239)",}} >
  <div className="card-body" id='cardmessage'>
  <img src={props.usermessage.image} className="card-img" alt="..." id='messageuser'/>
    <span className="card-title ms-1">{props.usermessage.username}</span>
<p className="card-text ms-5" style={{color:" rgb(12, 12, 150)",fontWeight:"600",}} >
    {props.usermessage.messages[0]}</p>
  </div>
  <div className='position-relative' onClick={()=>{addfavoirte(props.usermessage.id,props.usermessage.messages[0])}}>
    <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-primary mt-2">
  <i className="fa-solid fa-plus fa-lg" ></i> 
  <i className="fa-solid fa-heart fa-lg ms-1" style={{color:"#f00505",}} ></i></span></div>
</div> 

 </>
)
}

export default Favourites
