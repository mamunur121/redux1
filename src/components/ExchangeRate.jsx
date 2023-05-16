import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { useDispatch, useSelector } from "react-redux";
import {
  getAmount,
  getCurrencyCode,
  getCurrencyData,
  supportedCurrencies,
} from "../store/rates.js";

export function ExchangeRate() {
  const dispatch = useDispatch();
  // const [amount, setAmount] = useState("1.50");
  const amount = useSelector(getAmount);
  // const [currencyCode, setCurrencyCode] = useState("USD");
  const currencyCode = useSelector(getCurrencyCode);
  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
  const currencyData = useSelector(getCurrencyData);

  // fetch the exchange rates each time currency code changes
  // useEffect(() => {
  //   getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
  //     setCurrencyData(rates);
  //   });
  // }, [currencyCode]);
  // useEffect(() => {
  //   dispatch(updateCurrencyData(currencyCode));
  // }, [currencyCode]);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
