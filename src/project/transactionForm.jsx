import React, { useState } from "react";

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
      className="bg-white shadow-md rounded p-4 mb-4"
    >
      <h2 className="text-xl font-semibold mb-2">Tambah Transaksi</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Jumlah"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      >
        <option value="">Pilih Jenis</option>
        <option value="pemasukan">Pemasukan</option>
        <option value="pengeluaran">Pengeluaran</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Tambah Transaksi
      </button>
    </form>
  );
};

export default TransactionForm;
