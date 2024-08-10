import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
import Mymessages from './Mymessages'
import { useContext  } from 'react';
import { context } from './State';

function Cardofmessage(props){
  let {addfavoirte,favouritedata}=useContext(context)
  
return(<>
  <div className="card ms-3 mb-3 " id='cardmessage' style={{width: "fit-content",backgroundColor:"rgb(243, 239, 239)",}} >
  <div className="card-body" id='cardmessage'>
  <img src={props.usermessage.image} className="card-img" alt="..." id='messageuser'/>
    <span className="card-title text-start ms-1 fw-bold">{props.usermessage.username}</span>
<p className="card-text ms-2" style={{color:" rgb(12, 12, 150)",fontWeight:"600",}} >{props.usermessage.messages[props.index]}</p>
  </div>
  <div className='position-relative' onClick={()=>{addfavoirte(props.usermessage.id,props.usermessage.messages[props.index])}}>
    <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-primary mt-2" >
{Object.keys(favouritedata).length===0&&favouritedata.length===1?
<i className="fa-regular fa-heart fa-lg ms-1" ></i>:
  (favouritedata.some(el=>el.id===props.usermessage.id&&el.messages[0]===props.usermessage.messages[props.index]) ?
  <i className="fa-solid fa-heart fa-lg ms-1" style={{color: "#f00505",}}></i>
  :<i className="fa-regular fa-heart fa-lg ms-1"></i>)}
  </span></div>
</div> 
<Mymessages key={`${props.usermessage.image.toString()}`}  indexofaccount={`${props.index}`}/>


 </>
)
}

export default Cardofmessage

