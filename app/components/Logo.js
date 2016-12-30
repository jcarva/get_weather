import React from 'react'
const sun_cloud_image = require('../assets/images/logo.png');

const Logo = (props) => {
  return (
    <div className="logo text-center" style={{flexDirection: props.direction}}>
      <a href="http://jaelsoncarvalho.com/get_weather">
        <img src={sun_cloud_image} style={{maxWidth: props.size}} alt="Sun Cloud" title="Get Weather"/>
      </a>
      <h1>{props.title}</h1>
    </div>
  )
};

Logo.propTypes = {
  size: React.PropTypes.number,
  direction: React.PropTypes.string,
  title: React.PropTypes.string
};

Logo.defaultProps = {
  size: 70,
  direction: 'row'
};

export default Logo;
