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
      <p>choose something </p>
      <button onClick ={props.onClickOptionOne}> </button>
      <button onClick ={props.onClickOptionTwo}> </button>

    </div>
  )
}

// Scene.propTypes {
//   sceneId
//   option1text
//   option2text
//   sceneDescription
//   option1Result
//   option2Result
// }

export default Scene;