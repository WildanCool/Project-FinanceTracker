import React from "react";
import { Trash2, ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📄 Daftar Transaksi</h2>

      {transactions.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <p className="text-lg">Belum ada transaksi.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {transactions.map((t, index) => {
            const isIncome = t.type === "pemasukan";
            const Icon = isIncome ? ArrowDownCircle : ArrowUpCircle;
            const iconColor = isIncome ? "text-green-600" : "text-red-600";
            const amountColor = isIncome ? "text-green-700" : "text-red-700";

            return (
              <li
                key={index}
                className="flex justify-between items-center py-4 hover:bg-gray-50 rounded-lg transition px-2"
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                  <div>
                    <p className="font-medium text-gray-800">{t.description}</p>
                    <p className={`text-sm ${amountColor}`}>
                      Rp {t.amount.toLocaleString()} - {t.type}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onDeleteTransaction(index)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Hapus transaksi"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
