package com.example.Commerce_Bank_Back_End.controller;

import com.example.Commerce_Bank_Back_End.domain.Transactions;
import com.example.Commerce_Bank_Back_End.service.TransactionsService;
import org.codehaus.jackson.JsonProcessingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.YearMonth;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
public class TransactionsController {
    private final TransactionsService transactionsService = new TransactionsService();


    public TransactionsController() throws SQLException, ClassNotFoundException {
    }

    //Checking if Get Mapping Works
    @CrossOrigin
    @GetMapping("/checkGetWorks")
    public ResponseEntity<?> checkGetWorks(Model model) throws ClassNotFoundException, SQLException {
        System.out.println("");
        return new ResponseEntity<>("Get Works", HttpStatus.OK);
    }


    //GET METHODS By T_id
    /******************************************/

        //Test Get T_id path variable... get from local
        @CrossOrigin
        @GetMapping("/getId/{t_id}")
        public ResponseEntity<?> getId(@PathVariable Integer t_id) throws ClassNotFoundException, SQLException {
            System.out.println(t_id);
            return new ResponseEntity<>("T_Id: " + t_id, HttpStatus.OK);
        }


        //Get U_id
        @CrossOrigin
        @GetMapping("/getUIdById/{t_id}")
        public ResponseEntity<?> getUIdById(Model model, @PathVariable Integer t_id) throws ClassNotFoundException, SQLException {
            System.out.println(t_id);
            String newUId = transactionsService.getUIdById(t_id);
            return new ResponseEntity<>("U_Id: " + newUId, HttpStatus.OK);
        }

        //Get Balance
        @CrossOrigin
        @GetMapping("/getBalanceById/{t_id}")
        public ResponseEntity<?> getBalanceById(Model model, @PathVariable Integer t_id) throws ClassNotFoundException, SQLException {
            System.out.println(t_id);
            String newBalance = transactionsService.getBalanceById(t_id);
            return new ResponseEntity<>("Balance: " + newBalance, HttpStatus.OK);
        }

        //Get Amount
        @CrossOrigin
        @GetMapping("/getAmountById/{t_id}")
        public ResponseEntity<?> getAmountById(Model model, @PathVariable Integer t_id) throws ClassNotFoundException, SQLException {
            System.out.println(t_id);
            String newAmount = transactionsService.getAmountById(t_id);
            return new ResponseEntity<>("Amount: " + newAmount, HttpStatus.OK);
        }

        //Get Type

        @CrossOrigin
        @GetMapping("/getTypeById/{t_id}")
        public ResponseEntity<?> getTypeById(Model model, @PathVariable String t_id) throws ClassNotFoundException, SQLException {
            System.out.println(t_id);
            String newType = transactionsService.getTypeById(t_id);
            return new ResponseEntity<>("{\"data\" : \"" + newType + "\"}", HttpStatus.OK);
        }

        //Get Savings_Goal
        @CrossOrigin
        @GetMapping("/getSavingsGoalById/{t_id}")
        public ResponseEntity<?> getSavingsGoalById(Model model, @PathVariable Integer t_id) throws ClassNotFoundException, SQLException {
            System.out.println(t_id);
            String newSavingsGoal = transactionsService.getSavingsGoalById(t_id);
            return new ResponseEntity<>("Savings_goal: " + newSavingsGoal, HttpStatus.OK);
        }

        //Get Date
        @CrossOrigin
        @GetMapping("/getDateById/{t_id}")
        public ResponseEntity<?> getDateById(Model model, @PathVariable Integer t_id) throws ClassNotFoundException, SQLException {
            System.out.println(t_id);
            String newDate = transactionsService.getDateById(t_id);
            return new ResponseEntity<>("Date: " + newDate, HttpStatus.OK);
        }



    //GET METHODS By U_id
    /******************************************/


        //Get T_id
        @CrossOrigin
        @GetMapping("/getTIdByUId/{u_id}")
        public ResponseEntity<?> getTIdByUId(Model model, @PathVariable String u_id) throws ClassNotFoundException, SQLException {
            String newTId = transactionsService.getTIdByUId(u_id);
            return new ResponseEntity<>("T_Id: " + newTId, HttpStatus.OK);
        }

