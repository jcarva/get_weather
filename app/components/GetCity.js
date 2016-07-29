import React from 'react'

const Button = () => {
  return(
    <button className="btn btn-lg btn-warning">Get Weather</button>
  )
}

const InputField = () => {
  return(
    <input className='form-control' placeholder='San Diego, California' type='text'/>
  )
}

const GetCity = (props) => {
  return(
    <div className="text-center">
      <InputField/>
      <br/>
      <Button/>
    </div>
  )
}

export default GetCity;
