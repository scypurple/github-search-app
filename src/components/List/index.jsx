import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, error} = this.props;
    return (
      <div className="row">
        {
          isFirst ? <h1>Hi! lore!</h1> :
          isLoading ? <h1>Loading...</h1> :
          error ? <h1>{error}</h1> :
          users.map(user => {
            return (
            <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel='noreferrer'>
                  <img alt="pic" style={{width: '100px'}} src={user.avatar_url} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
              
    
        
      
    </div>
    )
  }
}
