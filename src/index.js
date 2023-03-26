import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './main.css'
import { initializeApp } from "firebase/app";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page404 } from "./components/Main/Page404";

const firebaseConfig = {
   apiKey: "AIzaSyC-1yVC32ByHyO7IIYw7AeSBAtfreTRxRo",
   authDomain: "makercode-51326.firebaseapp.com",
   projectId: "makercode-51326",
   storageBucket: "makercode-51326.appspot.com",
   messagingSenderId: "1018682779645",
   appId: "1:1018682779645:web:eac35072ce5f20c13a1b94",
   measurementId: "G-WEN81TD3BD"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<App />} />
            <Route exact path="/404" element={<Page404 />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);