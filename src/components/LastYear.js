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

export class LastYear extends Component {
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
                    <AppBar title= "What percent of your sales was last year's product?" style={{backgroundColor: `${styles.nav.color}`}}/>
                    
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('lastYear')} defaultValue={values.lastYear}>
                        <FormControlLabel value="15%" control={<Radio color="primary"/>} label="10% - 20%" />
                        <FormControlLabel value="25.5%" control={<Radio color="primary"/>} label="21% - 30%" />
                        <FormControlLabel value="35.5%" control={<Radio color="primary"/>} label="31% - 40%" />
                        <FormControlLabel value="45.5%" control={<Radio color="primary"/>} label="41% - 50%" />
                        <TextField
                            label="Other Amount"
                            onChange={handleChange('lastYear')}
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

export default LastYear
