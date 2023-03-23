import React, { useState, useEffect } from 'react';
import menuLinksData from './data/menu_links.json'

const Header = () => {

  // const [menuLinksData, setMenuLinksData] = useState([]);

  // const loadMenuLinksData = async() => {
  //   // Query the API gateway
  //   const resp = await fetch('https://r59jzpbpr7.execute-api.us-west-2.amazonaws.com/Production/menulink')
  //   let jsonData = await resp.json();

  //   // Assign response data to our state variable
  //   setMenuLinksData(jsonData);    
  // }

  // useEffect(() => {
  //   // load the menu linskd data from api gateway
  //   loadMenuLinksData();
  // }, []); 

  return(
      <header id="intro">
        <article className="fullheight">
          <div className="hgroup">
            <h1>Landon Hotel</h1>
            <h2>West London</h2>
            <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
          </div>
        </article>
        <nav id="nav">
          <div className="navbar">
            <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
            <ul>
              {
                menuLinksData.map((link) =>
                <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                )
              }
            </ul>
          </div>
        </nav>
      </header>
  );
}

export default Header;