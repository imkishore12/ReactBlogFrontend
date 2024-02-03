import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { store } from '../Store/CreateStore';
// import { Link } from 'react-router-dom';
function Home(props) {
  // var [arr]=useContext(store)
  var [arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://blogbackend-b1gs.onrender.com/bollywood')
    .then((response)=>setArr(response.data))
    // .catch((err)=>console.log(err))
  },[])
  console.log(arr)
  var bollywood = arr.filter((data)=>data.category==="Bollywood").map((ele,index)=>{return ele})
  var hollywood = arr.filter((data)=>data.category==="Hollywood").map((ele,index)=>{return ele})
  var technology = arr.filter((data)=>data.category==="Technology").map((ele,index)=>{return ele})
  var fitness = arr.filter((data)=>data.category==="Fitness").map((ele,index)=>{return ele})
  console.log(bollywood);
  console.log(hollywood);
  console.log(technology);
  console.log(fitness);
  return(
//     <>
//   <div>
//             <h1>home page</h1>
            
//         <div className="Hero-Section">
//         <div className="poster poster-1">
//           <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ixNwB.img?w=768&h=576&m=6" alt="poster" className='posterImage' />
//         </div>
//         <div className="poster poster-2">
//           <img src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1iyyZt.img?w=768&h=403&m=6&x=550&y=66&s=108&d=108' alt="poster" className='posterImage' />
//         </div>
//         <div className="poster poster-3">
//           <img src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ivQ8R.img?w=768&h=432&m=6' alt="poster" className='posterImage' />
//         </div>
//         </div>

//         <h1>The Latest</h1>
//         <div className='homelatest'>
//           {
            
//         <Link to={`/details/${bollywood[0].id}`} style={{textDecoration:'none'}}>
//             <div className='card'>
//             <img src={bollywood[0].imgurl} style={{width:'100%', height:'50%'}} />
//             <hr />
//             <h3>{bollywood[0].title.slice(0,47)}...</h3>
//             <h5>{bollywood[0].category}</h5>
//             </div >
//             </Link>
// }
//         </div>
//         </div>
//         </>







<div>
            <h1>home page</h1>
            
        <div className="Hero-Section">
        <div className="poster poster-1">
          <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ixNwB.img?w=768&h=576&m=6" alt="poster" className='posterImage' />
        </div>
        <div className="poster poster-2">
          <img src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1iyyZt.img?w=768&h=403&m=6&x=550&y=66&s=108&d=108' alt="poster" className='posterImage' />
        </div>
        <div className="poster poster-3">
          <img src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ivQ8R.img?w=768&h=432&m=6' alt="poster" className='posterImage' />
        </div>
        </div>
        <h1>The Latest</h1>
        <div className='homelatest'>
          {
          bollywood?.filter((blog,index)=>index===0).map((blog,index)=>{
            return <div>
              <Link to={`/details/${blog.id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={blog.imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{blog.title.slice(0,47)}...</h3>
            <h5>{blog.category}</h5>
            </div >
            </Link>
            </div>
          })
          }
          {
          hollywood?.filter((blog,index)=>index===0).map((blog,index)=>{
            return <div>
              <Link to={`/details/${blog.id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={blog.imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{blog.title.slice(0,47)}...</h3>
            <h5>{blog.category}</h5>
            </div >
            </Link>
            </div>
          })
          }
          {
          hollywood?.filter((blog,index)=>index===4).map((blog,index)=>{
            return <div>
              <Link to={`/details/${blog.id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={blog.imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{blog.title.slice(0,47)}...</h3>
            <h5>{blog.category}</h5>
            </div >
            </Link>
            </div>
          })
          }
          {
          hollywood?.filter((blog,index)=>index===6).map((blog,index)=>{
            return <div>
              <Link to={`/details/${blog.id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={blog.imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{blog.title.slice(0,47)}...</h3>
            <h5>{blog.category}</h5>
            </div >
            </Link>
            </div>
          })
          }
          {
          technology?.filter((blog,index)=>index===6).map((blog,index)=>{
            return <div>
              <Link to={`/details/${blog.id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={blog.imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{blog.title.slice(0,47)}...</h3>
            <h5>{blog.category}</h5>
            </div >
            </Link>
            </div>
          })
          }
        
        </div>
        <h1>Latest Articles</h1>
        <div className='homeArticles'>
         <div className='homeArticlescards'>
         {
          bollywood?.filter((blog,index)=>index===1).map((blog,index)=>{
            return <div>
              <Link to={`/details/${bollywood[1].id}`} style={{textDecoration:'none'}}>
                    <div className='flexs'>
                    
                    
                    <div>
                    <img src={bollywood[1].imgurl} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{bollywood[1].title}</h2>
                    <p style={{color:'black'}}>{bollywood[1].content.slice(0,150)}...</p>
                    </div>
                    
                    
                    
                    
                    </div>
                    </Link>
            </div>
          })
          }
         {
          hollywood?.filter((blog,index)=>index==1 || index==9).map((blog,index)=>{
            return <div>
              <Link to={`/details/${hollywood[index].id}`} style={{textDecoration:'none'}}>
                    <div className='flexs'>
                    
                    
                    <div>
                    <img src={hollywood[index].imgurl} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{hollywood[index].title}</h2>
                    <p style={{color:'black'}}>{hollywood[index].content.slice(0,150)}...</p>
                    </div>
                    
                    
                    
                    
                    </div>
                    </Link>
            </div>
          })
          }
          {
          bollywood?.filter((blog,index)=>index===8).map((blog,index)=>{
            return <div>
              <Link to={`/details/${bollywood[8].id}`} style={{textDecoration:'none'}}>
                    <div className='flexs'>
                    
                    
                    <div>
                    <img src={bollywood[8].imgurl} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{bollywood[8].title}</h2>
                    <p style={{color:'black'}}>{bollywood[8].content.slice(0,150)}...</p>
                    </div>
                    
                    
                    
                    
                    </div>
                    </Link>
            </div>
          })
          }
         
                    
        
         
                    <img src="https://www.cinejosh.com/newsimg/newsmainimg/huge-posts-and-articles-spread-on-vijay-leo-story_b_1310231243.jpg" className='leo'/>
                    
                    

        </div>
        <div className='topcontainer'>
          <div style={{height:'30%',border:'2px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiK3wTmdw7C3LsldaW_gAr7c5pW8PP7XitLrLXYFK3jKQhvGM2VyhyF9l9MDM_-_TxNs&usqp=CAU" width="100%" height="100%"/>
          </div>
          <h1>Top Posts</h1>
          <div>
            {
          bollywood?.filter((blog,index)=>index===8).map((blog,index)=>{
            return<>
            <img src={bollywood[8].imgurl} style={{width:'100%',height:'80%'}}/>
            <span style={{display:'flex',gap:'20px'}}>
              <h2>{bollywood[8].title.slice(0,42)}...</h2>
            <h1 style={{fontSize:'65px'}}>1</h1></span>
            </>
            })
            }

                    <div className='topcontainercards'>

                    {
          arr?.filter((blog,index)=>index===8).map((blog,index)=>{
            return<>
            <Link to={`/details/${technology[1].id}`} style={{textDecoration:'none'}}>
                    
                    
                    <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                     <img src={technology[1].imgurl}  style={{height:'100px',width:'150px'}}/>
                     
                     <span style={{display:'flex',gap:'20px'}}><h3 style={{ padding:'0px',margin:'0px'}}>{technology[1].title.slice(0,60)}...</h3>
                     <h1 style={{fontSize:'55px'}}>2</h1>
                     </span>
                     </div>
                     </Link>
                     <Link to={`/details/${technology[9].id}`} style={{textDecoration:'none'}}>
                    <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                    <img src={technology[9].imgurl}  style={{height:'100px',width:'150px'}}/>
                    
                    <span style={{display:'flex',gap:'20px'}}><h3 style={{ padding:'0px',margin:'0px'}}>{technology[9].title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>3</h1>
                    </span>                   
                    </div>
                    </Link>
                    <Link to={`/details/${hollywood[2].id}`} style={{textDecoration:'none'}}>
                    <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                    <img src={hollywood[2].imgurl}  style={{height:'100px',width:'150px'}}/>
                    
                    <span style={{display:'flex',gap:'20px'}}><h3 style={{padding:'0px',margin:'0px'}}>{hollywood[2].title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>4</h1>
                    </span>                   
                    </div>
                    
                    </Link>

                    <Link to={`/details/${hollywood[3].id}`} style={{textDecoration:'none'}}>
                    <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                    <img src={hollywood[3].imgurl}  style={{height:'100px',width:'150px'}}/>
                    
                    <span style={{display:'flex',gap:'20px'}}><h3 style={{padding:'0px',margin:'0px'}}>{hollywood[3].title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>5</h1>
                    </span>                   
                    </div>
                    </Link>

            </>
            })
            }


                    </div>
                    
                    
                    
                    
                    
                   
          </div>
        </div>
        </div>
        {/* </div> */}
        <h1>Latest Stories</h1>
        <div className='homelatest'>
          {
        arr?.filter((blog,index)=>index===8).map((blog,index)=>{
            return<>
            <Link to={`/details/${bollywood[2].id}`} style={{textDecoration:'none'}}>
        <div className='card'>
            <img src={bollywood[2].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{bollywood[2].title.slice(0,47)}...</h3>
            <h5>{bollywood[2].category}</h5>
            </div >
            </Link>
            <Link to={`/details/${hollywood[5].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={hollywood[5].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{hollywood[5].title.slice(0,47)}...</h3>
            <h5>{hollywood[5].category}</h5>
            </div>
            </Link>
            <Link to={`/details/${hollywood[8].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={hollywood[8].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{hollywood[8].title.slice(0,47)}...</h3>
            <h5>{hollywood[8].category}</h5>
            </div></Link>
            <Link to={`/details/${fitness[6].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={fitness[6].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{fitness[6].title.slice(0,47)}...</h3>
            <h5>{fitness[6].category}</h5>
            </div></Link>
            <Link to={`/details/${technology[8].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={technology[8].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{technology[8].title.slice(0,47)}...</h3>
        
            <h5>{technology[8].category}</h5>
            </div>
            </Link>
            </>})}
        
        </div>
        
        </div>




            
  )
  
  
    
      
}

export default Home;