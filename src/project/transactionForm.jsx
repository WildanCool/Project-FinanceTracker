import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !type) {
      setError("Semua field harus diisi.");
      return;
    }
    if (parseFloat(amount) <= 0) {
      setError("Jumlah harus lebih dari 0.");
      return;
    }

    onAddTransaction({
      description,
      amount: parseFloat(amount),
      type,
    });

    setDescription("");
    setAmount("");
    setType("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 w-full max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <PlusCircle className="w-6 h-6 text-blue-500" />
        Tambah Transaksi
      </h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Deskripsi</label>
        <input
          type="text"
          placeholder="Contoh: Gaji Bulanan"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Jumlah</label>
        <input
          type="number"
          placeholder="Contoh: 500000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-1">Jenis Transaksi</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="">Pilih Jenis</option>
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Tambah Transaksi
      </button>
    </form>
  );
};

export default TransactionForm;
