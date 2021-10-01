import './App.css';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthstate } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  process.env.REACT_APP_apiKey,
  process.env.REACT_APP_authDomain,
  process.env.REACT_APP_projectId,
  process.env.REACT_APP_storageBucket,
  process.env.REACT_APP_messagingSenderId,
  process.env.REACT_APP_appId,
  process.env.REACT_APP_measurementId,
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
