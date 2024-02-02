import axios, { all } from 'axios';
import React, {  useEffect, useState } from 'react';
// import { store } from '../Store/CreateStore';
import { Link } from 'react-router-dom';
function Home(props) {
  // var [arr]=useContext(store)
  const[arr,setArr]=useState([])
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
    return (
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
        <Link to={`/details/${bollywood[0].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={bollywood[0].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{bollywood[0].title.slice(0,47)}...</h3>
            <h5>{bollywood[0].category}</h5>
            </div >
            </Link>
            <Link to={`/details/${hollywood[0].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={hollywood[0].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{hollywood[0].title.slice(0,47)}...</h3>
            <h5>{hollywood[0].category}</h5>
            </div>
            </Link>
            <Link to={`/details/${hollywood[4].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={hollywood[4].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{hollywood[4].title.slice(0,47)}...</h3>
            <h5>{hollywood[4].category}</h5>
            </div>
            </Link>
            <Link to={`/details/${hollywood[6].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={hollywood[6].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{hollywood[6].title.slice(0,47)}...</h3>
            <h5>{hollywood[6].category}</h5>
            </div>
            </Link>
            <Link to={`/details/${technology[6].id}`} style={{textDecoration:'none'}}>
            <div className='card'>
            <img src={technology[6].imgurl} style={{width:'100%', height:'50%'}} />
            <hr />
            <h3>{technology[6].title.slice(0,47)}...</h3>
            <h5>{technology[6].category}</h5>
            </div>
            </Link>
        </div>
        <h1>Latest Articles</h1>
        <div className='homeArticles'>
         <div className='homeArticlescards'>
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
                    
         <Link to={`/details/${hollywood[1].id}`} style={{textDecoration:'none'}}>
                    <div className='flexs'>
                    
                    
                    <div>
                    <img src={hollywood[1].imgurl} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{hollywood[1].title}</h2>
                    <p style={{color:'black'}}>{hollywood[1].content.slice(0,150)}...</p>
                    </div>
                    
                    
                    
                    
                    </div>
                    </Link>
         <Link to={`/details/${hollywood[9].id}`} style={{textDecoration:'none'}}>
                    <div className='flexs'>
                    
                    
                    <div>
                    <img src={hollywood[9].imgurl} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{hollywood[9].title}</h2>
                    <p style={{color:'black'}}>{hollywood[9].content.slice(0,150)}...</p>
                    </div>
                    
                    
                    
                    
                    </div>
                    </Link>
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
                    <img src="https://www.cinejosh.com/newsimg/newsmainimg/huge-posts-and-articles-spread-on-vijay-leo-story_b_1310231243.jpg" className='leo'/>
                    
                    

        </div>
        <div className='topcontainer'>
          {/* <div className='postcards'> */}
          <div style={{height:'30%',border:'2px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiK3wTmdw7C3LsldaW_gAr7c5pW8PP7XitLrLXYFK3jKQhvGM2VyhyF9l9MDM_-_TxNs&usqp=CAU" width="100%" height="100%"/>
          </div>
          <h1>Top Posts</h1>
          <div>
            <img src={bollywood[8].imgurl} style={{width:'100%',height:'80%'}}/>
            <span style={{display:'flex',gap:'20px'}}>
              <h2>{bollywood[8].title.slice(0,42)}...</h2>
            <h1 style={{fontSize:'65px'}}>1</h1></span>

                    <div className='topcontainercards'>

            <Link to={`/details/${technology[1].id}`} style={{textDecoration:'none'}}>
                    
                    
                   <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                    <img src={technology[1].imgurl}  style={{height:'100px',width:'150px'}}/>
                    
                    <span style={{display:'flex',gap:'20px'}}><h3 style={{ padding:'0px',margin:'0px'}}>{technology[1].title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>2</h1>
                    </span>
                    {/* <p style={{color:'black'}}>{hollywood[9].content.slice(0,150)}...</p> */}
                    </div>
                    </Link>

                    <Link to={`/details/${technology[9].id}`} style={{textDecoration:'none'}}>
                    <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                    <img src={technology[9].imgurl}  style={{height:'100px',width:'150px'}}/>
                    
                    <span style={{display:'flex',gap:'20px'}}><h3 style={{ padding:'0px',margin:'0px'}}>{technology[9].title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>3</h1>
                    </span>                    {/* <p style={{color:'black'}}>{hollywood[9].content.slice(0,150)}...</p> */}
                    </div>
                    </Link>

                    <Link to={`/details/${hollywood[2].id}`} style={{textDecoration:'none'}}>
                    <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                    <img src={hollywood[2].imgurl}  style={{height:'100px',width:'150px'}}/>
                    
                    <span style={{display:'flex',gap:'20px'}}><h3 style={{padding:'0px',margin:'0px'}}>{hollywood[2].title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>4</h1>
                    </span>                    {/* <p style={{color:'black'}}>{hollywood[9].content.slice(0,150)}...</p> */}
                    </div>
                    
                    </Link>

                    <Link to={`/details/${hollywood[3].id}`} style={{textDecoration:'none'}}>
                    <div style={{display:'flex', gap:'8px',borderBottom:'2px solid'}}>
                    <img src={hollywood[3].imgurl}  style={{height:'100px',width:'150px'}}/>
                    
                    <span style={{display:'flex',gap:'20px'}}><h3 style={{padding:'0px',margin:'0px'}}>{hollywood[3].title.slice(0,60)}...</h3>
                    <h1 style={{fontSize:'55px'}}>5</h1>
                    </span>                    {/* <p style={{color:'black'}}>{hollywood[9].content.slice(0,150)}...</p> */}
                    </div>
                    </Link>

                    </div>
                    
                    
                    
                    
                    
                   
          </div>
        </div>
        </div>
        {/* </div> */}
        <h1>Latest Stories</h1>
        <div className='homelatest'>
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
        </div>
        
        </div>
            
            
            
        
    );
}

export default Home;