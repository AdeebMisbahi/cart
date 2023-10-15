import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAsRxwvMnAAxbPnNE9F8yW89yjaX9YAfQg",
  authDomain: "cart-dbff5.firebaseapp.com",
  projectId: "cart-dbff5",
  storageBucket: "cart-dbff5.appspot.com",
  messagingSenderId: "207335578897",
  appId: "1:207335578897:web:8f57ebb0be8aec335fc0b0"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
 
);
