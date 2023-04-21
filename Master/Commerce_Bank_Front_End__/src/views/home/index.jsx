import { Button, AppBar, Card, CardContent, CircularProgress, Container, Grid, IconButton, makeStyles, Toolbar, Typography, Box } from "@material-ui/core";
import { CardHeader, TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { getUserInfo } from "../../services/user.service";
import { Person, Menu as MenuIcon } from "@material-ui/icons";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import {axios} from "axios";
import { useState } from "react";
import { login, setToken } from "../../services/auth.service";
import logo from '../../images/logo.png'
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
    }
}));



export default function HomeView(props) {

    const history = useNavigate();
    const headname = localStorage.getItem("name");
    const [data, setData] = useState(null);

    const UI_URL = "http://localhost:5173/";
    const BE_URL = "http://localhost:8080/";

    const response = fetch("http://localhost:8080/getTypeById/1");

    function getSubstring(str, start, end) {
      const char1 =  str.indexOf(start) + 1;
      const char2 =  str.lastIndexOf(end);
      return str.substring(char1, char2);
    }



//STORE TO HEADER

    //Balance
               const balanceUser = window.localStorage.getItem('name');
               const balanceUrl = "http://localhost:8080/getBalanceByUId/" + balanceUser;
               var balanceAddress = fetch(balanceUrl)
                  .then((response) => {
                  const balanceOut = response.json();
                  console.log(balanceOut.then((data)=>{
                    console.log(data);
                    const balanceOutput = JSON.stringify(data);
                    const balanceTitle = getSubstring(balanceOutput, '{', ':');
                    const balanceValue = getSubstring(balanceOutput, ':', '}');
                    localStorage.setItem(balanceTitle.split('"')[1], balanceValue.split('"')[1]);
                  }));
                  }) //prints to console
                  .then((data) => {
                    setData(data);
                  })
                  .then((user) => {
                  });

               const balancePrintAddress = () => {
                  balanceAddress.then((a) => {
                    console.log(a);
                  });
                };

    //Amount
           const amountUser = window.localStorage.getItem('name');
           const amountUrl = "http://localhost:8080/getAmountByUId/" + amountUser;
           var amountAddress = fetch(amountUrl)
              .then((response) => {
              const amountOut = response.json();
              console.log(amountOut.then((data)=>{
                console.log(data);
                const amountOutput = JSON.stringify(data);
                const amountTitle = getSubstring(amountOutput, '{', ':');
                const amountValue = getSubstring(amountOutput, ':', '}');
                localStorage.setItem(amountTitle.split('"')[1], amountValue.split('"')[1]);
              }));
              }) //prints to console
              .then((data) => {
                setData(data);
              })
              .then((user) => {
              });

           const amountPrintAddress = () => {
              amountAddress.then((a) => {
                console.log(a);
              });
            };


    //Type
       const typeUser = window.localStorage.getItem('name');
       const typeUrl = "http://localhost:8080/getTypeByUId/" + typeUser;
       var typeAddress = fetch(typeUrl)
          .then((response) => {
          const typeOut = response.json();
          console.log(typeOut.then((data)=>{
            console.log(data);
            const typeOutput = JSON.stringify(data);
            const typeTitle = getSubstring(typeOutput, '{', ':');
            const typeValue = getSubstring(typeOutput, ':', '}');
            localStorage.setItem(typeTitle.split('"')[1], typeValue.split('"')[1]);
          }));
          }) //prints to console
          .then((data) => {
            setData(data);
          })
          .then((user) => {
          });

       const typePrintAddress = () => {
          typeAddress.then((a) => {
            console.log(a);
          });
        };

    //SavingsGoal
           const savingsGoalUser = window.localStorage.getItem('name');
           const savingsGoalUrl = "http://localhost:8080/getSavingsGoalByUId/" + savingsGoalUser;
           var savingsGoalAddress = fetch(savingsGoalUrl)
              .then((response) => {
              const savingsGoalOut = response.json();
              console.log(savingsGoalOut.then((data)=>{
                console.log(data);
                const savingsGoalOutput = JSON.stringify(data);
                const savingsGoalTitle = getSubstring(savingsGoalOutput, '{', ':');
                const savingsGoalValue = getSubstring(savingsGoalOutput, ':', '}');
                localStorage.setItem(savingsGoalTitle.split('"')[1], savingsGoalValue.split('"')[1]);
              }));
              }) //prints to console
              .then((data) => {
                setData(data);
              })
              .then((user) => {
              });

           const savingsGoalPrintAddress = () => {
              savingsGoalAddress.then((a) => {
                console.log(a);
              });
            };
    //Date
           const dateUser = window.localStorage.getItem('name');
           const dateUrl = "http://localhost:8080/getDateByUId/" + dateUser;
           var dateAddress = fetch(dateUrl)
              .then((response) => {
              const dateOut = response.json();
              console.log(dateOut.then((data)=>{
                console.log(data);
                const dateOutput = JSON.stringify(data);
                const dateTitle = getSubstring(dateOutput, '{', ':');
                const dateValue = getSubstring(dateOutput, ':', '}');
                localStorage.setItem(dateTitle.split('"')[1], dateValue.split('"')[1]);
              }));
              }) //prints to console
              .then((data) => {
                setData(data);
              })
              .then((user) => {
              });

           const datePrintAddress = () => {
              dateAddress.then((a) => {
                console.log(a);
              });
            };



    //update Balance
    function updateBalance(amt){

        const name = window.localStorage.getItem("name");



        var requestOptions = {
          method: 'POST'
        };

        fetch("http://localhost:8080/updateBalance/" + name + "/" + amt, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }



    const msg = "Welcome to Commerce Bank, " + headname + "! Please enter your starting Account Balance.";

    const [input, setInput] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBalance(input);
        window.location.href = UI_URL + "home";
    };









return (
        <Container maxWidth={false} className="App-header">
            <Container maxWidth={"sm"}>
                <Card id="form" >
                    <CardHeader title={"Account Balance"}/>
                    <CardHeader title={msg} className="msg"/>
                    <CardContent >
                        <form onSubmit={handleSubmit} >

                                    <TextField
                                        variant="outlined"
                                        placeholder={"Starting Account Balance"}
                                        fullWidth
                                        className="field"
                                        decimalsLimit={2}
                                        onValueChange={(value, name) => console.log(value, name)}
                                        prefix="$"
                                        value={input ?? ""}
                                        onChange={e => setInput(e.target.value)}
                                    />
                                   <Button type="submit" id="loginButton"> Enter</Button>
                        </form>
                    </CardContent>
                </Card>
            </Container>
            <div id="logo">
                <img src={logo} width={400} alt="" />
             </div>
        </Container>


    );
    }


