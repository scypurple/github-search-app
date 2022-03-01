import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  state = {
    users: [],
  }

  searchUser = (usersArr) => {
    const {users} = this.state;
    this.setState({users: usersArr});
    
  }
  
  render() {
    return (
      <div>
          <Search searchUser={this.searchUser} />
          <List users={this.state.users}/>
      </div>
    )
  }
}
    