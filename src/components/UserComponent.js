import React from 'react'
import react from 'react'
import UserService from '../services/UserService'


class UserComponent extends React.Component{

    //initialize the state
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }

    //Lifecycle method to call REST API
    // Grab the data from REST API and store in variable 'users'
    // Called immediately after a componenty is mounted
    componentDidMount(){
        UserService.getUsers().then((response) =>{
            this.setState({users:response.data})
        });
        
    }



        //each comp has a render() method, returning a JSX
        render(){
            return(
                <div>
                       <h1 className = "text-center"> Users List</h1> 
                        <table className = "table table-striped">
                            <thead>
                                <tr>
                                    <td> User ID  </td>
                                    <td> User First Name  </td>
                                    <td> User Last Name  </td>
                                    <td> User Email  </td>
                                </tr>
                            </thead>
                            <tbody>
                                {// curly braces for JS code

                                  this.state.users.map(
                                      user =>
                                      <tr key = {user.id}> 
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                      </tr>
                                  )

                                }
                            </tbody>
                        </table>
                </div>
            )
        }
    
}

export default UserComponent