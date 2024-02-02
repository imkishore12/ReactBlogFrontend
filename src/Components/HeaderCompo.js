import React from 'react'

import { Component } from 'react';
import Navbars from '../Route/Navbars';

class HeaderCompo extends Component {
  state={
    clicked:false
  }
  handleClick=()=>{
   this.setState({clicked:!this.state.clicked})
   
    
  }
  render() {
    return (
      <header className='Heading'>
      <h1 ><p className='HeadText'>The</p> Siren</h1>
      {/* <div className='burger' onClick={burgerclick}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div> */}
      <div id='mobile' onClick={this.handleClick}>
        <i
        id='bar'
        className={this.state.clicked ? "fas fa-times"  :"fas fa-bars"}></i>
       

      </div>
        
    </header>
    );
  }
}

export default HeaderCompo;


  
