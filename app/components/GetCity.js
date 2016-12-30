import React from 'react'

const Button = (props) => {
  return(
    <button
      className="btn btn-lg btn-warning"
      type="submit"
    >{props.children}</button>
  )
};

const InputField = (props) => {
  return(
    <input
      className='form-control'
      placeholder='San Diego, California'
      type='text'
      onChange={props.onUpdateCity}
      value={props.city}
    />
  )
};

const GetCity = (props) => {
  return(
    <form onSubmit={props.onSubmitCity}>
      <div className="get-city text-center" style={{flexDirection: props.direction}}>
        <InputField
          onUpdateCity={props.onUpdateCity}
          city={props.city}
        />
        <Button
          onSubmitCity={props.onSubmitCity}
        >Get Weather</Button>
      </div>
    </form>
  )
};

GetCity.propTypes = {
  city: React.PropTypes.string.isRequired,
  direction: React.PropTypes.string.isRequired,
  onUpdateCity: React.PropTypes.func.isRequired,
  onSubmitCity: React.PropTypes.func.isRequired
};

export default GetCity;
