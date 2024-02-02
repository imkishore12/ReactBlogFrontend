import axios from 'axios';
import React, {  useEffect, useState } from 'react';
// import { store } from '../Store/CreateStore';
import { Link } from 'react-router-dom';

function Food(props) {
    // const [arr]=useContext(store)
    const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://blogbackend-b1gs.onrender.com/food')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    var topFood=arr.filter((data)=>data.category==="topFood").map((ele,index)=>{return ele});
    var count=1;
    console.log(arr)
    return (
        <>
        
        <div className='container'>
        
        <div className='containercards'>
        <h1>Food</h1>
        <p><hr /></p>
           
            {
                
                arr.filter((data)=>data.category==="Food").map((ele,index) =>{
                    return(
                    <>
                   
                    <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
                    <div className='innercards'>
                    
                    
                    <div>
                    <img src={ele.imgurl} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{ele.title}</h2>
                    <p style={{color:'black'}}>{ele.content.slice(0,150)}...</p>
                    </div>
                    
                    
                    
                    
                    </div>
                    <hr></hr>
                    </Link>
                    
                    </>
                  
                    )
                })
            }
            
        </div>
        <div className='topposts'>
        <div className='postcards'>
            <h1>Top Posts</h1>
         
            <p><hr /></p>
            {
                
                arr.filter((data)=>data.category==="topFood").map((ele,index) =>{
                    return(
                        <>
                        <img src={topFood[0].imgurl} style={{width:'100%',height:'10%'}}/>
                    <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
                    <div style={{borderBottom:'2px solid darkmagenta', marginBottom:'10px'}}>

                    <div className='flex'>
                    
                    
                    <div>
                    <img src={ele.imgurl} style={{height:'100px',width:'150px'}}/>
                    </div>
                    <div >
                    <span className='flex'><h3 style={{ padding:'0px',margin:'0px'}}>{ele.title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>{count++}</h1>
                    </span>
                    
                    {/* <p style={{color:'black'}}>{ele.content.slice(0,150)}...</p> */}
                    </div>
                    
                    
                    
                    
                    
                    
                    </div>
                    </div>
                    </Link>
                    </>
                    )
            })
            }
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiK3wTmdw7C3LsldaW_gAr7c5pW8PP7XitLrLXYFK3jKQhvGM2VyhyF9l9MDM_-_TxNs&usqp=CAU" className='iphonead'/>
                    <img src="https://www.onlinejournal.live/watch/blog/info/english/latest/images/2.png?v=1604383537" className='iphonead'/>
                    <img src="https://gumlet.assettype.com/Prabhatkhabar/2023-10/76b4a013-067f-4851-86af-7f6909606045/What_is_Reliance_JioSpaceFiber__1_.jpg" className='iphonead'/>
                    <img src="https://images.moneycontrol.com/static-mcnews/2023/10/META-TT-770x433.jpg?impolicy=website&width=400&height=225" className='iphonead'/>

        </div>
        </div>
        </div>
        </>
    );
}

export default Food;