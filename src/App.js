import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBfAiE2h1cA-E8pHBKHX4J7Y78QbT7lCKY",
    authDomain: "bloc-chat-86b46.firebaseapp.com",
    databaseURL: "https://bloc-chat-86b46.firebaseio.com",
    projectId: "bloc-chat-86b46",
    storageBucket: "bloc-chat-86b46.appspot.com",
    messagingSenderId: "1537770492"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Chat</h1>
        </header>
        <RoomList firebase={ firebase }/>
        
      </div>
    );
  }
}

export default App;
