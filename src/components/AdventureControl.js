import React from 'react';
import PropTypes from "prop-types";
import Scene from "./Scene";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/compat/app';
import {useSelector} from 'react-redux';  
import {useFirestoreConnect} from 'react-redux-firebase';   
import { useState } from "react";
import { doc, getDoc } from 'firebase/firestore'



function AdventureControl(props) {

  useFirestoreConnect([
    {collection: "chapter1"},
  ]);

  const db = firebase.firestore();

  const [currentScene, setCurrentScene] = useState(() => grabFirstScene()); // default to doc 0?

  async function grabFirstScene() {
    const docRef = doc(db, "chapter1", "0");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setCurrentScene(docSnap.data());
      return docSnap.data();
      
    } else {
      return"No such document!";
    }
  }
  
  async function changeScene1(nextScene) {
    const docRef = doc(db, "chapter1", nextScene);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setCurrentScene(docSnap.data());
      console.log("Document data:", currentScene.Scene);
      
    } else {
      console.log("No such document!");
    }
  }
  async function changeScene2(nextScene) {
    const docRef = doc(db, "chapter1", nextScene);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setCurrentScene(docSnap.data());
      console.log("Document data:", currentScene.Scene);
      
    } else {
      console.log("No such document!");
    }
  }
  if (isLoaded()) {
    return (
      <div>
        < Scene
        onClickOptionOne = {() => changeScene1(currentScene.Option1Result)}
        onClickOptionTwo = {() => changeScene2(currentScene.Option2Result)}
        sceneText = {currentScene.SceneText}
        optionOneText = {currentScene.Option1Text}
        optionTwoText = {currentScene.Option2Text}
        />
      </div>
    )
  } else { 
    return(
      <h2>Loading...</h2>
    )   
  }
}

export default withFirestore(AdventureControl);