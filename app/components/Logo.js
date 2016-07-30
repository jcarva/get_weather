import React from 'react'

const Logo = (props) => {
  return (
    <div className="logo text-center" style={{flexDirection: props.direction}}>
      <a href="http://www.nytimes.com/weather/">
        <img style={{maxWidth: props.size}} src="/app/assets/images/cover.png" alt="sun_cloud_image" title="Weather App"/>
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
