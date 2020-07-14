import React from "react";
import "./styles.css";

const loginUrl =
  "https://mattcfish.auth.us-west-2.amazoncognito.com/login?response_type=token&client_id=7hlfqe4ofiv4c7ovst7krl4c3v&redirect_uri=https://mattcfish.com";


export default function App() {
  let content;
  if (window.idToken !== null) {
    content = <div> test </div>
  } else {
    content = (
      <button onClick={ event => (window.location.href = loginUrl)}> Login with Google</button>
    )
  }
  return (
    <div className="App">
      <h3>Welcome</h3>
      {content}
    </div>
  );
}
