import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
function Cardofbookmark(props){
  if(Object.keys(props.mybookmessages).length!==0) 
{return(<>
        <div className='d-flex  justify-content-end position-relative' > 
    <div className="card ms-3 mb-3 me-3" style={{width: "fit-content",backgroundColor:"rgb(243, 239, 239)",}} id='messagecard1'>
      <div className="card-body" id='messagecard2'>
        <div className="card-title ms-1 text-start">
            <i className="fa-solid fa-user fa-xl" style={{color: "rgb(12, 12, 150)",}}></i>
            <span className='ms-1 fw-bold'>My account</span></div>
    <p className="card-text ms-2" style={{color:" rgb(12, 12, 150)",fontWeight:"600",}}>{props.mybookmessages.data}</p>
      </div>
    </div>
    </div>

       </>)}
    else{return(<span></span>)}   
      
      }

       export default Cardofbookmark