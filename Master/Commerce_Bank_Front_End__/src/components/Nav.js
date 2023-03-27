import React from 'react'

function nav() {
    return (
        <div className = "nav">
            <ul className = "nav-ul">
                <li>
                    <a href="/home">home</a>      
                </li>
                <li>
                    <a href="/calanderView">calander view</a>      
                </li>
                <li>
                    <a href="/myAccount">my account</a>      
                </li>
                <li>
                    <a href="/login">log out</a>      
                </li>
            </ul>
        </div>

    )
}

export default nav
