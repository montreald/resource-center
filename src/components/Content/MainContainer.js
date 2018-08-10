import React, { Component } from 'react'
import ContentCard from './ContentCard'

class MainContainer extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <ContentCard />
          </div>
          <div className="col s12 m4">
            <ContentCard />
          </div>
          <div className="col s12 m4">
            <ContentCard />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
