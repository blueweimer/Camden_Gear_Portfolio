import { LoginResponse, User } from "../entity";
import { client } from "./client";
import axios from 'axios';

function checkLoggedIn() {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if (!token) {
        return false;
    }

    try {
        let payload = token.split(".")[1];
        payload = JSON.parse(atob(payload));
        return payload["exp"] && payload["exp"] > Date.now() / 1000;
    } catch (e) {
        return false;
    }
}

function setToken(token) {
    localStorage.setItem("token", token);
}

function getToken() {
    return localStorage.getItem("token");
}

function logout() {
    localStorage.removeItem("token");
}








const API_URL = "http://localhost:8080/";
const UI_URL = "http://localhost:5173/";



const login = (username, password) => {
    return axios
      .post(API_URL + "token", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.username) {
          //localStorage.setItem("user", JSON.stringify(response.data.username));
          //ocalStorage.setItem("token", JSON.stringify(response.data.jwt));
          //this.user = username;
          //this.token = token;
          console.log(response.data);

          
        }

        if(response.status == 200){
                //Sucessful Login
                console.log("sucessful");
                localStorage.setItem("user", JSON.stringify(response.data));
                //localStorage.setItem("token", username);
                localStorage.setItem("name", username);
                console.log(response.data);
                new LoginResponse(response.data);
                window.location.href = UI_URL + "home";
                console.log("end sucessful");
                
        } else {
            console.log("Authentication Failed");
        }
  
        return response.data;
      });

      

      
  };



/*
function login(username, password) {
    let params = {
        username,
        password
    };


    const data = Object.entries(params)
        .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
        .join('&');

    return new Promise((resolve, reject) => {
        client.post('token', data, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            resolve(new LoginResponse(response.data));
        }).catch(reason => {
            reject("Authentication failed");
        })
    });
    
}

*/

const authService = {
    login,
    logout,
    setToken,
    getToken,
    checkLoggedIn
};

export {
    login,
    logout,
    setToken,
    getToken,
    checkLoggedIn
}

export default authService;