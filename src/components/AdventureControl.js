import React from 'react';
import PropTypes from "prop-types";
// import Scene from "Scene";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import {useSelector} from 'react-redux';  
import {useFirestoreConnect} from 'react-redux-firebase';   


function AdventureControl(props) {

  useFirestoreConnect([
    {collection: "chapter1"},
  ]);
  // console.log("chapter1"); // 

  const scenes = useSelector(state => state.firestore.ordered);
  // console.log(scenes);

  // scenes.chapter1.foreach(function(scene) {
  //   console.log(scene.AltScene);
  // })
  return (
    <div>
      {/* <p>{this.props.firestore.get({collection: "chapter 1", doc: "1"})}</p> */}
      <p>Does this show?</p>
      {/* <h3>{scenes.AltScene}</h3> */}
      {/* <p>{getSelectedScene}</p>  */}
    </div>
  )
}

{/* this.props.firestore.get({collection: "chapter1", doc: id}).then((chapter1) => {  
      const firestoreChapter1 = {           
        location: chapter1.get("descriptions"), 
        options: chapter1.get("options),
        id: chapter1.id */}
export default withFirestore(AdventureControl);