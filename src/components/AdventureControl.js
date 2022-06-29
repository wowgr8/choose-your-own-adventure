import React from 'react';
import PropTypes from "prop-types";
// import Scene from "Scene";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/compat/app';
import {useSelector} from 'react-redux';  
import {useFirestoreConnect} from 'react-redux-firebase';   
//import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";
import { doc, getDoc } from 'firebase/firestore'



function AdventureControl(props) {

  useFirestoreConnect([
    {collection: "chapter1"},
  ]);

  const db = firebase.firestore();

  // const [chapter, setChapter ] = useState("chapter1");
  // const [sceneNumber, setSceneNumber ] = useState("1");
  // const [sceneText, setSceneText ] = useState("");

  const [currentScene, setCurrentScene] = useState({});



  // function changeScene() {
  //   const randomNum = Math.floor(Math.random() * 3).toString();
  //   var docRef = db.collection("chapter1").doc(randomNum);
  //   docRef.get().then((doc) => {
  //     console.log("Document data: ", doc.data().Scene);
  //   });   
  // }

  
  async function changeScene2() {
    const randomNum = Math.floor(1 + (Math.random() * 2)).toString();
    const docRef = doc(db, "chapter1", randomNum);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setCurrentScene(docSnap.data());
      console.log("Document data:", currentScene.Scene);
      
    } else {
      console.log("No such document!");
    }
  }
  // function getSceneText() {
  //   const sceneText = currentScene.data().Scene;
  //   console.log(sceneText);
  //   return sceneText;
  // }

//changeScene(chapter, sceneNumber);
//handleOptionOne =(id)=> {
// this.props.firestone.get
//}

  return (
    <div>
      {/* <p>{this.props.firestore.get({collection: "chapter 1", doc: "1"})}</p> */}
      <p>Does this show?</p>
      <button onClick={changeScene2}>Change Scene</button>
      <p>{currentScene.Scene}</p>

    </div>
  )
}


export default withFirestore(AdventureControl);

// function of getNewScenes
// if one is choosen then go to db.scene.river
// if two is choose then got to db ....desert

//function changeScene 
//  const [sceneNumber, setSceneNumber ] = useState("1");
//return  ( 
  //<button> onClick ()=> setSceneNumber({randomizedNumber})) </button>
//)//setScene (()=> getNewScene)
