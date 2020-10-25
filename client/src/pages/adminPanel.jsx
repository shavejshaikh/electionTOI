import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import "./adminPanel.css";
// import Navbar from "../components/navbar";
import ipfs from "../ipfs";


class AdminPanel extends Component {

    constructor(props)
    {
        super(props);

		this.state = {
			ipfsHash: "",
            ipfsHash1:"",
			buffer: null,
			buffer1: null
		};

		this.captureFile      = this.captureFile.bind(this);
		this.onSubmit         = this.onSubmit.bind(this);
        this.capturePartyFile = this.capturePartyFile.bind(this);
	}



    captureFile(event) 
    {
        console.log("Capture Candidate the file.......");
        event.preventDefault();
        const file = event.target.files[0]; //Change file information
        console.log(file);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = (result) => {
            this.setState({ buffer: Buffer(reader.result) });
            console.log("buffer ", this.state.buffer);

            ipfs.files.add(this.state.buffer, (error, result) => 
            {
                if (error) {
                    console.log("Error hai ", error);
                    return;
                }
                this.setState({ ipfsHash: result[0].hash });
                console.log("IPFS HASH IS ", this.state.ipfsHash);
            });
        };
    }

    capturePartyFile(event) 
    {
        console.log("Capture Party the file.......");
        event.preventDefault();
        const files = event.target.files[0]; //Change file information
        console.log("File Location is :",files);
        const readers = new window.FileReader();
        readers.readAsArrayBuffer(files);
        readers.onloadend = (result) => {
            this.setState({ buffer1: Buffer(readers.result) });
            console.log("buffer ", this.state.buffer1);

            ipfs.files.add(this.state.buffer1, (error, result) => 
            {
                if (error) {
                    console.log("Error hai ", error);
                    return;
                }
                this.setState({ ipfsHash1: result[0].hash });
                console.log("IPFS HASH IS ", this.state.ipfsHash1);
            });
        };

    }


    onSubmit = async(event)=> 
    {
        event.preventDefault();
        console.log("On Submit");

        const {name,partyname} = event.target.elements;    
        
        let account = '0xeaCa3a3c1B955c889F9A222A91aD1c4b4ceCBdc0';
        await this.props.Contract.methods.AddCandidate(name.value,partyname.value,this.state.ipfsHash,this.state.ipfsHash1).send({ from: account }).then((r) =>
        {
            console.log("*****Candidate******",r);
        });


        console.log('ifpsHash', this.state.ipfsHash);
        // console.log("Result kya hai ",result);

        console.log("Candidate Name is  :",name.value,
        "Party Name is  :",partyname.value,
        "Candidate Value is  :",this.state.ipfsHash,
        "Party Value is :",this.state.ipfsHash1);
    }



    
    render() { 
        console.log("**********Contract***************",this.props.Contract);
        // const { onSubmits, onCaptureparty, onCaptureFile } = this.props;
        return ( 
            <div className='App'>
            <h1>No. of Candidate Participated In Election</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Symbol</th>
                            <th>Party</th>
                            <th>Candidate</th>
                            <th>Candidate Image</th>
                            <th>Vote Count</th>                    
                        </tr>
                    </thead>
                   
                    <tbody>
                      { this.props.Candidate.map((cand, key) => {
                          return (
                            <tr key={key} >
                              <th scope="row">{key+1}</th>
                              <td>IPFS</td>
                              <td>{cand.party_name}</td>
                              <td>{cand.cand_name}</td>
                              <td>IPFS</td>
                              <td>{cand.vote_count}</td>
                            </tr>
                          )
                        }) }
                        
                    </tbody>
                </Table>

                <br/>
                
                <form onSubmit={this.onSubmit}>
                <h2> Register Candidate </h2>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >CANDIDATE NAME</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name"/>
                        </div>

                        <div className="form-group col-md-6">
                            <label >CANDIDATE IMG</label>
                            <input type="file" className="form-control" onChange={this.captureFile}  id="aadhaar" name="aadhaar"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}
							    alt="" className="img-ipfs" />
                        </div>
                        <div className="form-group col-md-6">
                            <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash1}`}
							    alt="" className="img-ipfs" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                           <label >PARTY NAME</label>
                            <input type="text" className="form-control" id="partyname" name="partyname" placeholder="Enter Party Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label >PARTY IMG</label>
                            <input type="file" className="form-control" onChange={this.capturePartyFile} id="aadhaar" name="aadhaar"/>
                        </div>
                    </div>

                    {/* <div className="form-row"> */}
                        <button type="submit" id="register_btn" className="btn btn-success btn-lg" >Submit</button>
                    {/* </div> */}
                </form> 
            </div>  
               );
    }
}
 
export default AdminPanel;