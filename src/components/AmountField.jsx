import { useDispatch } from "react-redux";
import { updateAmount } from "../store/rates.js";

export function AmountField({ amount }) {
  const dispatch = useDispatch();
  const setAmount = (e) => {
    dispatch(updateAmount(e.target.value));
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
