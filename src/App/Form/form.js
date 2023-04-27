import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result/result";



const Form = ({ result, countResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(amount, currency)
    }
    return (
        <form onSubmit={onFormSubmit} className="form">
            <header className="form__header">
                <h1>
                    Przelicznik Walut
                </h1>
            </header>
            <div className="section">
                <span>
                    Ilość w PLN :
                </span>
                <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    type="number"
                    className="form__input"
                    required placeholder="Wartość nominału"
                />
            </div>
            <div className="section">
                <p>Waluta:</p>
                <select
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map((currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.content}
                        </option>

                    )))}
                </select>
                <p>Wybrano: {currency}</p>
            </div>

            <div className="section">
                <button>Oblicz</button>

                <Result result={result} />

            </div>

        </form>
    )

}

export default Form; 