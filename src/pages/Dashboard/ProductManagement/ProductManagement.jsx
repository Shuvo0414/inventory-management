import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useShop from "../../../hooks/useShop";

const ProductManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [product, refetch] = useProduct();
  const [shop] = useShop();
  // console.log(product);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/products/${item._id}`);
        console.log(item._id);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          // incrise productlimit
          const updatedShop = { productLimit: shop[0].productLimit + 1 };
          await axiosSecure.patch(`/shop/${shop[0]._id}`, updatedShop);
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="  flex gap-2  border-t-[2px] border-b-[2px] items-center justify-center">
        <h1 className=" text-2xl font-bold w-full md:w-[600px] lg:w-[800px]">
          Total {product?.length} Product Added
        </h1>
        <Link to={"add-a-product"}>
          <button className=" btn bg-[#00B499] text-white">
            Add A Product
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto mt-10 ">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#00B499] text-white ">
            <tr>
              <th>image</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Sale Count</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(product) &&
              product.map((item) => (
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
                  <td>{item.saleCount}</td>
                  {/* update button */}
                  <td>
                    <Link to={`/dashboard/updateProduct/${item._id}`}>
                      <button className="btn btn-ghost btn-[40px] bg-[#00B499] text-white ">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  {/* delete button */}
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-[40px] bg-[#B91C1C] text-white  mt-3"
                    >
                      <RiDeleteBin5Line></RiDeleteBin5Line>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
