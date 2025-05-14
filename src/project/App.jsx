// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TransactionForm from "./transactionForm";
import TransactionList from "./transactionList";
import FinanceSummary from "./financeSummary";

const AplikasiFinanceTracker = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("transactions");
    if (data) {
      setTransactions(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  return (
    <Router>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Personal Finance Tracker</h1>
        <nav className="flex justify-center gap-4 mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Ringkasan</Link>
          <Link to="/form" className="text-blue-500 hover:underline">Formulir</Link>
          <Link to="/list" className="text-blue-500 hover:underline">Daftar</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FinanceSummary transactions={transactions} />} />
          <Route path="/form" element={<TransactionForm onAddTransaction={addTransaction} />} />
          <Route path="/list" element={<TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AplikasiFinanceTracker;