        //Get Balance
        @CrossOrigin
        @GetMapping("/getBalanceByUId/{u_id}")
        public ResponseEntity<?> getBalanceByUId(Model model, @PathVariable String u_id) throws ClassNotFoundException, SQLException {
            String newBalance = transactionsService.getBalanceByUId(u_id);
            return new ResponseEntity<>("{\"balance\" : \"" + newBalance + "\"}", HttpStatus.OK);
        }

        //Get Amount
        @CrossOrigin
        @GetMapping("/getAmountByUId/{u_id}")
        public ResponseEntity<?> getAmountByUId(Model model, @PathVariable String u_id) throws ClassNotFoundException, SQLException {
            String newAmount = transactionsService.getAmountByUId(u_id);
            return new ResponseEntity<>("{\"amount\" : \"" + newAmount + "\"}", HttpStatus.OK);
        }

        //Get Type
        @CrossOrigin
        @GetMapping("/getTypeByUId/{u_id}")
        public ResponseEntity<?> getTypeByUId(Model model, @PathVariable String u_id) throws ClassNotFoundException, SQLException {
            String newType = transactionsService.getTypeByUId(u_id);
            return new ResponseEntity<>("{\"type\" : \"" + newType + "\"}", HttpStatus.OK);
        }

        //Get Savings_Goal
        @CrossOrigin
        @GetMapping("/getSavingsGoalByUId/{u_id}")
        public ResponseEntity<?> getSavingsGoalByUId(Model model, @PathVariable String u_id) throws ClassNotFoundException, SQLException {
            String newSavingsGoal = transactionsService.getSavingsGoalByUId(u_id);
            return new ResponseEntity<>("{\"savingsGoal\" : \"" + newSavingsGoal + "\"}", HttpStatus.OK);
        }

        //Get Date
        @CrossOrigin
        @GetMapping("/getDateByUId/{u_id}")
        public ResponseEntity<?> getDateByUId(Model model, @PathVariable String u_id) throws ClassNotFoundException, SQLException {
            String newDate = transactionsService.getDateByUId(u_id);
            return new ResponseEntity<>("{\"date\" : \"" + newDate + "\"}", HttpStatus.OK);
        }




     //Calendar View Methods
    /***************************************************/

        //Display all expenses/incomes by u_id
        @CrossOrigin
        @GetMapping("/displayExpensesIncomes/{id}")
        public ResponseEntity<?> displayExpensesIncomes(Model model, @PathVariable("id") String u_id, Transactions transactions) throws ClassNotFoundException, SQLException {
            String newExpensesIncomesDisplay = transactionsService.displayExpensesIncomes(u_id);
            return new ResponseEntity<>("{\"expensesIncomes\" : \"" + newExpensesIncomesDisplay + "\"}", HttpStatus.OK);
        }




        //update savings_goal
        @CrossOrigin
        @RequestMapping(value = "/setSavingsGoal/{t_id}/{val}", method = {RequestMethod.POST, RequestMethod.GET})
        public ResponseEntity<?> setSavingsGoal(Model model, @PathVariable Integer t_id, @PathVariable double val, Transactions transactions) throws ClassNotFoundException, SQLException {
            String newSetGoal = transactionsService.setSavingsGoal(t_id, val);
            return new ResponseEntity<>(transactions, HttpStatus.OK);
        }

        //get target balance     formula: (day/total days in month) * monthly savings + balance
        @CrossOrigin
        @RequestMapping(value = "/getTotalAmount/{id}/{month}/{day}/{year}", method = {RequestMethod.POST, RequestMethod.GET})
        public @ResponseBody Double getTotalAmount(Model model, @PathVariable("id") String u_id, @PathVariable Integer month, @PathVariable Integer day, @PathVariable Integer year, Transactions transactions) throws ClassNotFoundException, SQLException {
            double output = 0;

            double newTotalAmount = Double.parseDouble(transactionsService.getTotalAmount(u_id, month, day, year));


            if(output == 0){
                return 0.0;
            } else {
                return output;
            }

        }

