import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result/result";
import "./style.css"


const Form = ({ result, countResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(amount, currency)
    }
    return (
        <form onSubmit={onFormSubmit} className="form">
            <header className="section form__header">
                <h1>
                    Przelicznik Walut
                </h1>
            </header>
            <div className="section">
                <p className="form__paragraph">
                    Ilość w PLN
                </p>
                <input
                    min={0}
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    type="number"
                    className="form__input"
                    required placeholder="Podaj wartość nominału"
                />
            </div>
            <div className="section">
                <p className="form__paragraph">Waluta</p>
                <select
                    className="form__select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map((currency => (
                        <option
                            className="form__option"
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.content}
                        </option>

                    )))}
                </select>
            </div>
            <div className="section">
                <p className="form__paragraph form__paragraph--choose">Wybrano</p>
                <p className="form__paragraph form__paragraph--chosen"><strong>{currency}</strong></p>
            </div>

            <div className="section">
                <button className="form__button">Oblicz</button>

                <Result result={result} />

            </div>

        </form>
    )

}

export default Form; 