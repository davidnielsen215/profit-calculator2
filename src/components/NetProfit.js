import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, AppBar, Button, FormControlLabel, 
    Radio, FormControl, TextField, Typography, Card, CardContent } from '@material-ui/core'
import NumberFormat from 'react-number-format'


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
            <div style={{backgroundColor: "#2c2f3c", height: '100vh'}}>
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar position='static' style={{backgroundColor: '#151856' }}>
                        <Typography variant="h4" style={{paddingTop: '2%', paddingBottom: '2%', padding: "2%"}}>
                            What was your net profit (%) from previous year
                        </Typography>
                    </AppBar>           
                    <br></br>
                    <br></br>
                    <Card style={{minWidth: '45%', display: 'inline-block'}}>
                    <CardContent>
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

export default NetProfit