        //find if over or under target balance

        @CrossOrigin
        @RequestMapping(value = "/findOverUnder/{id}/{month}/{day}/{year}", method = {RequestMethod.POST, RequestMethod.GET})
        public ResponseEntity<?> findOverUnder(Model model, @PathVariable("id") String u_id, @PathVariable Integer month, @PathVariable Integer day, @PathVariable Integer year, Transactions transactions) throws ClassNotFoundException, SQLException {

            //find total amount spent in a given day
            double daily = Double.parseDouble(transactionsService.getTotalAmount(u_id, month, day, year));
            System.out.println("daily:" + daily);

            //findDailyBalance target
            double target = Double.parseDouble(transactionsService.findDailyBalance(u_id, month, day, year));
            System.out.println("target: " + target);

            String output = "";

            //see if over or under
            if(daily > target){
                System.out.println("Over target value by " + (daily - target));
                output = "" + (daily - target);
            } else if (daily < target){
                System.out.println("Under target value by " + (target - daily));
                output= "" + (target - daily);
            } else {
                System.out.println("Equal with target value at " + (daily));
                output= "" + daily;
            }

            return new ResponseEntity<>("{\"overUnder\" : \"" + output + "\"}", HttpStatus.OK);

        }

        //get daily balance
        @CrossOrigin
        @RequestMapping(value = "/findDailyBalance/{id}/{month}/{day}/{year}", method = {RequestMethod.POST, RequestMethod.GET})
        public ResponseEntity<?> findDailyBalance(Model model, @PathVariable("id") String u_id,  @PathVariable("month") Integer month, @PathVariable("day") Integer day, @PathVariable("year") Integer year, Transactions transactions) throws ClassNotFoundException, SQLException {


            //Return array of all balance with given u_id and given month
            String newDailyBalance = transactionsService.findDailyBalance(u_id, month, day, year);
            //add all up

            return new ResponseEntity<>("{\"dailyBalance\" : \"" + newDailyBalance + "\"}", HttpStatus.OK);

        }





    //Balance Adjustment View Methods
    /***************************************************/

        //check and set initial balance
        @CrossOrigin
        @RequestMapping(value = "/updateBalance/{id}/{val}", method = {RequestMethod.POST, RequestMethod.GET})
        public ResponseEntity<?> updateBalance(Model model, @PathVariable("id") String u_id, @PathVariable Double val, Transactions transactions) throws ClassNotFoundException, SQLException {

                String newBalance = transactionsService.updateBalance(u_id, val);
                return new ResponseEntity<>(transactions, HttpStatus.OK);

        }

        //set expenses/incomes
        @CrossOrigin
        @RequestMapping(value = "/newExpensesIncomes/{id}/{amount}/{balance}/{type}/{savings_goal}", method = {RequestMethod.POST, RequestMethod.GET})
        public ResponseEntity<?> newExpensesIncomes(Model model, @PathVariable("id") String u_id, @PathVariable double amount, @PathVariable double balance, @PathVariable String type, @PathVariable double savings_goal, Transactions transactions) throws ClassNotFoundException, SQLException, ParseException {



            Date date = new Date();

            SimpleDateFormat oldFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
            String input = oldFormat.format(date);

            Date newdate = oldFormat.parse(input);
            SimpleDateFormat newFormat = new SimpleDateFormat("yyyy-MM-dd");
            String output = newFormat.format(newdate);

            String newTransactions = transactionsService.newExpensesIncomes(u_id, balance, amount, type, savings_goal, output);
            return new ResponseEntity<>(newTransactions, HttpStatus.OK);

        }



        //update type
        @CrossOrigin
        @RequestMapping(value = "/updateType/{t_id}/{val}", method = {RequestMethod.POST, RequestMethod.GET})
        public ResponseEntity<?> updateType(Model model, @PathVariable Integer t_id, @PathVariable String val, Transactions transactions) throws ClassNotFoundException, SQLException {
            String newType = transactionsService.setType(t_id, val);
            return new ResponseEntity<>(transactions, HttpStatus.OK);
        }





}
