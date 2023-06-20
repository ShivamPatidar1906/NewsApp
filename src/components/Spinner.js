import React, { Component } from 'react'

export class Spinner extends Component {
    constructor(){
        super();
        this.state= {
            chnload:"primary"
        }
    }
  render() {
    return (
      <div className=' text-center'>
        <div className={`spinner-grow text-${this.state.chnload}`} role="status">
        <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

export default Spinner
