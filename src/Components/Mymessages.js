import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
import { useContext } from 'react';
import { context } from './State';
function Mymessages(props){
    let {myreplay}=useContext(context)
  return(
    <>
    <div className='d-flex  justify-content-end '> 
<div className="card ms-3 mb-3 me-3" style={{width: "fit-content",backgroundColor:"rgb(243, 239, 239)",}} id='messagecard1'>
  <div className="card-body" id='messagecard2'>
    <div className="card-title text-end">
        <i className="fa-solid fa-user fa-xl" style={{color: "rgb(12, 12, 150)",}}></i>
        <span className='ms-1 fw-bold'>My account</span></div>
<p className="card-text ms-1 text-start" style={{color:" rgb(12, 12, 150)",fontWeight:"600",}}>{myreplay[0].messages[props.indexofaccount]}</p>
  </div>
</div>

</div>
   </>
)
}

export default Mymessages