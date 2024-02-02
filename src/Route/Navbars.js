
import { NavLink } from 'react-router-dom';


import React, { Component } from 'react';

class Navbars extends Component {
    state={
        clicked:false
      }
      handleClick=()=>{
       this.setState({clicked:!this.state.clicked})
       
        
      }
    render() {
        return (
            <>
            
            <header className='Heading'>
         <h1 ><p className='HeadText'>The</p> Siren</h1>
         
         <div id='mobile' onClick={this.handleClick}>
           <i
           id='bar'
           className={this.state.clicked ? "fas fa-times"  :"fas fa-bars"}></i>
          
   
         </div>
           
       </header>
   <nav >
   <ul id='navbar' className={this.state.clicked ? "#navbar active": "#navbar"}>
   <NavLink to='/'><li>Home</li></NavLink>
   <NavLink to='/hollywood'><li>Hollywood</li></NavLink>
   <NavLink to='/bollywood'><li>Bollywood</li></NavLink>
   <NavLink to='/fitness'><li>Fitness</li></NavLink>
   <NavLink to='/technology'><li>Technology</li></NavLink>
   <NavLink to='/food'><li>Food</li></NavLink>
   {/* <h1>hii{this.state}</h1> */}
   </ul>
   
   </nav>
   </>
        );
    }
}

export default Navbars;

