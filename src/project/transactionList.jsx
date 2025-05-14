import React from "react";

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-semibold mb-2">Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p>Tidak ada transaksi.</p>
      ) : (
        <ul>
          {transactions.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-semibold">{t.description}</p>
                <p>
                  Rp {t.amount.toLocaleString()} - {t.type}
                </p>
              </div>
              <button
                onClick={() => onDeleteTransaction(index)}
                className="text-red-500 hover:underline"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;