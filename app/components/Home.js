import React from 'react'
import GetCityContainer from '../containers/GetCityContainer'
import Logo from './Logo'

const Home = (props) => {
    return(
      <div id="home">
        <Logo size="40%" title="Enter a City and Country" direction="column"/>
        <GetCityContainer/>
      </div>
    )
};

export default Home;
