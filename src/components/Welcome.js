import React, { useState, useEffect } from 'react';
// import welcomePicturesData from './data/welcome_links.json'


const Welcome = () => {

  const [welcomePicturesData, setwelcomePicturesData] = useState([]);

  const loadwelcomePicturesData = async() => {
    // Query the API gateway
    const resp = await fetch('https://r59jzpbpr7.execute-api.us-west-2.amazonaws.com/Production/welcome')
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setwelcomePicturesData(jsonData);    
  }

  useEffect(() => {
    // load the menu linskd data from api gateway
    loadwelcomePicturesData();
  }, []);

  return(
      <div className="scene" id="welcome">
            <article className="content">
              <div className="gallery">
              {
                welcomePicturesData.map((link) => 
                <img className={link.class} src={`https://landonhotel.com/images/hotel/intro_${link.src}.jpg`} alt={`Intro Gallery ${link.alt} Sample Pictures`} />
                )
              }
              </div>
              <h1>Welcome to the Landon&nbsp;Hotel</h1>
              <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
          </div>
  );
}



export default Welcome;
