import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCommuteForm from './AddCommuteForm';
import CommuteList from './CommuteList';
import { useContext } from 'react';
import AuthContext from './AuthContext';
import { signInWithGoogle, signOut } from './firebaseConfig';

function App() {
  const { user } = useContext(AuthContext); // this the logged-in user

  return (
    <div className="App">
      {
        user ?
          <span>{user.displayName} <button onClick={signOut}>Sign Out</button> <img src={user.photoURL ?? ''} /></span> :
          <button onClick={signInWithGoogle}>Sign in</button>
      }
      <AddCommuteForm />
      <CommuteList />
    </div >
  );
}

export default App;
