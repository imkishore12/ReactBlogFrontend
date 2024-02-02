import React, { useContext } from 'react';
import { useParams,Link } from 'react-router-dom';
import { store } from '../Store/CreateStore';
import { useNavigate } from 'react-router-dom';
import profile from '../profile.png'
function DynamicRoute(props) {
    const navi=useNavigate();
    const id=useParams().id;
    const [contextData]=useContext(store);
    var count=0;
    return (
        <div>
            {contextData.filter((data)=>data.id==id).map((item)=>{
                return(
                    <>
                    <div className='suggestedContainer'>
                    <div className='suggestedCardContainer'>
                    
                    <Link to={`/details/${item.id}` } style={{textDecoration:'none'}}>
                    <h1>{item.title}</h1>
                    <div style={{display:'flex',border:'2px solid black',alignItems:'center',justifyContent:'space-between',padding:'10px'}}>
                    <div style={{display:'flex' ,gap:'12px'}}>
                                <img src={profile} style={{width:'60px',height:'60px'}}/>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <h2 style={{padding:'0px',margin:'0px'}}>sai kishore</h2> 
                                    <p style={{padding:'0px',margin:'0px',fontSize:'14px'}}>Oct 29th</p>
                                </div>
                               
                    </div>
                    <div style={{fontSize:'26px'}}>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-square-twitter"></i>
                                <i class="fa-brands fa-youtube"></i>
                                </div>
                    </div><br></br>
                    <img src={item.imgurl} style={{width:'100%',height:'50vh'}}/>
                    </Link>
                    <p style={{color:'black',fontSize:'18px'}}>{item.content}</p>
                    </div>
                    <div style={{display:'flex' ,gap:'12px'}}>
                                <img src={profile} style={{width:'60px',height:'60px'}}/>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <h2 style={{padding:'0px',margin:'0px'}}>sai kishore</h2> 
                                    <p style={{padding:'0px',margin:'0px',fontSize:'14px'}}>Oct 29th</p>
                                </div>
                               
                    </div>
                   <button onClick={(e)=>navi(-1)} className='button-86'>back</button>
                   
                   </div>
                   <h1 style={{marginLeft:'20px'}}>see more...</h1>
                    <div className='moresuggestscard'>
                    {contextData.filter((data)=>data.id!=id && data.category==`${item.category}` ).map((item)=>{
                        if(count<=4){
                        return(
                            <>      
                             <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>                 
                            <div className='card'>
                            <img src={item.imgurl}  style={{width:'100%',height:'50%'}}/>
                            <hr></hr>
                            <h3 style={{padding:'2px 16px'}}>{item.title.slice(0,50)}...</h3>
                            <div style={{display:'flex' ,alignItems:'center',gap:'10px'}}>
                                <img src={profile} style={{width:'40px',height:'40px'}}/>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <h4 style={{padding:'0px',margin:'0px'}}>sai kishore</h4> 
                                    <p style={{padding:'0px',margin:'0px',fontSize:'14px'}}>Oct 29th</p>
                                </div>
                                </div>
                            </div>
                            <p style={{display:'none'}}>{count++}</p>
                            </Link>     
                            
                            </>

                        )
                        }
                    })}
                    </div>
                    
                    


                    </>
                    )
            })}
        </div>
    );
}

export default DynamicRoute;