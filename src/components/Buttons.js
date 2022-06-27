import React from 'react';

function Buttons(props) {

  return (
    <React.Fragment>
      <div className='button-container'>
        <button>{props.optionOneText}</button>
        <button>{props.optionTwoText}</button>
      </div>
    </React.Fragment>
  )
}