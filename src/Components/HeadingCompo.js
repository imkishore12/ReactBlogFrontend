import React from 'react'

function HeadingCompo() {

  let showNav = () => {
    let navBar = document.querySelector("#navbar");
    let navMenuButton = document.querySelector(".mobile");
    navBar.classList.toggle("activeNav");
    navMenuButton.classList.toggle("fa-xmark");
  }

  return (
    <header className='Heading'>
      <h1 ><p className='HeadText'>The</p> Siren</h1>
      <div id='mobile'>
      <i className="fa-solid fa-bars" onClick={showNav}></i>
      </div>
    </header>
  )
}

export default HeadingCompo