import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createContext ,useRef,useState} from 'react';
import Uselocalstorage from './Uselocalstorage';
export let context=createContext();
function State(props){
  // data fetch for chat update
    let [datainchat,setdatainchat]=Uselocalstorage(`messages`,{})
    let [favouritedata,setfavouritedata]=Uselocalstorage(`messagesatfavourite`,[{}])
    let [showfavourite,setshowfavourite]=Uselocalstorage(`favourites`,false)
    let [gohomeselect,setgohomeselect]=Uselocalstorage(`Home`,false)
    let [bookmarkdata,setbookmarkdata]=Uselocalstorage(`markbookdata`,[{}])
    let [messagebookdata,setmessagebookdata]=Uselocalstorage(`markdata`,[])
    let [searchdata,setsearchdata]=useState()
    const myreplay=[{messages:["hi","i am fine" ,"was very good","feeling good"],}]
      // let [mydatainchat,setmydatainchat]=Uselocalstorage(`messagesto${Object.keys(datainchat).length === 0?"":datainchat.id}`,[])
      let [mydatainchat,setmydatainchat]=Uselocalstorage(`mymessages`,[{}])
      let inputref=useRef()
      let searchref=useRef()
      let [selectstyle,setselectstyle]=Uselocalstorage(`style now`,"")
    let[enablesend,setenablesend] =useState(false)
    let [enablesearch,setenablesearch]=useState(false)
    let [showbook,setshowbook]=useState(false)
    const userdata=[{
        username:"Mostafa Nabih",
        image:"https://media.istockphoto.com/id/507995592/photo/pensive-man-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=fVoaIqpHo07YzX0-Pw51VgDBiWPZpLyGEahSxUlai7M=",
        id:"1",
    messages:["hi","how are you?" ,"how was your day?","are you ok?"],}
        ,{ username:"Mohamed Taher",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhTQ0X2IK5A4Tg8tngsy93ReGS3zwbsriMg&s",
        id:"2",
        messages:["hi","how are you?" ,"how was your day?","are you ok?"],},
        { username:"Ahmed Mohamed",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpv86BtpMr9c1j2cuNhlasE_FKEdQOM60Jg&s",
            id:"3",
            messages:["hi","how are you?" ,"how was your day?","are you ok?"],}
            ,{ username:"Alaa Gomaa",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAa8aTxml-sp-saDQfDO9yjrGjlPJ_1DnkHA&s",
                id:"4",
                messages:["hi","how are you?" ,"how was your day?","are you ok?"],}
                ,{username:"Tarek Mokhtar",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBJidu18An0D7CzJZgislTAaGak1_iedu3A&s",
                id:"5",
                messages:["hi","how are you?" ,"how was your day?","are you ok?"],}
                ,{username:"Osama Kamal",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTRlmRh2CbO4_bXr7VRZeO2FW1BLcXGFiPA&s",
                id:"6",
                messages:["hi","how are you?" ,"how was your day?","are you ok?"],}
                ,{ username:"Mahmoud Tarek",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2S6uaHVp1tgNjbJgAhWwdsG9BU0Xq7ZxxVA&s",
                    id:"7" , 
                    messages:["hi","how are you?" ,"how was your day?","are you ok?"],}
                    ,{username:"Islam Younes",
                        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoBeRlNlWpYBJpl2wDAV9JovlhC1hyOZnHA&s",
                        id:"8" ,
                        messages:["hi","how are you?" ,"how was your day?","are you ok?"], }
                        ,{username:"Kerols Youssef",
                            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BAh1TfwEZOKC0Gwd6fqBccz4bS6tzjcQdg&s",
                            id:"9" ,
                            messages:["hi","how are you?" ,"how was your day?","are you ok?"],}]

let fileref=useRef()
// open chats
    let selectuser =(e)=>{
        let x= userdata.filter(el=>{
            return el.id===e
        })  
        setdatainchat(x[0])
      setselectstyle(e)
      setshowfavourite(false)
      setshowbook(false)
      setgohomeselect(false)
    }

    // go home
    let gohome=()=>{
      setdatainchat({})
      setshowfavourite(false)
      setshowbook(false)
      setgohomeselect(true)
      setselectstyle("")
    }

    // add to favourite
let addfavoirte=(idfav,messagefav)=>{
  // check for message is already added or not 
let check=favouritedata.filter(r=>{
  return r.id===idfav&&r.messages[0]===messagefav?r:""})
console.log(check)
if(check.length===0)
{let y= userdata.filter(el=>{
  return el.id===idfav?el:"";
})
y[0].messages=[messagefav]
console.log(y)
// we need to add objects to array of objects 
// for first time we use this condition to  don't take {} with array
if(favouritedata.length===1&&Object.keys(favouritedata[0]).length ===0) 
{  setfavouritedata([y[0]])
}
 else{setfavouritedata([y[0],...favouritedata]) 
 } }
else if(check.length!==0)
 {let y= favouritedata.filter(el=>{
  return el.messages[0]===messagefav?"":el;
})
// to intialize if array is empty , it also have empty object in array 
if(y.length===0)
  {setfavouritedata([{}])
} 
else{setfavouritedata(y)}
}}


// bookmark of my message
let addbookmark=(idofbook,messagebook)=>{
  // check for message is already added or not
let check=bookmarkdata.filter(el=>{
    return el.id===idofbook&&el.data===messagebook?el:"";
  })
  if(check.length===0)
  {let y=mydatainchat.filter(el=>{
    return el.id===idofbook&&el.data===messagebook?el:"";
  })
setbookmarkdata([...y,...bookmarkdata])
setmessagebookdata([messagebook,...messagebookdata])
}
else{let y=bookmarkdata.filter(el=>{
  return el.id===idofbook&&el.data===messagebook?"":el;
})
let f=messagebookdata.filter(el=>{
  return el!==messagebook
})
if(y.length!==0)
{setbookmarkdata(y)
  setmessagebookdata(f)
}
else{setbookmarkdata({})
setmessagebookdata([])
}
}    }
  
let gobook=()=>{
  setshowfavourite(false)
  setselectstyle("")
  setshowbook(true)
}
//end of bookmark of my message


let gofavoirte=()=>{
  console.log(favouritedata)
  setshowfavourite(true)
  setselectstyle("")
  setshowbook(false)
}
//    send data in chat
let preparemessage =(e)=>{
  let valid = /^(?!\s*$).+$/;
  if(valid.test(e.target.value))
  {setenablesend(true)
  }
  else {setenablesend(false)}
}
let startmessage=()=>{
  let y={id:selectstyle,data:inputref.current.value,type:inputref.current.type}
  if(mydatainchat.length===1&&Object.keys(mydatainchat[0]).length ===0) 
    { setmydatainchat([y])}
    else{setmydatainchat([...mydatainchat,y])}
  inputref.current.value=""
}

// for enter key
const pressEnter = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    startmessage();
  }
};

