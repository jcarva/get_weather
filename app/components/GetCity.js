import React from 'react'

const Button = (props) => {
  return(
    <button
      className="btn btn-lg btn-warning"
      onClick={props.onSubmitCity}
    >{props.children}</button>
  )
};

const InputField = (props) => {
  return(
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='San Diego, California'
      type='text'/>
  )
};

const GetCity = (props) => {
  return(
    <div className="text-center">
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city}
      />
      <br/>
      <Button
        onSubmitCity={props.onSubmitCity}
      >Get Weather</Button>
    </div>
  )
};

GetCity.propTypes = {
  city: React.PropTypes.string.isRequired,
  onUpdateCity: React.PropTypes.func.isRequired,
  onSubmitCity: React.PropTypes.func.isRequired
};



export default GetCity;
