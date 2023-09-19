import { useState } from "react";

const Views = () => {
  const [amount, setAmount] = useState(0);
  const [cost, setCost] = useState([]);
  return (
    <button onClick={() => setAmount(amount + 1)}>Me gusta {amount}</button>
  );
};

export default Views;
