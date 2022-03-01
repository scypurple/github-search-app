import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  state = {
    users: [],
  }
  
  render() {
    return (
      <div>
          <Search />
          <List />
      </div>
    )
  }
}
    