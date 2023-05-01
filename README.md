![image](https://www.commercebank.com/-/media/cb/images/masthead/site-logo/commerce-bank-logo-2x.png?sc=1&revision=8053fce9-78ee-41e0-aa9a-c1cfab49ec14&modified=20180604184102&hash=03C7CC17555D4681CB73D3A4773FF15D)

# Budgeter

## Overview

The Budgeter application is a simple and clean web-based application that is built around allowing you as a user to manage finances against a budget goal.

## Features

* Secure Logon
* Calendar View
* Balance Adjustments
    * Income
    * Expense
* Delete Adjustments
* Input Budget Goal
* Daily Budget View
* Plus
   * Built-In Loan Calculator with impact evaluator.

## Installation
##### Requirements
> * NodeJS 18
> * OpenJDK 17
> * Apache Maven
> * MySQL 8.0.32
> * Windows 10 or higher
> * Git

##### Setup
1. Load project files
    1. Make a directory on the Windows computer to hold the project.
    2. Open a command prompt.
    3. Change to project directory.
    4. Clone project to local machine
        1. \> git clone https://github.com/blueweimer/Commerce_Bank.git
2. Load database with with sample data
    1. Open MySQL Workbench
    2. Create Server with default port of 3306
        1. root password: root
    3. Create main database named CommerceBankOne
    4. Restore Database
        1. Browse to "[clone directory]\Master\DatabaseExport
        2. Start
 3. Start back-end service
     1. Open command prompt
     2. Change to Commerce_Bank\Master\Commerce_Bank_Back_End_
     3. \> mvn sprint-boot:run
 4. Start front-end service
     1. Open command prompt
     2. Change to Commerce_Bank\Master\Commerce_Bank_Front_End__
     3. \> npm start

##### Use Case Testing
1. Browse to http://localhost:5173/login
2. Enter userThirteen in the username field
3. Enter password in the password field
4. Click Login
