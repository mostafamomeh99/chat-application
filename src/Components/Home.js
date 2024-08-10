import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../App.css';
import {  useContext, useEffect,useRef} from 'react';
import { context } from './State';
import Cardofmessage from './Cardofmessage';
import Favourites from './Favourites';
import NewMessages from './NewMessages';
import CardofbookMark from './Cardofbookmark'
function Home(){
  let {datainchat,showfavourite,favouritedata,mydatainchat,bookmarkdata,showbook}=useContext(context)
  let containerReftoend = useRef(null);
// scroll to bottom
  useEffect(() => {
    if (containerReftoend.current) {
      containerReftoend.current.scrollTop = containerReftoend.current.scrollHeight;
    }
  }, [datainchat, mydatainchat,showfavourite]);
    
 
  
  if(showfavourite)
  {return(
    <div className='container' id="homepage" ref={containerReftoend}  >
      {favouritedata.length===1&&Object.keys(favouritedata[0]).length ===0?

     <h1 className='text-light'>There Is No
     <i className="fa-solid fa-heart ms-1 me-1" style={{color:"#f00505",}} ></i>
      Favourite Messages 
     </h1> 

    :
 (<>
 <h1 className='text-light'>Your favourite Message</h1>
  {favouritedata.map((el,i)=>{
      return(<Favourites  usermessage={el} key={100-i} />)
  })} </>)
   }
</div> )}
else if(showbook)
   {return(<div className='container' id="homepage" ref={containerReftoend}  >
    {bookmarkdata.length===1&&Object.keys(bookmarkdata[0]).length ===0?
   <h1 className='text-light'>Therre Is No 
   <i className="fa-solid fa-bookmark ms-2 me-2"></i>
    BookMarks</h1>:
     <>
    <h1 className='text-light'>Your BookMarks</h1>
      {bookmarkdata.map((el,i)=>{
      return(<CardofbookMark  mybookmessages={el} key={1000-i} />)
  })}</>}
   </div>
  ) 
     }
  else if(!showfavourite&&!showbook){
    return(  
      <div className='container' id="homepage" ref={containerReftoend} >
  {Object.keys(datainchat).length === 0?<h1 className='text-light'>Welcome to our Channel</h1>:
  (<>
    {datainchat.messages.map((el,i)=>{
      return(<Cardofmessage  usermessage={datainchat} key={i+datainchat.id} index={i} />)
  })} 
</>
) }
   {mydatainchat.length===1&&Object.keys(mydatainchat[0]).length ===0?"":
   (mydatainchat.map((el,i)=>{
    return (<NewMessages key={el+i.toString()} mynewmessages={el} />)
   }))}
  </div>
  
  )
  }


}
export default Home