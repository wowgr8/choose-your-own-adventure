import React from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function Scene(props) {

  // const scene = useSelector(state => state.firestore.ordered.scene)
  
  return (
    <div className='scene-container'>
      <p>{props.sceneText} </p>
      <button onClick ={props.onClickOptionOne}>{props.optionOneText}  </button>
      <p>Or...</p>
      <button onClick ={props.onClickOptionTwo}>{props.optionTwoText}  </button>

    </div>
  )
}

Scene.propTypes = {
  sceneText: PropTypes.string,
  onClickOptionOne: PropTypes.func,
  onClickOptionTwo: PropTypes.func,
  OptionOneText: PropTypes.string,
  OptionTwoText: PropTypes.string
};

export default Scene;