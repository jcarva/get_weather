import React from 'react'
import GetCityContainer from '../containers/GetCityContainer'

const Home = (props) => {
    return(
      <div id="home">
        <a href="http://www.nytimes.com/weather/">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="sun_cloud_image" title="Weather App"/>
        </a>
        <h1>Enter a City and State</h1>
        <GetCityContainer/>
      </div>
    )
}

export default Home;
