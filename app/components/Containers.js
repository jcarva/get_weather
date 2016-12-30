import React from 'react'

export const SingleComponentContainer = (props)=> {
  return (
    <div className="container">
      <div className="row text-center">
        {props.children}
      </div>
    </div>
  )
};
