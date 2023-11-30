import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SalesHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [salesInfo, setSalesInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axiosSecure.get(
          `/sales?email=${user?.email}&page=${currentPage}`
        );
        setSalesInfo(response.data);

        console.log(
          "Selling Dates:",
          response.data.map((sale) => sale.sallingDate)
        );
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };

    fetchSales();
  }, [axiosSecure, user?.email, currentPage]);

  // Check if salesInfo is available before sorting
  const sortedSales = salesInfo
    ? salesInfo.sort(
        (a, b) => new Date(b.sellingDate) - new Date(a.sellingDate)
      )
    : [];

  // Get current page of items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedSales.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-center mt-20 text-2xl font-extrabold">
        Sales History{" "}
      </h2>
      <div className="overflow-x-auto mt-10 mx-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#00B499] text-white">
            <tr className="text-lg text-center">
              <th>Product Name</th>
              <th>Selling Date</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentItems.map((sale) => (
              <tr key={sale._id}>
                <td>{sale.productName}</td>
                <td>{new Date(sale.sallingDate).toLocaleDateString()}</td>
                <td>{sale.sellingPrice - sale.buyingPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className=" text-center">
        {Array.from({
          length: Math.ceil(sortedSales.length / itemsPerPage),
        }).map((_, index) => (
          <button
            className=" py-1 px-2 bg-[#00B499] text-white rounded-lg"
            key={index}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SalesHistory;
