import React from "react";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";

const FinanceSummary = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "pemasukan")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "pengeluaran")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">💼 Ringkasan Keuangan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center p-4 bg-green-50 rounded-xl">
          <ArrowDownCircle className="text-green-600 w-6 h-6 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Total Pemasukan</p>
            <p className="text-lg font-semibold text-green-700">Rp {income.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-red-50 rounded-xl">
          <ArrowUpCircle className="text-red-600 w-6 h-6 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Total Pengeluaran</p>
            <p className="text-lg font-semibold text-red-700">Rp {expense.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-blue-50 rounded-xl">
          <Wallet className="text-blue-600 w-6 h-6 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Saldo Akhir</p>
            <p className="text-lg font-bold text-blue-700">Rp {balance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSummary;
