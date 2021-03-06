import React from "react";
import "./styles.css";

const loginUrl =
  "https://mattcfish.auth.us-west-2.amazoncognito.com/login?response_type=token&client_id=7hlfqe4ofiv4c7ovst7krl4c3v&redirect_uri=https://mattcfish.com";

export default function App() {
  let content;
  if (window.idToken) {
    content = <div> window.idToken </div>;
  } else {
    content = (
      <div>
        <button onClick={event => (window.location.href = loginUrl)}>
          Login with Google
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <h3>Welcome</h3>
      {content}
    </div>
  );
}
