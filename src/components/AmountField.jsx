import { useDispatch } from "react-redux";

export function AmountField({ amount }) {
  const dispatch = useDispatch();
  const setAmount = (e) => {
    dispatch({ type: "updateAmount", payload: e.target.value });
  };
  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={setAmount}
      />
    </form>
  );
}
