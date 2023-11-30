import { useEffect, useState } from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Checkoutform = () => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.post("").then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("[error]", error);
      setError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" gap-3 grid md:grid-cols-3">
        {/* 1st card */}
        <div className="card  w-[300px]  bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title"> 10 dollars</h2>
            <p>Lmit to 200</p>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Purchase
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Pay</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* 2nd card */}
        <div className="card w-[300px]  bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title"> 20 dollars</h2>
            <p>Lmit to 450</p>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Purchase
            </button>
          </div>
        </div>
        {/* 3rd card */}
        <div className="card  w-[300px]  bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title"> 50 dollars</h2>
            <p>Lmit to 1500</p>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkoutform;
