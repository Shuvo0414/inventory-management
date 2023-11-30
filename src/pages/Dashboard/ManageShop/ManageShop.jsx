import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { SiMinutemailer } from "react-icons/si";
const ManageShop = () => {
  const axiosSecure = useAxiosSecure();

  const [shop, setShop] = useState([]) || [];
  console.log(shop);

  useEffect(() => {
    axiosSecure.get("/getAllShops").then((res) => {
      setShop(res.data);
    });
  }, [axiosSecure, setShop]);

  return (
    <div className="">
      <div className="overflow-x-auto mt-10 ">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#00B499] text-white ">
            <tr className=" text-base">
              <th>image</th>
              <th>Shop Name</th>
              <th>Product Limit</th>

              <th>Shop Description</th>

              <th>Send Email</th>
            </tr>
          </thead>
          <tbody>
            {shop?.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.shopLogo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="">{item.shopName}</td>
                <td>{item.productLimit}</td>
                <td>{item.shopInfo}</td>

                {/*  button */}
                <td>
                  <button className="btn text-lg btn-ghost btn-[30px] bg-[#00B499] text-white ">
                    <SiMinutemailer />
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

export default ManageShop;
