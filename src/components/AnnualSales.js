import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { RadioGroup } from '@material-ui/core'
import RaisedButton from 'material-ui/RaisedButton'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format'

export class AnnualSales extends Component {
    state = {
        isDisabled: false
    }
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

     NumberFormatCustom1(props) {
        const { inputRef, onChange, ...other } = props;
        // const {isDiabled} = this.state
        return (
          <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
              onChange({
                target: {
                  value: values.value,
                },
              });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
          />
        );
    }

    handleChar = () =>{
        const {handleChange} = this.props
        if(handleChange('annualSales').length > 0){
            this.setState({
                isDisabled: true
            })
        }
    }
    
    render() {
        const { values, handleChange } = this.props 
        const {isDisabled} = this.state
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Select range for store's annual sales" style={{backgroundColor: `${styles.nav.color}`}}/>
                    <br></br>
                    <FormControl >
                    <RadioGroup onChange={handleChange('annualSales')} defaultValue={values.annualSales}>
                        <FormControlLabel value="625000" disabled={isDisabled} control={<Radio color="primary"/>} label="$500K - $750K" />
                        <FormControlLabel value="875000" disabled={isDisabled} control={<Radio color="primary"/>} label="$750K - $1M" />
                        <FormControlLabel value="1250000" disabled={isDisabled} control={<Radio color="primary"/>} label="$1M - $1.5M" />
                        <FormControlLabel value="1750000" disabled={isDisabled} control={<Radio color="primary"/>} label="$1.5M - $2M" />
                        <FormControlLabel value="2500000" disabled={isDisabled} control={<Radio color="primary"/>} label="$2M - $3M" />
                        <FormControlLabel value="4000000" disabled={isDisabled} control={<Radio color="primary"/>} label="$3M - $5M" />
                        <FormControlLabel value="7500000" disabled={isDisabled} control={<Radio color="primary"/>} label="$5M - $10M" />
                        <TextField
                            label="Other Amount"
                            onChange={handleChange('annualSales')}
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: this.NumberFormatCustom1
                            }}
                        />
                    </RadioGroup>
                    </FormControl>
                    <br/>
                    <RaisedButton 
                    label='previous'
                    // primary='true'
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton 
                    label='continue'
                    primary='true'
                    style={styles.button}
                    onClick={this.continue}
                    />
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
    },
    nav: {
        color: '#0346ce'
    }
}

export default AnnualSales
