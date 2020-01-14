import React, { Component } from 'react'

class Calculation extends Component {

    withCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    restart = (e) =>{
        e.preventDefault()
        this.props.restart()
    }
    render() {
        const { values } = this.props
        return (
            <div>
                    <h1>Annual Sales:</h1>
                    <h2 style={{color: 'green'}}>${this.withCommas(values.annualSales)}</h2>
                    <h1>Amount lost to internet: </h1>
                    <h2 style={{color: 'red'}}>${this.withCommas(values.result)}</h2>
                    <h1>Total amount using Best Deal Retailer: </h1>
                    <h1 style={{color: 'blue'}}>${this.withCommas(values.result2)}</h1>
                    <button onClick={this.restart}>Restart</button>
            </div>
        )
    }
}

export default Calculation
