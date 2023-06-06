import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result/result";
import { Clock } from "./Clock/clock";
import { StyledForm, Header, Div, Paragraph, Select, Input, Button, H1 } from "./styled";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

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

  const onFormSubmit = (event) => {
    event.preventDefault();
    countResult(amount, currency)
}


    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Clock />
            <Header>
                <H1>
                    Przelicznik Walut
                </H1>
            </Header>
            <Div>
                <Paragraph>
                    Ilość w PLN
                </Paragraph>
                <Input
                    min={0}
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    type="number"
                    required placeholder="Podaj wartość nominału"
                />
            </Div>
            <Div>
                <Paragraph>Waluta</Paragraph>
                <Select
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
                </Select>
            </Div>
            <Div>
                <Paragraph choose>Wybrano</Paragraph>
                <Paragraph chosen><strong>{currency}</strong></Paragraph>
            </Div>

            <Div>
                <Button>
                    Oblicz
                </Button>

                <Result result={result} />

            </Div>
        </StyledForm>
         
    )

}

export default Form; 