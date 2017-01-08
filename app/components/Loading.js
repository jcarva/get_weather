import React from 'react'
import { SingleComponentContainer } from '../components/Containers'

const LoadingUI = () => {
  return (
    <div className="loading-ui">
      <div className="loader"></div>
      <h1>LOOKING OUTSIDE FOR YOU...</h1><h1>ONE SECOND</h1>
    </div>
  )
};

const Loading = () => {
  return(
    <SingleComponentContainer>
      <div className="col-lg-8 col-lg-offset-2">
        <LoadingUI/>
      </div>
    </SingleComponentContainer>
  )
};

export default Loading;

//Based on (https://dribbble.com/shots/2097042-Widget-Weather)Dribbble by kylor
