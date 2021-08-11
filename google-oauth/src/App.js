import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin clientId="390557347821-6plq7gh2bguego264o9762ubqh30ml6o.apps.googleusercontent.com" buttonText="Login" onSuccess={this.responseGoogle} onFailure={this.responseGoogle} cookiePolicy={"single_host_origin"} />
      </div>
    );
  }
}

export default App;
