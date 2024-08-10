import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
// import Uselocalstorage from './Uselocalstorage'
import { useContext} from 'react';
import { context } from './State';


function Cardofuser(props){
    let {selectuser,selectstyle}=useContext(context)
return(
    <>
        {<div className='row row-cols-2' id={`${selectstyle===props.user.id?"userrowchoose":"userrow"}`} 
        onClick={()=>{selectuser(props.user.id)}} > 
            <div className='col-md-3  col-sm-4  col-lg-3 col-xl-3 col-3'  > 
                <img src={props.user.image} className="card-img mt-2" alt="..." id='imageuser' 
                /></div>
            <div className='col-md-9 col-sm-8  col-lg-9 col-xl-9 col-9'   >
            <div className="card" id={`${selectstyle===props.user.id?"bodyuserchoose":"bodyuser"}`} >
            <div className="card-body" >
    <h5 className="card-title" id='usernameatcard'> 
    {props.user.username}</h5>
    <p className="card-text" id='usernameatcardp'><i className="fa-solid fa-circle fa-xs" style={{color: "#18e60a",}}></i> active now</p>
  </div>
            </div>
        </div>
</div>}
</>
)
}

  
export default Cardofuser