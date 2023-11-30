const SalesSummaryCard = ({ totalSale, totalInvest, totalProfit }) => {
  return (
    <div className=" gap-3 grid md:grid-cols-3">
      {/* 1st card */}
      <div className="card  w-[300px]  bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Total Invest</h2>
          <p>{totalInvest}</p>
        </div>
      </div>
      {/* 2nd card */}
      <div className="card w-[300px]  bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Total Sale </h2>
          <p>{totalSale}</p>
        </div>
      </div>
      {/* 3rd card */}
      <div className="card  w-[300px]  bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Total Profit</h2>
          <p>{totalProfit}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesSummaryCard;
