import React from 'react'
import { SingleComponentContainer } from '../components/Containers'

const LoadingUI = () => {
  return (
    <div className="loading-ui">
      <div className="loader"></div>
      <h1>LOOKING OUTSIDE FOR YOU...</h1><h1>ONE SECOND</h1>

      <div className="icon sun-shower">
        <div className="cloud"></div>
        <div className="sun">
          <div className="rays"></div>
        </div>
        <div className="rain"></div>
      </div>

      <div className="icon thunder-storm">
        <div className="cloud"></div>
        <div className="lightning">
          <div className="bolt"></div>
          <div className="bolt"></div>
        </div>
      </div>

      <div className="icon cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>

      <div className="icon flurries">
        <div className="cloud"></div>
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      </div>

      <div className="icon sunny">
        <div className="sun">
          <div className="rays"></div>
        </div>
      </div>

      <div className="icon rainy">
        <div className="cloud"></div>
        <div className="rain"></div>
      </div>
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
