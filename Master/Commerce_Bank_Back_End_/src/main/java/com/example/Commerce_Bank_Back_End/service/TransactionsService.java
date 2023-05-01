package com.example.Commerce_Bank_Back_End.service;

import com.example.Commerce_Bank_Back_End.repository.TransactionsRepository;

import java.sql.SQLException;

public class TransactionsService {
    private TransactionsRepository transactionsRepository = new TransactionsRepository();


    public TransactionsService() throws SQLException, ClassNotFoundException {
    }

    public String findCId(Integer t_id) throws SQLException {
        return transactionsRepository.findById(t_id);
    }


    //Get Methods by T_id
    /*********************************/

        //UId
        public String getUIdById(Integer t_id) throws SQLException {
            return transactionsRepository.getUIdById(t_id);
        }



        //Balance
        public String getBalanceById(Integer t_id) throws SQLException {
            return transactionsRepository.getBalanceById(t_id);
        }

        //Amount
        public String getAmountById(Integer t_id) throws SQLException {
            return transactionsRepository.getAmountById(t_id);
        }

        //Type
        public String getTypeById(String t_id) throws SQLException {
            return transactionsRepository.getTypeById(t_id);
        }

        //SavingsGoal
        public String getSavingsGoalById(Integer t_id) throws SQLException {
            return transactionsRepository.getSavingsGoalById(t_id);
        }

        //Date
        public String getDateById(Integer t_id) throws SQLException {
            return transactionsRepository.getDateById(t_id);
        }

    //Get Methods by U_id
    /*********************************/

        //TId
        public String getTIdByUId(String u_id) throws SQLException {
            return transactionsRepository.getTIdByUId(u_id);
        }

        //Balance
        public String getBalanceByUId(String u_id) throws SQLException {
            return transactionsRepository.getBalanceByUId(u_id);
        }

        //Amount
        public String getAmountByUId(String u_id) throws SQLException {
            return transactionsRepository.getAmountByUId(u_id);
        }

        //Type
        public String getTypeByUId(String u_id) throws SQLException {
            return transactionsRepository.getTypeByUId(u_id);
        }

        //Savings_Goal
        public String getSavingsGoalByUId(String u_id) throws SQLException {
            return transactionsRepository.getSavingsGoalByUId(u_id);
        }

        //Date
        public String getDateByUId(String u_id) throws SQLException {
            return transactionsRepository.getDateByUId(u_id);
        }




    //Calendar View Methods
    /***************************************************/

        //display all Expenses/Incomes
        public String displayExpensesIncomes(String u_id) throws SQLException {
            return transactionsRepository.displayExpensesIncomes(u_id);
        }

        //set savings goal
        public String setSavingsGoal(Integer t_id, double val) throws SQLException {
            return transactionsRepository.setSavingsGoal(t_id, val);
        }

        //display all daily balance
        public String findDailyBalance(String u_id, Integer month, Integer day, Integer year) throws SQLException {
            return transactionsRepository.findDailyBalance(u_id, month, day, year);
        }

        public String getTotalAmount(String u_id, Integer month, Integer day, Integer year) throws SQLException {
            return transactionsRepository.getTotalAmount(u_id, month, day, year);
        }



    //Balance Adjustment View Methods
    /***************************************************/

        //update balance
        public String updateBalance(String u_id, Double val) throws SQLException {
            return transactionsRepository.updateBalance(u_id, val);
        }


        //new Expenses/Incomes
        public String newExpensesIncomes(String u_id, double balance, double amount, String type, double savings_goal, String date) throws SQLException {
            return transactionsRepository.newExpensesIncomes(u_id, balance, amount, type, savings_goal, date);
        }

        //update type
        public String setType(Integer t_id, String val) throws SQLException {
            return transactionsRepository.setType(t_id, val);
        }

        //delete transaction
        public String deleteTransaction(Integer t_id) throws SQLException {
            return transactionsRepository.deleteTransaction(t_id);
        }

}
