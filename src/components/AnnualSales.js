import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, CardContent, Card, AppBar, Button, 
        FormControlLabel, FormControl, Radio, TextField, Typography } from '@material-ui/core'
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
            <div style={{backgroundColor: "#2c2f3c", height: '100vh'}}>
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar position='static' style={{backgroundColor: '#151856' }}>
                        <Typography variant="h4" style={{paddingTop: '2%', paddingBottom: '2%', padding: "2%"}}>
                            Select range for store's annual sales
                        </Typography>
                    </AppBar>                    
                    <br></br>
                    <br></br>
                    <Card style={{minWidth: '45%', display: 'inline-block'}}>
                    <CardContent>
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
                    <Button 
                        style={styles.button2}
                        onClick={this.back}
                    >
                        previous
                    </Button>

                    <Button 
                        style={styles.button}
                        onClick={this.continue}
                    >
                        continue
                    </Button>

                    </CardContent>
                    </Card>
                </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
    }
}

const styles = {
    button: {
        color: 'white',
        minWidth: '30%',
        margin: 25,
        backgroundColor: '#151856'
    },
    button2: {
        color: 'white',
        minWidth: '30%',
        margin: 25,
        backgroundColor: '#6f1502'
    }
    
}

export default AnnualSales
