import React, { Component } from 'react'
import {    MuiThemeProvider,
            RadioGroup, 
            CardContent, 
            AppBar, 
            Button, 
            Radio, 
            FormControlLabel, 
            FormControl, 
            Typography, 
            Card 
        } from '@material-ui/core'



export class StoreType extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const { values, handleChange } = this.props 
        return (
            <div style={{backgroundColor: "#2c2f3c", height: '100vh'}}>
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position='static' style={{backgroundColor: '#151856' }}>
                        <Typography variant="h4" style={{paddingTop: '2%', paddingBottom: '2%', padding: "2%"}}>
                            What type of retail store do you have?
                        </Typography>
                    </AppBar>
                    
                    <br></br>
                    <br></br>
                <Card style={{minWidth: '45%', display: 'inline-block'}}>
                    <CardContent>
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('storeType')} defaultValue={values.storeType}>
                        <FormControlLabel value="Ski Shop" control={<Radio color="primary"/>} label="Ski Shop" />
                        <FormControlLabel value="Snowboard Shop" control={<Radio color="primary"/>} label="Snowboard Shop" />
                        <FormControlLabel value="Ski + Snowboard Shop" control={<Radio color="primary"/>} label="Ski + Snowboard Shop" />
                        <FormControlLabel value="Outdoor Gear + Wear" control={<Radio color="primary"/>} label="Outdoor Gear + Wear" />
                    </RadioGroup>
                    </FormControl>
                    <br/>
                    <br/>
                    <Button 
                        label='continue'
                        // primary="true"
                        style={styles.button}
                        onClick={this.continue}
                        >continue</Button>
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
    
}

export default StoreType
