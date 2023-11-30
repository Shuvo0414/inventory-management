import { CardElement } from "@stripe/react-stripe-js";

const Payment10Dollars = () => {
  return (
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
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Pay</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Payment10Dollars;
