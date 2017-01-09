import React from 'react'

const CurrentLocation = (props) => {
  return(
    <a rel="popover" data-toggle="popover" data-trigger="focus" data-content="Click here to get the weather of your current location" onClick={props.onClickLocation}>
      <div id="current-location">
        <span className="glyphicon glyphicon-map-marker"/>
      </div>
    </a>
  )
};

export default CurrentLocation;
