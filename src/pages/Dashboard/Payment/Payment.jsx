import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import Payment10Dollars from "./Payment10Dollars";
import Payment20Dollars from "./Payment20Dollars";
import Payment50Dollars from "./Payment50Dollars";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkoutform></Checkoutform>
      </Elements>
    </div>
  );
};

export default Payment;
