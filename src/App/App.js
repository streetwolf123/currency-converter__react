import Form from "./Form/form";
import { useState } from "react";
import { currencies } from "./currencies"
import React from "react";

function App() {
  const [result, setResult] = useState();

  const countResult = (amount, currency) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }
  return (
    
      <Form

        result={result}
        countResult={countResult}
      />
    
  );
}

export default App;
