import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: '',
  }

  updateState = (obj) => {
    //const {users} = this.state; 不需要,setState本来就能读到属性
    this.setState(obj);
    
  }

  render() {
    return (
      <div>
          <Search updateState={this.updateState} />
          <List {...this.state} />
      </div>
    )
  }
}
    