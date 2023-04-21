import { Button, Card, CardContent, CardHeader, Container, Grid, makeStyles, TextField } from "@material-ui/core";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setToken } from "../../services/auth.service";
import logo from '../../images/logo.png'




export default function LoginView(props) {
    const history = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function clearLocal(){
        if(window.localStorage.getItem('name') != null){
            window.localStorage.clear();
            window.location.reload();
        }
    }


    const handleLogin = (e) => {
            e.preventDefault();
                login(username, password)
                    .then(response => {
                        setToken(response.jwt);
                        history.push("/user");
                    })
                    .catch(e => {
                    });
    };
    

    return (
        <Container maxWidth={false} className="App-header" onload={clearLocal()}>
            <Container maxWidth={"sm"}>
                <Card id="form">
                    <CardHeader title={"Login"}/>
                    <CardContent >
                        <form onSubmit={handleLogin} >
                            
                                    <TextField
                                        variant="outlined"
                                        placeholder={"Username"}
                                        value={username ?? ""}
                                        onChange={e => setUsername(e.target.value)}
                                        fullWidth
                                        className="field"
                                    />
                                    <TextField
                                        variant="outlined"
                                        placeholder={"Password"}
                                        type={"password"}
                                        value={password ?? ""}
                                        onChange={e => setPassword(e.target.value)}
                                        fullWidth
                                        className="field"
                                    />
                                    <Button type="submit" id="loginButton"> Login </Button>
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