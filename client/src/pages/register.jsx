import React, { Component } from 'react';
import Webcam from "react-webcam";
import * as ReactDom from 'react-dom';
// import Navbar from "../components/navbar";
import './register.css'


class Register extends Component {
   
    state ={
        voterImg:null
    }
   
    setRef = webcam => {
        this.webcam = webcam;
    };

    

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
        const element = React.createElement('img', 
            {  
                src:imageSrc  
            }  
        );
        ReactDom.render(element, document.getElementById("capturedPhoto"));
        
        console.log("Image is :",element);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(element);
        reader.onloadend = (result) => {
            this.setState({ voterImg: Buffer(reader.result) });
            console.log("voterImg ", this.state.voterImg);
        };

    };

    
    uploadregister = (event) =>
    {
        event.preventDefault();
        console.log("Upload Register");
        const {name,aadhaar} = event.target.elements;

        console.log("Name is :",name.value);
        console.log("AAdhaar is :",aadhaar.value);
    }
    
    render() { 

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return ( 
           
            <div className='register-form'>
                <div className='web-cam'>
                    <Webcam audio={false} height={350} ref={this.setRef} screenshotFormat="image/jpeg" width={350}
                    videoConstraints={videoConstraints}
                    />
                    <br/>
                    <button onClick={this.capture} className="capture-btn">Capture photo</button>
                </div>

                <form onSubmit={this.uploadregister}>

                    <div className="form-group">
                        <label >NAME</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" required/>
                        <small className="form-text text-muted">Name as on your Election Card</small>
                    </div>
                    
                    <div className="form-group">
                        <label> Image </label>
                        <div id="capturedPhoto"></div>
                    </div>

                    <div className="form-group" hidden>
                        <input type="hidden" className="form-control" id="capturedPhoto" name="avatar" onChange={this.capturevoter} filename="name" required/>
                    </div>
                    <div className="form-group">
                        <label >ELECTION CARD NO</label>
                        <input type="text" className="form-control" id="aadhaar" name="aadhaar" placeholder="Enter Election Number" required/>
                    </div>
                     
                    <div className="form-group col-md-12" >
                        <button type="submit" id="register_btn" className="btn btn-success btn-lg" >Submit</button>
                    </div>
                </form> 

            </div>
       );
    }
}
 
export default Register;