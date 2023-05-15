import { useDispatch } from "react-redux";

export function CurrencyCodePicker({ supportedCurrencies, currencyCode }) {
  const dispatch = useDispatch();
  const setCurrencyCode = (e) => {
    dispatch({ type: "updateCurrencyCode", payload: e.target.value });
  };
  return (
    <select
      className="currencyCode"
      value={currencyCode}
      onChange={setCurrencyCode}
    >
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
