import { storeContext } from "./context";
import { useState } from "react";

const StoreContextProvider = ({ children }) => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [persons, setPersons] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("dark");
  const [copy, setCopy] = useState("Copy");
  return (
    <storeContext.Provider
      value={{
        bill,
        setBill,
        tip,
        setTip,
        persons,
        setPersons,
        currency,
        setCurrency,
        result,
        setResult,
        theme,
        setTheme,
        copy,
        setCopy,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
