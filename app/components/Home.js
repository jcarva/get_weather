import React from 'react'
import GetCityContainer from '../containers/GetCityContainer'

const Home = (props) => {
    return(
      <div id="home">
        <h1>Enter a City and State</h1>
        <GetCityContainer/>
      </div>
    )
}

export default Home;
