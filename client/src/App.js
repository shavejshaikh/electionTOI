import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import "./App.css";
// import Navbar from "./components/navbar";
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
// Pages
import { Navigation, Footer, Home, Register, AdminPanel ,AdminCandPanel} from "./pages";

// Images Stored
// import ipfs from "./ipfs";


class App extends Component {
  state = { 
        storageValue: 0,
        web3: null, 
        accounts: null, 
        contract: null,
        candidate: [],
			};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];

      console.log('Deployed network contract address :',deployedNetwork.address);
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;


    console.log("Accounts is :",accounts[0]);
    // Stores a given value, 5 by default.
    contract.options.from = accounts[0]; // default from address
    // contract.options.gasPrice = '200000'; // default gas price in wei
    contract.options.gas = 50000; // provide as fallback always 5M gas
    
    // await contract.methods.set(5).send({ from: accounts[0] });
    // Get the value from the contract to prove it worked.
    // console.log(contract)
  
    // const no_of_cand = await contract.methods.num_cand().call();
    // console.log("Stored Value is ",no_of_cand);

    // const response =[];

    // for(var i=1;i<=no_of_cand;i++)
    // {
    //     const cand = await contract.methods.proposal(i).call();
    //     console.log(i," Name is ",cand.cand_name," Party name is ",cand.party_name);
    //     const candidateData="<tr><td>"+ i +"</td><td>"+ cand.party_name +"</td><td>"+ cand.cand_name +
    //     "</td><td>" + cand.vote_count +"</td></tr>"
    //     response.push(candidateData);
        
    // }
    // this.setState({ candidate: response })

    // console.log(this.state.candidate);

    const noOfCand = await contract.methods.num_cand().call();
    
    let candidate =[];
    let cand;

    for(var i=1;i<=noOfCand;i++)
    {
        cand = await contract.methods.proposal(i).call();
        candidate.push(cand);
    }
    this.setState({ candidate: candidate })

  };


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    console.log("App Contract is ",this.state.contract);
    return (
      
      <div>
        <Router>
          <Navigation Account={this.state.accounts}/>
            <Switch>
              <Route path="/" component={props => <Home Candidate={this.state.candidate}/>} exact  />}/>
  
              <Route path="/register" component={props => <Register Contract = {this.state.contract} exact /> } />
      
              <Route path="/adminPanel" component={props => <AdminPanel Contract = {this.state.contract}
               Candidate={this.state.candidate} exact /> } />

              <Route path='/adminvoter'component={AdminCandPanel} exact />
            </Switch>        
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
