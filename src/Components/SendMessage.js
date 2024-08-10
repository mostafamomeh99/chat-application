import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
import { useContext } from 'react';
import { context } from './State';
function SendMessage(){
    let {preparemessage,enablesend,startmessage,inputref,
      pressEnter,selectstyle,handleFileChange,fileref}=useContext(context)

return( <>
    <div className='container' id="messagepage">
        <form className="d-flex mx-2" id='messageform'>
           {/* file upload  */}
<div className="btn-group dropup me-2"  >
  <button type="button" className="btn btn-primary dropdown-toggle" id='filedrop' data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-solid fa-paperclip fa-xl "></i>
  </button>
  <ul className="dropdown-menu "  id='inputfile1'>
  <input
        type="file"
        className="form-control ms-2"
        multiple
        onChange={handleFileChange}
       id='inputfile2'
        accept="image/*,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
       ref={fileref}
       disabled={selectstyle===""?true:false}

      />
      {/* <i className="fa-regular fa-paper-plane fa-lg ms-1 me-1 momo" style={{color: "#f2f3f5",}} onClick={sendfile} >
      </i> */}
  </ul>
</div>
{/* input message */}
  <textarea type="text" className="form-control" id="messagetext" placeholder="type a message"
    ref={inputref} onChange={preparemessage} onKeyDown={pressEnter} autoComplete="off"
    disabled={selectstyle===""?true:false} />
    {enablesend?<i className="fa-regular fa-paper-plane fa-xl ms-2" style={{color: "rgb(12, 12, 150)",}}
    onClick={startmessage} ></i>:""}

</form>
       
        </div>
        </>
)
}

export default SendMessage

