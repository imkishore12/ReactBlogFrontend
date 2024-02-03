import axios from 'axios';
import React, {  useEffect, useState } from 'react';
// import { store } from '../Store/CreateStore';
import { Link} from 'react-router-dom';
function Hollywood(props) {
    // const [arr]=useContext(store)
    const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://blogbackend-b1gs.onrender.com/hollywood')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    var topHolly = arr.filter((data)=>data.category==="topHollywood").map((ele,index)=>{return ele})
    var Holly = arr.filter((data)=>data.category==="Hollywood").map((ele,index)=>{return ele})
    var count=1;
    
    console.log(Holly)
    return (
        <>
        <div className='container'>
        <div className='containercards'>
           
        <h1>Hollywood</h1>
        <p><hr /></p>
            {
                
                arr.filter((data)=>data.category==="Hollywood").map((ele,index) =>{
                    return(
                    <>
                    <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
                    <div  className='innercards'>
                    
                    
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
            {
                topHolly?.filter((blog, index) => index === 0).map((blog, index) => {
                  return <div >
                    <img src={blog.imgurl} alt="Poster"  style={{width:'100%',height:'10%'}}/>
                    {/* <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div> */}
                  </div>
                })
              }
            <p><hr /></p>
            {
                
                arr.filter((data)=>data.category==="topHollywood").map((ele,index) =>{
                    return(
                        <>
                        {/* <img src={topHolly[0].imgurl} style={{width:'100%',height:'10%'}}/> */}
                    <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
   
                    <div style={{borderBottom:'2px solid darkmagenta', marginBottom:'10px'}}>
                    <div className='flex'>
                    
                    
                    <div>
                    <img src={ele.imgurl} style={{height:'100px',width:'150px'}}/>
                    </div>
                    <div >
                    <span style={{display:'flex'}}><h3 style={{ padding:'0px',margin:'0px'}}>{ele.title.slice(0,60)}...</h3>
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
                    <img src="https://i.gadgets360cdn.com/large/reliance_disney_large_1703501047395.jpg?downsize=950:*" className='iphonead'/>
                    <img src="https://gumlet.assettype.com/Prabhatkhabar/2023-10/76b4a013-067f-4851-86af-7f6909606045/What_is_Reliance_JioSpaceFiber__1_.jpg" className='iphonead'/>
                    <img src="https://images.moneycontrol.com/static-mcnews/2023/10/META-TT-770x433.jpg?impolicy=website&width=400&height=225" className='iphonead'/>
        </div>
        </div>
        </div>
        </>
    );
}


export default Hollywood;