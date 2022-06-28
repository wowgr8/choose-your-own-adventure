import React from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function Scene(props) {

  // useFirestoreConnect([
  //   {collection: props.currentChapter}
  // ]);

  const scene = useSelector(state => state.firestore.ordered.scene)
  
  return (
    <div className='scene-container'>
      <p>Choose Something </p>
      <div>
        <input type="radio" value="Scene" name="scene" /> 
        <input type="radio" value="AltScene" name="scene" />
      </div>
      <button onClick ={props.onClickOptionOne}> </button>
      <button onClick ={props.onClickOptionTwo}> </button>

    </div>
  )
}


export default Scene;