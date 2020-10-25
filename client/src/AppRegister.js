import React, { Component } from "react";
import Navbar from "./components/navbar";

class AppRegister extends Component {
  render() {
    if (!this.props.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <React.Fragment>
      <Navbar Account={this.props.accounts}/>
      <div className="App">
        <h1> Live Voting Result</h1>
        {/* <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div> */}
        
      </div>
      </React.Fragment>
    );
  }
}

export default App;
