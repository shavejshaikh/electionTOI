import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


class AdminCandPanel extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h1>No. of Voter Participated In Election</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Election Name</th>
                            <th>Election Card No</th>
                            <th>Image</th>
                            <th>Verified</th>
                            <th>Voted</th>                 
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SHAVEJ</td>
                            <td>7738288136</td>
                            <td>Narendra Modi</td>
                            <td>False</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SAUD</td>
                            <td>7735288136</td>
                            <td>Narendra Modi</td>
                            <td>True</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SAAD</td>
                            <td>7738282136</td>
                            <td>Narendra Modi</td>
                            <td>True</td>
                            <td>True</td>
                        </tr>
                                          
                    </tbody>
                </Table>
            </div>  
               );
    }
}
 
export default AdminCandPanel;