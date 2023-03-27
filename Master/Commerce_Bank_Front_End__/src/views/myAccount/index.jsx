import { Button, AppBar, Card, CardContent, CircularProgress, Container, Grid, IconButton, makeStyles, Toolbar, Typography, Box } from "@material-ui/core";
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


function AccountView() {


    const headuser = localStorage.getItem("user");
    const headname = localStorage.getItem("name");
    const headtoken = localStorage.getItem("token");

    console.log(headuser);
    console.log(headname);
    console.log(headtoken);

    const msgTwo = "Welcome, " + headname + "!";






return (
    <div>
        <Container maxWidth={false} className="App-header-two">  
            <ul className="stacked-window">
                <li >
                    <Container className="content-window-one">
                        Commerce Bank App
                    </Container>
                </li>
                <li >
                    <Container className="content-window-two">
                        {msgTwo}
                        
                    </Container>
                </li>
            </ul>
            
        </Container>

    </div>

        
        
        
    
    
);

}

export default AccountView;