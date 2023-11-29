const Payment = () => {
  return (
    <div className=" gap-3 grid md:grid-cols-3">
      {/* 1st card */}
      <div className="card  w-[300px]  bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> 10 dollars</h2>
          <p>Lmit to 200</p>
          <button className=" btn">Purchase Card</button>
        </div>
      </div>
      {/* 2nd card */}
      <div className="card w-[300px]  bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> 20 dollars</h2>
          <p>Lmit to 450</p>
          <button className=" btn">Purchase Card</button>
        </div>
      </div>
      {/* 3rd card */}
      <div className="card  w-[300px]  bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> 50 dollars</h2>
          <p>Lmit to 1500</p>
          <button className=" btn">Purchase Card</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
