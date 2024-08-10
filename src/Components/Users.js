import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
import { useContext } from 'react';
import { context } from './State';
import Cardofuser from './Cardofusers';
function Users(){
let {userdata,enablesearch,searchdata}=useContext(context)
if(!enablesearch)
return(
    <div className='container mt-2' id="usersspage">
{userdata.map(el=>{
    return (<Cardofuser user={el} key={el.username}/>)
})}
</div>
)
else{
    return(
        <div className='container mt-2' id="usersspage">
        {searchdata.length===0?<h1>No Result</h1>:searchdata.map(el=>{
            return (<Cardofuser user={el} key={el.username}/>)
        })}
        </div>
)}

}

export default Users