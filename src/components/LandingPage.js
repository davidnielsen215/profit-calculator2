import React, { Component } from 'react'

export class LandingPage extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        
        return (
            <div>
                <h1>BEST DEAL RETAILER PROFIT CALCULATOR</h1>
                <button onClick={this.continue}>Begin</button>
            </div>
        )
    }
}

export default LandingPage
