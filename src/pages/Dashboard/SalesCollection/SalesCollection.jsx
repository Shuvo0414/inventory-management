import { IoIosAddCircleOutline } from "react-icons/io";
import useProduct from "../../../hooks/useProduct";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

const SalesCollection = () => {
  const [product] = useProduct();
  const { user } = useAuth();
  // console.log(product);
  const axiosSecure = useAxiosSecure();
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(filteredProducts);

  const handleAddToCheckout = (item) => {
    if (user && user.email) {
      // sent user cart to the data base
      const { _id } = item;
      // console.log(_id);
      const checkoutIfo = {
        productId: _id,
        productName: item.productName,
        productLocation: item.productLocation,
        productQuantity: item.productQuantity,
        buyingPrice: item.buyingPrice,
        profitMargin: item.profitMargin,
        discount: item.discount,
        productDescript: item.productDescript,
        image: item.image,
        shopId: item.shopId,
        shopName: item.shopName,
        userEmail: item.userEmail,
        sellingPrice: item.sellingPrice,
        addedDate: item.addedDate,
        saleCount: item.saleCount,
        email: user.email,
      };

      // console.log(checkoutIfo);

      axiosSecure
        .post("/checkout", checkoutIfo)
        .then((res) => {
          // console.log(res.data);
          if (res.status === 201) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  // search

  const handleCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };
  const handleSearchClick = () => {
    const lowercaseCategory = searchCategory.toLowerCase();
    // Filter products based on the searchCategory
    const newFilteredProducts = product.filter((item) => {
      return (
        item.category && item.category.toLowerCase().includes(lowercaseCategory)
      );
    });

    setFilteredProducts(newFilteredProducts);
    setSearchCategory("");
  };

  return (
    <div>
      <div className="  flex gap-2  items-center justify-center">
        <input
          type="text"
          placeholder="Search by Product ID"
          className="input input-bordered w-full md:w-[600px] lg:w-[800px]"
          value={searchCategory}
          onChange={handleCategoryChange}
        />

        <button
          onClick={handleSearchClick}
          className=" btn bg-[#00B499] text-white"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto mt-10 ">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#00B499] text-white ">
            <tr>
              <th>image</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Id</th>
              <th>Discount</th>
              <th>SellingPrice</th>
              <th>Add For Check-out</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.productName}</td>
                <td>{item.productQuantity}</td>
                <td>{item._id}</td>
                <td>{item.discount}%</td>
                <td>{item.sellingPrice}</td>
                {/* check-out button */}
                <td>
                  <button
                    onClick={() => handleAddToCheckout(item)}
                    className="btn text-lg btn-ghost btn-[30px] bg-[#00B499] text-white "
                  >
                    <IoIosAddCircleOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={"/dashboard/check-out"}>
          <button className=" flex mx-auto px-2 py-2 bg-[#00B499] rounded-md text-white">
            Check-out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SalesCollection;
