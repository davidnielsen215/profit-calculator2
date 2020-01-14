import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { RadioGroup } from '@material-ui/core'
import RaisedButton from 'material-ui/RaisedButton'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'


export class NetProfit extends Component {
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
      
        return (
          <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
              onChange({
                target: {
                  value: values.value + '%',
                },
              });
            }}
            // decimalSeparator
            isNumericString
            suffix="%"
            />
        );
        }

    render() {
        const { values, handleChange } = this.props 

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "What was your net profit (%) from the previous year?" style={{backgroundColor: `${styles.nav.color}`}}/>
                    
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('netProfit')} defaultValue={values.netProfit}>
                        <FormControlLabel value="1.95%" control={<Radio color="primary"/>} label="0.0% - 3.9%" />
                        <FormControlLabel value="5.45%" control={<Radio color="primary"/>} label="4.0% - 6.9%" />
                        <FormControlLabel value="8.45%" control={<Radio color="primary"/>} label="7.0% - 9.9%" />
                        <FormControlLabel value="11.45%" control={<Radio color="primary"/>} label="10.0% - 12.9%" />
                        <FormControlLabel value="14.45%" control={<Radio color="primary"/>} label="13.0% - 15.9%" />
                        <TextField
                            label="Other Amount"
                            onChange={handleChange('netProfit')}
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: this.NumberFormatCustom1,
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

export default NetProfit
