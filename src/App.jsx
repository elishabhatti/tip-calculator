import React, {  useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons

const App = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [persons, setPersons] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("dark");
  const [copy, setCopy] = useState("Copy")

  const currencySymbols = {
    USD: "$:",
    INR: "₹:",
    EUR: "€:",
    GBP: "£:",
    PKR: "Rs:",
    Other: "",
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleRefresh = () => {
    setBill("")
    setTip("")
    setPersons("")
    setResult("")
    setCopy("Copy")
    setCurrency("")
  }

  const copyToClipboard = () => {
    if(result) {
      navigator.clipboard.writeText(result)
      setCopy("Copied")
    }else {
      setCopy("Copy")
    }
  }

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
      alert("Fill the Field First");
    }
  };

  return (
    <div
      className={`flex justify-center items-center h-[100vh] ${
        theme === "dark" ? "bg-neutral-950" : "bg-white"
      }`}
    >
      <div
        className={`m-4 w-[450px] ${
          theme === "dark" ? "border border-white" : "border border-gray-400"
        } py-5 px-5 rounded-md`}
      >
        <h1
          className={`text-2xl uppercase  font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          } text-center mb-6`}
        >
          Tip Calculator
        </h1>
        <button
          className={`mb-4 w-full bg-blue-700 text-white py-2 rounded-md font-semibold flex justify-center items-center gap-2`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <input
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          type="number"
          placeholder="Enter Your Total Bill Amount"
          className={`w-full p-3 border rounded-md mb-4 ${
            theme === "dark"
              ? "bg-neutral-900 text-white border-gray-700"
              : "bg-white text-black border-gray-400"
          }`}
        />
        <input
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          type="number"
          placeholder="Enter Your Tip Percentage"
          className={`w-full p-3 border rounded-md mb-4 ${
            theme === "dark"
              ? "bg-neutral-900 text-white border-gray-700"
              : "bg-white text-black border-gray-400"
          }`}
        />
        <input
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          type="number"
          min="1"
          placeholder="Enter Number of Persons"
          className={`w-full p-3 border rounded-md mb-4 ${
            theme === "dark"
              ? "bg-neutral-900 text-white border-gray-700"
              : "bg-white text-black border-gray-400"
          }`}
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className={`w-full p-3 border rounded-md mb-4 ${
            theme === "dark"
              ? "bg-neutral-900 text-white border-gray-700"
              : "bg-white text-black border-gray-400"
          }`}
        >
          <option value="">Select a Currency</option>
          <option value="USD">USD ($)</option>
          <option value="INR">INR (₹)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="PKR">PKR (Rs)</option>
          <option value="Other">Other</option>
        </select>
        <button
          onClick={handleTipDisplay}
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <p
          className={`mt-4 text-lg text-center ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {result}
        </p>
          {result && (
            <div className="flex justify-center items-center">
            <button className={`w-full my-2 mx-1  py-2 rounded-md bg-blue-700 text-white  `}
             onClick={copyToClipboard}>{copy}</button>
            <button className={`w-full my-2 mx-1  py-2 rounded-md bg-blue-700 text-white  `}
             onClick={handleRefresh}>Clear All</button>
             </div>
          ) }
      </div>
    </div>
  );
};

export default App;
