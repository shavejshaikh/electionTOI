// // SPDX-License-Identifier: MIT
// pragma solidity >=0.4.0 <0.7.0;


// contract SimpleStorage {
//   uint storedData;

//   constructor () public {
//       set(123);
//   }

//   function set(uint x) public {
//     storedData = x;
//   }

//   function get() public view returns (uint) {
//     return storedData;
//   }
// }

pragma solidity >=0.4.0 <=0.6.0;


contract SimpleStorage{
    
    struct Voter{
        string name; // user Name
        string elect_card;// Email Id
        string img; // Image of User for verififcation
        bool voted; // Voted or not
        bool auth; //if true when admin verify it;
        uint cand_vote; //Candidate who got vote
    }
    
    struct Proposal{
        string cand_name; // Candidate Name
        string party_name; // Name of the Party
        string party_img; // Party Image i.e Hash value
        string cand_img;  // Candidate Image
        uint vote_count;  // Vote Count 
    }
    
    mapping(uint => Proposal) public proposal;
    mapping(address => Voter) public voter;
    
    uint public num_cand;
    
    constructor () public{
        AddCandidate('Amit Shah',"BJP",'qqqqqqqqqqqqqq','yyyyyyyyy');
        AddCandidate('Rahul Gandhi',"CONGRESS",'qqqqqqqqqqqqqq','yyyyyyyyy');
        AddCandidate('Arvind Kejriwal',"AAM ADAMI PARTY",'qqqqqqqqqqqqqq','yyyyyyyyy');
    }
    
    function AddCandidate(string memory cand_name,string memory party_name,string memory party_img,string memory cand_img) public{
        num_cand++;
        proposal[num_cand] = Proposal(cand_name,party_name,party_img,cand_img,0);
    }
    
    function UpdateCandidate(uint _id,string memory cand_name,string memory party_img,string memory cand_img) public{
        proposal[_id].cand_name = cand_name;
        proposal[_id].party_img = party_img;
        proposal[_id].cand_img  = cand_img;
    }
    
    
    function AddUser(string memory name,string memory elect_card,string memory img) public {
        voter[msg.sender] = Voter(name,elect_card,img,false,false,0); 
    }
    
    function Updateuser(string memory name,string memory elect_card,string memory img) public {
        voter[msg.sender].name   = name;
        voter[msg.sender].elect_card  = elect_card;
        voter[msg.sender].img    = img;
    }
    
    function Verify_User_Voting(address _voter_add) public
    {
        if(voter[_voter_add].auth)
        {
            revert("Already Verified");
        }
        voter[_voter_add].auth = true;
    }
    
    
    function Vote_karo(uint _cand_id) public
    {
        if(voter[msg.sender].voted)
        {
            revert("Already Voted");
        }
        voter[msg.sender].cand_vote= _cand_id;
        voter[msg.sender].voted    = true;
        proposal[_cand_id].vote_count +=1;
    }
    
    
    function WinningCount() public view returns(string memory name,string memory party_name)
    {
        uint WinningCounts =0;
        
        for(uint j=1;j<=num_cand;j++)
        {
            if(proposal[j].vote_count > WinningCounts)
            {
                WinningCounts = proposal[j].vote_count;
                name = proposal[j].cand_name;
                party_name =proposal[j].party_name;
            }
        }
    }
    
}