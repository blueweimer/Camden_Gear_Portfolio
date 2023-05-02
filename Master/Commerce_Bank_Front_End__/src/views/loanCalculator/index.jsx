import { Button, AppBar, Card, CardContent, CardHeader, TextField, CircularProgress, Container, Grid, IconButton, makeStyles, Toolbar, Typography, Box } from "@material-ui/core";

import { Alert, AlertTitle } from "@material-ui/lab";
import { useSnackbar } from "notistack";
import { getUserInfo } from "../../services/user.service";
import { Person, Menu as MenuIcon } from "@material-ui/icons";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import {axios} from "axios";
import { useEffect, useState } from "react";
import logo from '../../images/logo.png';
import CurrencyInput from 'react-currency-input-field';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    grid: {
        height: "100%"
    },
    logoutBtn: {
        marginLeft: "auto"
    },
   h6: {
     marginTop: "1000px"
   }
}));



export default function LoanCalculator(props) {



    const headuser = localStorage.getItem("user");
    const headname = localStorage.getItem("name");
    const headtoken = localStorage.getItem("token");


    console.log(headuser);
    console.log(headname);
    console.log(headtoken);

    const msgTwo = "Welcome, " + headname + "! Enter the below criteria to calculate projected loan amount";
    const msgThree = "Welcome, " + headname + "!";




    const msgAdvice = "Welcome, " + headname + "! additional advice will go here";

     const [loanAmount, setLoanAmount] = useState();
     const [loanTerm, setLoanTerm] = useState();
     const [interestRate, setInterestRate] = useState();

     let returnMsg = "";

     const handleCalculator = (e) => {
         e.preventDefault();
         returnMessage(loanAmount, loanTerm, interestRate);

         window.location.href = "http://localhost:5173/loanCalculator";
     };

      function returnMessage(loanAmount, loanTerm, interestRate){
        let x = "";
        let newLA = parseFloat(loanAmount);
        let newLT = parseFloat(loanTerm);
        let newIR = (parseFloat(interestRate)/100) / 12;
        //let returnResult = newLA + newLT + newIR;
        let returnResult = (newIR * newLA) / (1 - (1 + newIR)**(newLT * -1));

        //M = P * (r * (1+r)^n) / ((1+r)^n - 1)
        //p: loanAmount: total amount
        //n: loanTerm: number of months
        //r: 12(interestRate): interest rate as decimal

        x = (Math.round(100 * returnResult)/100);

        if(returnResult > 0){
            localStorage.setItem("Calculator Result", x);
        } else {
            localStorage.setItem("Calculator Result", "");
        }






      }

    function clearResult(){
        localStorage.setItem("Calculator Result", "");
    }

     let msgMonthlyPayment = "Welcome, " + headname + "!";

        if(localStorage.getItem("Calculator Result") > 0){
            msgMonthlyPayment = "Welcome, " + headname + "! Your Projected Monthly Payment this month is $" + localStorage.getItem("Calculator Result");
        } else {
            msgMonthlyPayment = "Welcome, " + headname + "! Please use the calculator form above to find your Projected Monthly Payment!";
        }




return (
    <div onLoad="clearResult()">
        <Container maxWidth={false} className="App-header-short">
            <ul className="stacked-window">
                <li >
                    <Container className="content-window-one">
                        Commerce Bank App
                    </Container>
                    <Container maxWidth={"sm"} id="calculatorform">
                                    <Card id="formTwo" >
                                        <CardHeader title={"Loan Calculator"} class="heading"/>
                                        <CardHeader title={msgTwo} className="msg" titleTypographyProps={{variant:'h6' }}/>
                                        <CardContent >
                                            <form onSubmit={handleCalculator}>

                                                        <TextField
                                                            id="inputOne"
                                                            variant="outlined"
                                                            placeholder={"Loan Amount:"}
                                                            fullWidth
                                                            className="field"
                                                            decimalsLimit={2}
                                                            onValueChange={(value, name) => console.log(value, name)}
                                                            prefix="$"
                                                            value={loanAmount ?? ""}
                                                            onChange={e => setLoanAmount(e.target.value)}
                                                        />
                                                        <TextField
                                                            variant="outlined"
                                                            placeholder={"Loan Term: (in months)"}
                                                            fullWidth
                                                            className="field"
                                                            decimalsLimit={2}
                                                            onValueChange={(value, name) => console.log(value, name)}
                                                            prefix="$"
                                                            value={loanTerm ?? ""}
                                                            onChange={e => setLoanTerm(e.target.value)}
                                                        />
                                                        <TextField
                                                            variant="outlined"
                                                            placeholder={"Interest Rates: (as decimal)"}
                                                            fullWidth
                                                            className="field"
                                                            decimalsLimit={2}
                                                            onValueChange={(value, name) => console.log(value, name)}
                                                            prefix="$"
                                                            value={interestRate ?? ""}
                                                            onChange={e => setInterestRate(e.target.value)}
                                                        />
                                                       <button type="submit" id="loginButtonTwo"> Submit</button>
                                                       <button id="loginButtonTwo" onclick="document.getElementById('inputOne').value = ''">Clear</button>
                                            </form>
                                        </CardContent>
                                         <CardHeader title={"Result: $" + localStorage.getItem("Calculator Result")} className="msg" titleTypographyProps={{variant:'h6' }}/>
                                    </Card>
                    </Container>

                    <Container maxWidth={"sm"} id="calculatorform">
                                    <Card id="formFour" >
                                        <CardHeader title={"Projection"} class="heading" titleTypographyProps={{variant:'h5' }}/><br />
                                        <CardHeader title={msgMonthlyPayment} className="msgFour" titleTypographyProps={{variant:'h6' }}/>
                                        <CardHeader title={"Projected Monthly Payment"} className="msgFourLabel" titleTypographyProps={{variant:'h6' }}/><br />
                                        <CardHeader title={msgAdvice} className="msgFour" titleTypographyProps={{variant:'h6' }}/>
                                        <CardHeader title={"Additional Advice on Loan"} className="msgFourLabel" titleTypographyProps={{variant:'h6' }}/>

                                        <CardContent >

                                        </CardContent>
                                    </Card>
                    </Container>

                </li>
                <li >
                    <Container className="content-window-two">
                        {msgThree}
                    </Container>
                </li>
            </ul>

        </Container>

    </div>
);

}
