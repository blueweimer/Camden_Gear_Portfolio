import { Button, AppBar, Card, CardContent, CardHeader, TextField, CircularProgress, Container, Grid, IconButton, makeStyles, Toolbar, Typography, Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../services/user.service";
import { Person, Menu as MenuIcon } from "@material-ui/icons";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import {axios} from "axios";
import logo from '../../images/logo.png';

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


export default function AccountView(props) {

    //new Balance
        function updateBalance(val){

            const name = window.localStorage.getItem("name");
            const amountPre = window.localStorage.getItem("amount"); //
            let amount = parseFloat(amountPre);
            const type = window.localStorage.getItem("type");
            const savingsgoalPre = window.localStorage.getItem("savingsGoal");
            let savingsgoal = parseFloat(savingsgoalPre);




            var requestOptions = {
              method: 'POST'
            };

            fetch("http://localhost:8080/newExpensesIncomes/" + name + "/" + amount + "/" + val + "/" + type + "/" + savingsgoal, requestOptions) ///newExpensesIncomes/{t_id}/{u_id}/{amount}/{balance}/{type}/{savings_goal}
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
        }

    //new Amount
            function updateAmount(val){

                const name = window.localStorage.getItem("name");
                const balancePre = window.localStorage.getItem("balance"); //
                let balance = parseFloat(balancePre);
                const type = window.localStorage.getItem("type");
                const savingsgoalPre = window.localStorage.getItem("savingsGoal");
                let savingsgoal = parseFloat(savingsgoalPre);




                var requestOptions = {
                  method: 'POST'
                };

                fetch("http://localhost:8080/newExpensesIncomes/" + name + "/" + val + "/" + balance + "/" + type + "/" + savingsgoal, requestOptions) ///newExpensesIncomes/{t_id}/{u_id}/{amount}/{balance}/{type}/{savings_goal}
                  .then(response => response.text())
                  .then(result => console.log(result))
                  .catch(error => console.log('error', error));
    }


    const headuser = localStorage.getItem("user");
    const headname = localStorage.getItem("name");
    const headtoken = localStorage.getItem("token");

    console.log(headuser);
    console.log(headname);
    console.log(headtoken);

    const msgTwo = "Welcome, " + headname + "!";
    const msgThree = "Welcome, " + headname + "! Below should be the Balance YTD";

    const [bal, setBal] = useState();
    const [amt, setAmt] = useState();

    const handleLogin = (e) => {
                e.preventDefault();
                updateBalance(bal);
                window.location.href = "http://localhost:5173/myAccount";
    };








return (
    <div>
        <Container maxWidth={false} className="App-header-short">
            <ul className="stacked-window">
                <li >
                    <Container className="content-window-one">
                        Commerce Bank App
                    </Container>
                    <Container maxWidth={"sm"} id="accountForm">
                                                        <Card id="formTwo" >

                                                            <CardHeader title={"My Account"} class="heading"/>
                                                            <CardHeader title={msgTwo} className="msg" titleTypographyProps={{variant:'h6' }}/>
                                                            <CardContent >
                                                                <form onSubmit={handleLogin}>

                                                                            <TextField
                                                                                variant="outlined"
                                                                                placeholder={"Balance"}
                                                                                fullWidth
                                                                                className="field"
                                                                                decimalsLimit={2}
                                                                                value={bal ?? ""}
                                                                                onChange={e => setBal(e.target.value)}
                                                                                onValueChange={(value, name) => console.log(value, name)}
                                                                            />
                                                                            <TextField
                                                                                variant="outlined"
                                                                                placeholder={"Payment"}
                                                                                fullWidth
                                                                                className="field"
                                                                                decimalsLimit={2}
                                                                                onValueChange={(value, name) => console.log(value, name)}
                                                                                prefix="$"
                                                                            />
                                                                            <TextField
                                                                                variant="outlined"
                                                                                placeholder={"Recurring Payment"}
                                                                                fullWidth
                                                                                className="field"
                                                                                decimalsLimit={2}
                                                                                onValueChange={(value, name) => console.log(value, name)}
                                                                                prefix="$"
                                                                            />
                                                                            <TextField
                                                                                variant="outlined"
                                                                                placeholder={"Income"}
                                                                                fullWidth
                                                                                className="field"
                                                                                decimalsLimit={2}
                                                                                onValueChange={(value, name) => console.log(value, name)}
                                                                                prefix="$"
                                                                            />
                                                                           <Button type="submit" id="loginButtonTwo"> Submit</Button>
                                                                           <Button type="reset" value="Reset" id="loginButtonTwo"> Clear</Button>
                                                                </form>
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
