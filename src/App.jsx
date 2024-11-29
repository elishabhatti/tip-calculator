import React, { useState } from "react";

const App = () => {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [persons, setPersons] = useState();
  const [currency, setCurrency] = useState();
  const [result, setResult] = useState("");

  const currencySymbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    Other: "",
  };

  const handleTipDisplay = () => {
    if (bill && tip && persons && currency) {
      const tipAmount = (bill * tip) / 100;
      const totalAmount = parseFloat(bill) + tipAmount;
      const perPerson = totalAmount / (persons || 1);

      const symbol = currencySymbols[currency];
      setResult(
        `Tip Amount: ${symbol}${tipAmount.toFixed(
          2
        )} | Total Amount: ${symbol}${totalAmount.toFixed(
          2
        )} | Per Person: ${symbol}${perPerson.toFixed(2)}`
      );
    } else {
      alert("Add First");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-neutral-950">
      <div className=" m-4 w-[450px] border  py-5 px-5 rounded-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Tip Calculator
        </h1>
        <input
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          type="number"
          placeholder="Enter Your Total Bill Amount"
          className="w-full p-3 border rounded-md mb-4 bg-neutral-900 text-white"
        />
        <input
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          type="number"
          placeholder="Enter Your Tip Percentage"
          className="w-full p-3 border rounded-md mb-4 bg-neutral-900 text-white"
        />
        <input
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          type="number"
          min="1"
          placeholder="Enter Number of Persons"
          className="w-full p-3 border rounded-md mb-4 bg-neutral-900 text-white"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-3 border rounded-md mb-4 bg-neutral-900 text-white"
        >
          <option value="Select a Currency">Select a Currency</option>
          <option value="USD">USD ($)</option>
          <option value="INR">INR (₹)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="Other">Other</option>
        </select>
        <button
          onClick={handleTipDisplay}
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <p className="mt-4 text-lg text-center text-white">{result}</p>
      </div>
    </div>
  );
};

export default App;
