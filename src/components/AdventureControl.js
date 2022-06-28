import React from 'react';
import PropTypes from "prop-types";
// import Scene from "Scene";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/compat/app';
import {useSelector} from 'react-redux';  
import {useFirestoreConnect} from 'react-redux-firebase';   
// import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";



function AdventureControl(props) {

  useFirestoreConnect([
    {collection: "chapter1"},
  ]);

  const db = firebase.firestore();

  const [chapter, setChapter ] = useState("chapter1");
  const [sceneNumber, setSceneNumber ] = useState("1");
  const [sceneText, setSceneText ] = useState("");



  function changeScene() {
    const randomNum = Math.floor(Math.random() * 3).toString();
    var docRef = db.collection("chapter1").doc(randomNum);
    docRef.get().then((doc) => {
      console.log("Document data: ", doc.data().Scene);
    });   
  }

//changeScene(chapter, sceneNumber);
//handleOptionOne =(id)=> {
// this.props.firestone.get
//}

  return (
    <div>
      {/* <p>{this.props.firestore.get({collection: "chapter 1", doc: "1"})}</p> */}
      <p>Does this show?</p>

      {/* currentVisibleState =<Scene onSceneSelection ={ 
        scene = {this.state.selectedScene} 
        onClickOptionOne ={ this.handleOptionOne} 
        onClickOptionTwo= {this.handleOptionTwo} */} 
    </div>
  )
}


export default withFirestore(AdventureControl);

//onClick  () { 
//  this.setState( state =>{( 
// scene : random (db.collection(chapter).doc(scene))
//)})
//}

// function of getNewScenes
// if one is choosen then go to db.scene.river
// if two is choose then got to db ....desert

//function changeScene 
//  const [sceneNumber, setSceneNumber ] = useState("1");
//return  ( 
  //<button> onClick ()=> setSceneNumber({randomizedNumber})) </button>
//)//setScene (()=> getNewScene)
