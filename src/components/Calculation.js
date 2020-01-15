import React, { Component } from 'react'
import { MuiThemeProvider, AppBar, Button, 
        TextField, Typography, Card, CardContent, Paper } from '@material-ui/core'


class Calculation extends Component {

    withCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    restart = (e) =>{
        e.preventDefault()
        this.props.restart()
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <div style={{backgroundColor: "#2c2f3c", height: '100vh'}}>
                <MuiThemeProvider>
                <React.Fragment>
                <AppBar position='static' style={{backgroundColor: '#151856' }}>
                        <Typography variant="h4" style={{paddingTop: '2%', paddingBottom: '2%', padding: "2%"}}>
                            Results
                        </Typography>
                </AppBar>   
                <br></br>
                <br></br>
                <Card style={{minWidth: '45%', display: 'inline-block'}}>
                    <CardContent>
                    <Paper elevation={3}>
                        <h1>Annual Sales:</h1>
                        <h2 style={{color: 'green'}}>${this.withCommas(values.annualSales)}</h2>
                    </Paper>
                    <br></br>
                    <Paper elevation={3}>
                        <h1>Amount lost to internet: </h1>
                        <h2 style={{color: 'red'}}>${this.withCommas(values.result)}</h2>
                    </Paper>
                    <br></br>
                    <Paper elevation={3}>
                        <h1>Amount using Best Deal Retailer: </h1>
                        <h1 style={{color: 'blue'}}>${this.withCommas(values.result2)}</h1>
                    </Paper>
                    <Button onClick={this.restart} style={styles.button2}>Restart</Button>
                    <br></br>
                    <h4>Enter Email to be sent results</h4>
                    <br></br>
                    <TextField
                    label="Email"
                    onChange={handleChange('Email')}
                    // id="outlined-basic"
                    variant="outlined"
                    style={styles.input}
                    />
                    <br></br>
                    <Button style={styles.button}>Send</Button>
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
    },
    input: {
        width: '55%'
    }
    
}

export default Calculation
