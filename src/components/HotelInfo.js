import React, { useState, useEffect } from 'react';
// import aminitiesListData from './data/aminities_list.json'
// import accesibilityListData from './data/accesibility_list.json'
// import arrivalListData from './data/arrival_list.json'


const HotelInfo = () => {

  const [aminitiesListData, setaminitiesListData] = useState([]);
  const [accesibilityListData, setaccesibilityListData] = useState([]);
  const [arrivalListData, setarrivalListData] = useState([]);


  const loadaminitiesListData = async() => {
    // Query the API gateway
    const resp = await fetch('https://r59jzpbpr7.execute-api.us-west-2.amazonaws.com/Production/aminities')
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setaminitiesListData(jsonData);    
  }

  const loadaccesibilityListData = async() => {
    // Query the API gateway
    const resp = await fetch('https://r59jzpbpr7.execute-api.us-west-2.amazonaws.com/Production/accessibility')
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setaccesibilityListData(jsonData);    
  }

  const loadarrivalListData = async() => {
    // Query the API gateway
    const resp = await fetch('https://r59jzpbpr7.execute-api.us-west-2.amazonaws.com/Production/arrival')
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setarrivalListData(jsonData);    
  }

  useEffect(() => {
    // load the aminities data from api gateway
    loadaminitiesListData();

    // load the accesibilities data from api gateway
    loadaccesibilityListData();

    // load the arrival data from api gateway
    loadarrivalListData()
  }, []); 

  return(
      <div className="scene" id="hotelinfo">
            <article className="heading">
              <h1>Required Info</h1>
            </article>
            <article id="usefulinfo">
              <section id="arrivalinfo">
                <h2>Arrival Information</h2>
                <ul>
                  {
                    arrivalListData.map((list) =>
                    <li><strong>{`${list.strong}:`}</strong>{` ${list.text}`}</li>
                    )
                  }
                </ul>
              </section>
              <section className="checklist" id="services">
                <h2>Services and Amenities</h2>
                <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
                <ul>
                  {
                    aminitiesListData.map((list) =>
                    <li>{list.text}</li>
                    )
                  }
                </ul>
              </section>
              <section className="checklist" id="accessibility">
                <h2>Accessibility</h2>
                <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
                <ul>
                  {
                    accesibilityListData.map((list) => 
                    <li>{list.text}</li>
                    )
                  }
                </ul>
              </section>
            </article>
            <article id="greenprogram">
              <h2>Landon Green Program</h2>
              <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
            </article>
          </div>
  );
}



export default HotelInfo
