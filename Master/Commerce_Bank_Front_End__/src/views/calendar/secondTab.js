// SecondTab.js
import { Button, AppBar, Card, CardContent, CardHeader, TextField, CircularProgress, Container, Grid, IconButton, makeStyles, Toolbar, Typography, Box } from "@material-ui/core";

import { Alert, AlertTitle } from "@material-ui/lab";
import { useSnackbar } from "notistack";
import { getUserInfo } from "../../services/user.service";
import { Person, Menu as MenuIcon } from "@material-ui/icons";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import {axios} from "axios";
import { useState } from 'react';
import logo from '../../images/logo.png';
import CurrencyInput from 'react-currency-input-field';

import { grey } from '@mui/material/colors';

import React from "react";

import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const styles = theme => ({
  radio: {
    '&$checked': {
      color: '#4B8DF8'
    }
  },
  checked: {}
})



const SecondTab = () => {


    //javascript
    const [selectedValueTwo, setSelectedValueTwo] = React.useState("a");
      const handleChangeTwo = (event) => {
        setSelectedValueTwo(event.target.value);
      };
      const controlProps = (item) => ({
        checked: selectedValueTwo === item,
        onChange: handleChangeTwo,
        value: item,
        name: "size-radio-button-demo",
        inputProps: { "aria-label": item },
      });


    //Radio Buttons
      const [selectedValue, setSelectedValue] = React.useState('a');

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
      };

  //Handle Login
    const [bal, setBal] = useState();
    const [plannedUnplanned, setPlannedUnplanned] = useState();
    const [expenseIncome, setExpenseIncome] = useState();
    const handleLogin = (e) => {
                e.preventDefault();
                updateBalance(bal, plannedUnplanned, expenseIncome);

                window.location.href = "http://localhost:5173/home";
    };

    //new Balance
        function updateBalance(val, plannedUnplanned, expenseIncome){
            let newVal = 0.0;
            let newBalance = 0.0;
            if(plannedUnplanned == "expense"){
                newVal = val * -1.0;
            } else {
                newVal = val;
            }

            const name = window.localStorage.getItem("name");

            const balancePre = window.localStorage.getItem("balance"); //
            let balance = parseFloat(balancePre);

            newBalance = (parseFloat(balance) + parseFloat(newVal));


            let type = "";
            if(plannedUnplanned == "planned"){
                type = "planned";
            } else {
                type = "unplanned";
            }

            const savingsgoalPre = window.localStorage.getItem("savingsGoal");
            let savingsgoal = parseFloat(savingsgoalPre);

            console.log(newVal);
            console.log(newBalance);


            var requestOptions = {
              method: 'POST'
            };

            fetch("http://localhost:8080/newExpensesIncomes/" + name + "/" + newVal + "/" + newBalance + "/" + type + "/" + savingsgoal, requestOptions) ///newExpensesIncomes/{t_id}/{u_id}/{amount}/{balance}/{type}/{savings_goal}
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
        }


  return (
    <div className="SecondTab">
    <p>Adjustment View</p>
      {/* Second  tab content will go here */}
        <Container maxWidth={"sm"} id="balanceForm">
            <Card id="formThree" >

                <CardHeader title={"Make Adjustment"} class="heading"/>
                <CardHeader title={"Enter new unplanned or planned expenses or incomes below:"} className="msg" titleTypographyProps={{variant:'h6' }}/>
                <CardContent >
                    <form onSubmit={handleLogin}>

                                <TextField
                                    variant="outlined"
                                    placeholder={"Amount"}
                                    fullWidth
                                    className="field"
                                    decimalsLimit={2}
                                    value={bal ?? ""}
                                    onChange={e => setBal(e.target.value)}
                                    onValueChange={(value, name) => console.log(value, name)}
                                /><br />

                                <div className="radio-group" id="radios">
                                    <input type="radio" id="planned" name="first" value="planned" onChange={e => setPlannedUnplanned(e.target.value)}/>
                                    <label for="planned" className="radioLabel" >planned</label>
                                    <input type="radio" id="unplanned" name="first" value="unplanned" onChange={e => setPlannedUnplanned(e.target.value)}/>
                                    <label for="unplanned" className="radioLabel">unplanned</label><br />
                                </div>

                                <input type="radio" id="expense" name="second" value="expense" onChange={e => setExpenseIncome(e.target.value)}/>
                                <label for="expense" className="radioLabel">expense</label>
                                <input type="radio" id="income" name="second" value="income" onChange={e => setExpenseIncome(e.target.value)}/>
                                <label for="income" className="radioLabel">income</label><br /><br />



                               <Button type="submit" id="loginButtonTwo"> Submit</Button>
                               <Button type="reset" value="Reset" id="loginButtonTwo"> Clear</Button>
                    </form>
                </CardContent>
            </Card>
    </Container>
    </div>
  );
};
export default SecondTab;