import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Upload from './Upload';
import '../App.css';
import { useContext } from 'react';
import { context } from './State';
function NewMessages(props){
  let {selectstyle,addbookmark,messagebookdata}=useContext(context)

  if(props.mynewmessages.id===selectstyle&&props.mynewmessages.type==="textarea")
    {return(<>
        <div className='d-flex  justify-content-end position-relative' > 
    <div className="card ms-3 mb-3 me-3" style={{width: "fit-content",backgroundColor:"rgb(243, 239, 239)",}} id='messagecard1'>
      <div className="card-body" id='messagecard2'>
        <div className="card-title ms-1 text-start">
            <i className="fa-solid fa-user fa-xl" style={{color: "rgb(12, 12, 150)",}}></i>
            <span className='ms-1 fw-bold'>My account</span></div>
    <p className="card-text ms-2" style={{color:" rgb(12, 12, 150)",fontWeight:"600",}}>{props.mynewmessages.data}</p>
      </div>
    </div>
    <div className='position-absolute bottom-0 end-0  mb-2 ms-2' onClick={() => { addbookmark(selectstyle, props.mynewmessages.data) }}>
            <span className="badge rounded-pill bg-primary">
            {messagebookdata.length!==0?(messagebookdata.includes(props.mynewmessages.data)?
            <i className="fa-solid fa-bookmark fa-lg"></i>
            :<i className="fa-regular fa-bookmark fa-lg"></i>):<i className="fa-regular fa-bookmark fa-lg"></i>}
        
            </span>
          </div>

    

    </div>

       </>)}
      else if(props.mynewmessages.id===selectstyle&&props.mynewmessages.type==="file")
      {
        return(
          <Upload format={props.mynewmessages}/>
        )
      }
// else if(props.mynewmessages[0].id===undefined)
//       {
        
//  return(
//   <Upload  filefromme={props.mynewmessages[0]}/> ) 
// } 


}

export default NewMessages