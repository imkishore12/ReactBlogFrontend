import React from 'react';

function Footer(props) {
    return (
        <div className="App">
        <section class="footer">
          <div class="social">
            <a href="#ff">
              <i class="fa-brands fa-instagram"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-facebook"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
  
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
  
            <li>
              <a href="/hollywood">Hollywood</a>
            </li>
  
            <li>
              <a href="/bollywood">Bollywood</a>
            </li>
  
            <li>
              <a href="/fitness">Fitness</a>
            </li>
  
            <li>
              <a href="/technology">Technology</a>
            </li>
  
            <li>
              <a href="/food">Food</a>
            </li>
          </ul>
  
         
        </section>
      </div>
    );
}

export default Footer;

