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
import FirstTab from "../../views/calendar/firstTab";
import SecondTab from "../../views/calendar/secondTab";



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


function CalendarView() {



    //call displayExpensesIncomes returns obj with date, amount, and type;

    const ExpensesIncomesFromHeader = localStorage.getItem('expensesIncomes');





    //loop through each shorter string

        const sub = getSubstring(ExpensesIncomesFromHeader, '(', '?');
        const EVENTS = [{date: new Date(2022, 3, 10), amount: 'test', type: 'unplanned'}];
        for(let i = 0; i < 30; i++){
            const subDate = sub.split('\'')[3+(12*i)]; //goes to 15, difference is 12
            const subAmount = sub.split('\'')[7+(12*i)];
            const subType = sub.split('\'')[11+(12*i)];
            const newDate = new Date(subDate);

            const newObject = {date: new Date(subDate), amount: subAmount, type: subType};
            EVENTS.push(newObject);
        }



    const headuser = localStorage.getItem("user");
    const headname = localStorage.getItem("name");
    const headtoken = localStorage.getItem("token");

    console.log(headuser);
    console.log(headname);
    console.log(headtoken);

    const msgTwo = "Welcome, " + headname + "! Below should be the Balance YTD";

    const handleLogin = (e) => {
                e.preventDefault();
                //updateBalance(input);
                window.location.href = "http://localhost:5173/myCalendar";
            };




    const history = useNavigate();
    const [data, setData] = useState(null);

    const UI_URL = "http://localhost:5173/";
    const BE_URL = "http://localhost:8080/";

    const response = fetch("http://localhost:8080/getTypeById/1");

    function getSubstring(str, start, end) {
    if(str != null && start != null && end != null){
      const char1 =  str.indexOf(start) + 1;
      const char2 =  str.lastIndexOf(end);

        return str.substring(char1, char2);
    } else {
        return "";
      }

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

    //displayExpensesIncomes
                   const EIUser = window.localStorage.getItem('name');
                   const EIUrl = "http://localhost:8080/displayExpensesIncomes/" + EIUser;
                   var EIAddress = fetch(EIUrl)
                      .then((response) => {
                      const EIOut = response.json();
                      console.log(EIOut.then((data)=>{
                        console.log(data);
                        const EIOutput = JSON.stringify(data);
                        const EITitle = getSubstring(EIOutput, '{', ':');
                        const EIValue = getSubstring(EIOutput, ':', '}');

                        localStorage.setItem("expensesIncomes", EIValue.split('"')[1]);

                        //check
                        const check = localStorage.getItem("expensesIncomes");
                        let checkLetter = check.charAt(0);
                        localStorage.setItem("testTwo", checkLetter);
                        const pass = 0;
                        do{
                           if(check.charAt(0) == "("){
                                pass = 1;
                                window.location.reload();
                           } else {
                                localStorage.setItem("expensesIncomes", EIValue.split('"')[1]);
                                //window.location.reload();
                                pass = 0;
                           }
                        } while (pass == 0);



                      }));
                      }) //prints to console
                      .then((data) => {
                        setData(data);
                      })
                      .then((user) => {
                      });

                   const EIPrintAddress = () => {
                      EIAddress.then((a) => {
                        console.log(a);
                      });
                    };



    //Daily Balance
           const dailyUser = window.localStorage.getItem('name');
           const today = new Date();
           let month = today.getMonth() + 1;
           let day = today.getDate();
           let year = today.getFullYear();
           const dailyUrl = "http://localhost:8080/findDailyBalance/" + dailyUser + "/" + month + "/" + day + "/" + year;
           var dailyAddress = fetch(dailyUrl)
              .then((response) => {
              const dailyOut = response.json();
              console.log(dailyOut.then((data)=>{
                console.log(data);
                const dailyOutput = JSON.stringify(data);
                const dailyTitle = getSubstring(dailyOutput, '{', ':');
                const dailyValue = getSubstring(dailyOutput, ':', '}');
                localStorage.setItem(dailyTitle.split('"')[1], Math.round(100 * dailyValue.split('"')[1])/100);

                const balance = window.localStorage.getItem("balance")
                            if (balance == 0 || balance == "null"){
                               window.location.href = UI_URL + "calendar";
                            } else {
                            }

              }));
              }) //prints to console
              .then((data) => {
                setData(data);
              })
              .then((user) => {
              });

           const dailyPrintAddress = () => {
              dailyAddress.then((a) => {
                console.log(a);
              });
            };


    //OverUnder
           const overUnderUser = window.localStorage.getItem('name');
           const overUndertoday = new Date();
           let overUndermonth = overUndertoday.getMonth() + 1;
           let overUnderday = overUndertoday.getDate();
           let overUnderyear = overUndertoday.getFullYear();
           const overUnderUrl = "http://localhost:8080/findOverUnder/" + overUnderUser + "/" + overUndermonth + "/" + overUnderday + "/" + overUnderyear;
           var overUnderAddress = fetch(overUnderUrl)
              .then((response) => {
              const overUnderOut = response.json();
              console.log(overUnderOut.then((data)=>{
                console.log(data);
                const overUnderOutput = JSON.stringify(data);
                const overUnderTitle = getSubstring(overUnderOutput, '{', ':');
                const overUnderValue = getSubstring(overUnderOutput, ':', '}');
                localStorage.setItem(overUnderTitle.split('"')[1], Math.round(100 * overUnderValue.split('"')[1])/100);

                const balance = window.localStorage.getItem("balance")
                            if (balance == 0 || balance == "null"){
                               window.location.href = UI_URL + "calendar";
                            } else {
                            }

              }));
              }) //prints to console
              .then((data) => {
                setData(data);
              })
              .then((user) => {
              });

           const overUnderPrintAddress = () => {
              overUnderAddress.then((a) => {
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




    //Tab Code
    const [activeTab, setActiveTab] = useState("tab1");

    //  Functions to handle Tab Switching
      const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };




return (
    <div>
        <Container maxWidth={false} className="App-header-two" >
            <ul className="stacked-window">
                <li >
                    <Container className="content-window-text">
                       <div className="author">Austin Todd</div>
                       <div className="author">Andrew Mclaughlin</div>
                       <div className="author">Camden Gear</div>
                       <div className="author">Cecil Jacobi</div>
                       <div className="author">Colton Lutz</div>
                       <div className="author">Daniel Wichowski</div>
                       <div className="author">Derrick Krieger</div>
                       <div className="author">Tanner Hughes</div>
                       Commerce Bank App
                    </Container>

                </li>
                <li >
                    <Container className="content-window-two">
                        {msgTwo}

                    </Container>
                </li>
                <li >
                    <Container className="content-window-three">

                        <div className="Tabs">
                              {/* Tab nav */}
                              <ul className="tabNav">
                                <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Calendar</li>
                                <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Balance Adjustment</li>
                              </ul>
                              <div className="outlet">
                                  {activeTab === "tab1" ? <FirstTab startingDate={new Date()} eventsArr={EVENTS}/> : <SecondTab />}
                              </div>
                        </div>

                    </Container>
                </li>
            </ul>


        </Container>

    </div>

        
        
        
    
    
);

}

export default CalendarView;