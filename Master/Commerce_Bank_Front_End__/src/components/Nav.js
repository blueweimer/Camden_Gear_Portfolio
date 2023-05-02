import React from 'react';
import { useState, useEffect } from "react";
import logoTwo from '../images/logoTwo.png';

function Nav() {

const [scrollPosition, setScrollPosition] = useState(0);
const [scrollBool, setScrollBool] = useState("nav");

const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setScrollBool("nav");
    if (position >= 100){
        setScrollBool("navTwo");
    }

};



useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


function isClassEnabled(){
         const classEnabled = window.localStorage.getItem("name");
            if(classEnabled == null){
                return "isDisabled";
            } else {
                return "navLabels";
            }
        }

 function isClassEnabledLogo(){
          const classEnabled = window.localStorage.getItem("name");
             if(classEnabled == null){
                 return "isDisabled";
             } else {
                 return "navLabelsLogo";
             }
         }



//IsHomeEnabled?

    function isHomeEnabled(){
        const enabled = window.localStorage.getItem("name");
        if(enabled != null){
            return "/home";
        } else {
            return "#";
        }
    }


//IsLoanCalculatorEnabled?

    function isLoanCalculatorEnabled(){
        const enabled = window.localStorage.getItem("name");
        if(enabled != null){
            return "/loanCalculator";
        } else {
            return "#";
        }
    }

//IsAccountEnabled?

    function isAccountEnabled(){
        const enabled = window.localStorage.getItem("name");
        if(enabled != null){
            return "/myAccount";
        } else {
            return "#";
        }
    }

//IsLoginEnabled?

    function isLoginEnabled(){

        const enabled = window.localStorage.getItem("name");
        if(enabled == null){
            return "#";
        } else {
            return "/login";
        }
    }






    return (
        <div className = {scrollBool} >
            <ul className = {scrollBool + "-ul"}>
                <li>
                </li>
                <li>
                    <a class = {isClassEnabledLogo()} href={isHomeEnabled()}><img width="60px" position="absolute" src={logoTwo} /></a>
                </li>
                <li>
                    <a class = {isClassEnabled()} href={isHomeEnabled()}>home</a>
                </li>
                <li>
                    <a class = {isClassEnabled()} href={isLoanCalculatorEnabled()}>loan calculator</a>
                </li>
                <li>
                    <a class = {isClassEnabled()} href={isAccountEnabled()}>my account</a>
                </li>
                <li>
                    <a class = {isClassEnabled()} href={isLoginEnabled()}>log out</a>
                </li>
            </ul>
        </div>

    )
}

export default Nav;
