import React from 'react'
import { IndexLink } from 'react-router'
const sun_cloud_image = require('../assets/images/logo.png');

const Logo = (props) => {
  return (
    <div className="logo text-center" style={{flexDirection: props.direction}}>
      <IndexLink to="/" >
        <img src={sun_cloud_image} style={{maxWidth: props.size}} alt="Sun Cloud" title="Get Weather"/>
      </IndexLink>
      <h1>{props.title}</h1>
    </div>
  )
};

Logo.propTypes = {
  direction: React.PropTypes.string,
  title: React.PropTypes.string
};

Logo.defaultProps = {
  size: 70,
  direction: 'row'
};

export default Logo;
