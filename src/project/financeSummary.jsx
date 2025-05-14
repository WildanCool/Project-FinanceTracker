import React from "react";

const FinanceSummary = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "pemasukan")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "pengeluaran")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Ringkasan Keuangan</h2>
      <p>Total Pemasukan: Rp {income.toLocaleString()}</p>
      <p>Total Pengeluaran: Rp {expense.toLocaleString()}</p>
      <p className="font-bold">Saldo Akhir: Rp {balance.toLocaleString()}</p>
    </div>
  );
};

export default FinanceSummary;
