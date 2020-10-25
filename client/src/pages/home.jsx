import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';


class Home extends Component {
  // state = { 
  //   candidate:[]
  //  }


  // componentDidMount = async() => 
  // {
  //   const noOfCand = await this.props.Contract.methods.num_cand().call();
    
  //   let candidate =[];
  //   let cand;

  //   for(var i=1;i<=noOfCand;i++)
  //   {
  //       cand = await this.props.Contract.methods.proposal(i).call();
  //       candidate.push(cand);
  //   }
  //   this.setState({ candidate: candidate })
  // }


  render() { 
    return ( 
        <div className="home">
          <div className="container">
            <div className="row align-items-center my-5">
            
                <h1> Live Voting Result </h1>

                <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Party</th>
                        <th>Candidate</th>
                        <th>Vote </th>
                      </tr>
                    </thead>
                    <tbody>
                      { this.props.Candidate.map((cand, key) => {
                          return (
                            <tr key={key} >
                              <th scope="row">{key+1}</th>
                              <td>{cand.party_name}</td>
                              <td>{cand.cand_name}</td>
                              <td>{cand.vote_count}</td>
                            </tr>
                          )
                        }) }
                        
                    </tbody>
                  </Table> 
              </div>  
          </div>
        </div>

     );
  }


}
 
export default Home;




// function Home(props) 
// {
//   console.log(props.Contract);
//   const no_of_cand = props.Contract.methods.num_cand().call();
//   console.log("Home Stored Value is : ",no_of_cand);

//   const response =[];

//   for(var i=1;i<=no_of_cand;i++)
//   {
//       const cand = props.Contract.methods.proposal(i).call();
//       console.log(i,"Home Name is ",cand.cand_name," Party name is ",cand.party_name);
//       const candidateData="<tr><td>"+ i +"</td><td>"+ cand.party_name +"</td><td>"+ cand.cand_name +
//       "</td><td>" + cand.vote_count +"</td></tr>"
//       response.push(candidateData);
      
//   }

//   return (
//     <div className="home">
//       <div className="container">
//          <div className="row align-items-center my-5">
        
//             <h1> Live Voting Result </h1>

//             <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Party</th>
//                     <th>Candidate</th>
//                     <th>Vote</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {props.Candidate}
//                   {/* {props.Contract} */}
                  
//                   {/* <tr>
//                     <td colSpan = '3'>Total Vote</td>
//                     <td>12,000</td>
//                   </tr> */}
                  
//                 </tbody>
//               </Table> 
//           </div>  
//       </div>
//     </div>
//   );
// }

// export default Home;
