import React, { Component } from 'react'
import StoreType from './StoreType'
import AnnualSales from './AnnualSales'
import NetProfit from './NetProfit'
import LastYear from './LastYear'
import LoseInternet from './LoseInternet'

export class UserForm extends Component {
    state = {
        step: 1,
        storeType: '',
        annualSales: '',
        netProfit: '',
        lastYear: '',
        loseInternet: '',
        result: '',
        result2: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
          step: step + 1
        })
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    //Handle field change

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    setResult = () =>{
        const { result, result2, loseInternet, annualSales } = this.state
        // const var1 = parseFloat(lastYear)
        // const var2 = parseFloat(netProfit)
        const var3 = (parseFloat(loseInternet) / 100)
        const var4 = (parseFloat(loseInternet) / 100) + 1

        const equate = annualSales * var3
        const equate2 = annualSales * var4

        this.setState({
            result: result + (equate).toFixed(2) ,
            result2: result2 + (equate2).toFixed(2)
        })
    }

    withCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }


    render() {
        const { step } = this.state
        const { storeType, annualSales, netProfit, lastYear, loseInternet, result, result2 } = this.state
        const values = {storeType, annualSales, netProfit, lastYear, loseInternet}
        // const result = parseInt(lastYear) + parseInt(netProfit)
        
        switch (step) {
            default:
            case 1: 
                return(
                    <StoreType
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 2:
                return(
                    <AnnualSales 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 3:
                return (
                    <NetProfit 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 4:
                return (
                    <LastYear 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 5:
                return (
                    <LoseInternet 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    setResult={this.setResult}
                    />
                )
            case 6:
                return (
                <>
                    <h1>Annual Sales:</h1>
                    <h2 style={{color: 'green'}}>${this.withCommas(annualSales)}</h2>
                    <h1>Amount lost to internet: </h1>
                    <h2 style={{color: 'red'}}>${this.withCommas(result)}</h2>
                    <h1>Total amount using Best Deal Retailer: </h1>
                    <h1 style={{color: 'blue'}}>${this.withCommas(result2)}</h1>
                </>
                )
            }
    }
}

export default UserForm
