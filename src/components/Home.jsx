
import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div
        // style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}
        style={{justifyContent:'center', alignItems:'center', height: '100vh'}}
    >
      <h1>WELCOME TO YOUR GIPHY</h1>
      <br/>

      <ul>
        <li>
          <Link to="/ironmanpages">IRON MAN GIMPHY</Link>
        </li>
        <li>
          <Link to="/searchpages">SEARCH YOUR GIMPHY</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Home;