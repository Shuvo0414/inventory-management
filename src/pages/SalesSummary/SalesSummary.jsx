import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SalesSummaryCard from "../../components/Dashboard/SalesSummaryCard/SalesSummaryCard";
import SalesHistory from "./SalesHistory";

const SalesSummary = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [salesInfo, setSalesInfo] = useState();

  console.log(salesInfo);

  useEffect(() => {
    axiosSecure.get(`/sales?email=${user?.email}`).then((res) => {
      setSalesInfo(res.data);
    });
  }, [axiosSecure, user?.email]);

  // Calculate total sale, total invest, and total profit
  const totalSale = salesInfo
    ? salesInfo.reduce((acc, sale) => acc + sale.sellingPrice, 0)
    : 0;
  const totalInvest = salesInfo
    ? salesInfo.reduce((acc, sale) => acc + sale.buyingPrice, 0)
    : 0;
  const totalProfit = totalSale - totalInvest;

  console.log(totalInvest, totalProfit, totalSale);

  return (
    <div>
      <SalesSummaryCard
        totalSale={totalSale}
        totalInvest={totalInvest}
        totalProfit={totalProfit}
      ></SalesSummaryCard>
      <SalesHistory salesInfo={salesInfo}></SalesHistory>
    </div>
  );
};

export default SalesSummary;
