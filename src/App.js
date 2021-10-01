import './App.css';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthstate } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // your config here
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