// search for users
let searchstart=(e)=>{
  let result=userdata.filter(el=>{
        return el.username.toLowerCase().includes(searchref.current.value.toLowerCase())?el:""
      })
      setsearchdata(result)
e.preventDefault();
setenablesearch(true)
}
let searchend =(e)=>{
  setsearchdata()
  setenablesearch(false)
  e.preventDefault();
}
let userEnter=(e)=>{
  if (e.key === 'Enter') {
    let result=userdata.filter(el=>{
      return el.username.toLowerCase().includes(searchref.current.value.toLowerCase())?el:""
    })
    setsearchdata(result)
setenablesearch(true)
  } }
// end of search

// send diffrent type of data
const handleFileChange = (event) => {
  const fileList = Array.from(event.target.files);
  const file = fileList[0];

  const reader = new FileReader();
  
  reader.onloadend = () => {
    const base64String = reader.result.split(',')[1]; // Extract Base64 part

    const messageObject = {
      id: selectstyle,
      data: {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        base64: base64String
      },
      type: "file"
    };

    // Save to mydatainchat
    setmydatainchat([...mydatainchat, messageObject]);
  };

  reader.readAsDataURL(file); // Convert file to Base64
  fileref.current.value=""
};




    return(<>
    <context.Provider 
value={{userdata,selectuser,datainchat,myreplay,selectstyle,gohome,addfavoirte,favouritedata,searchstart,enablesearch,searchdata,searchref,searchend,userEnter,showbook,gobook,
showfavourite,gofavoirte,gohomeselect,preparemessage,enablesend,startmessage,inputref,mydatainchat,pressEnter,
addbookmark,bookmarkdata,messagebookdata,handleFileChange,fileref}}>
{props.children}
    </context.Provider>
     </>
    )
    
    
    }
    
    export default  State
