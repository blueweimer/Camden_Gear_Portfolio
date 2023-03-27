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

    const UI_URL = "http://localhost:5173/";
    const BE_URL = "http://localhost:8080/";

    const msg = "Welcome to Commerce Bank, " + headname + "! Please enter your starting Account Balance.";

    const handleLogin = (e) => {
        e.preventDefault();

         window.location.href = UI_URL + "calanderView";
    };
    

    return (
        <Container maxWidth={false} className="App-header">
            <Container maxWidth={"sm"}>
                <Card id="form">
                    <CardHeader title={"Account Balance"}/>
                    <CardHeader title={msg} className="msg"/>
                    <CardContent >
                        <form onSubmit={handleLogin} >
                            
                                    <CurrencyInput
                                        variant="outlined"
                                        placeholder={"Starting Account Balance"}
                                        fullWidth
                                        className="field"
                                        decimalsLimit={2}
                                        onValueChange={(value, name) => console.log(value, name)}
                                        prefix="$"
                                    />
                                    <Button type="submit" id="loginButton"> Enter </Button>
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
