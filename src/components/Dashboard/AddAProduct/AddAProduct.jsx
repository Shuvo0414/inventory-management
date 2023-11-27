import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useShop from "../../../hooks/useShop";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddAProduct = () => {
  const { register, handleSubmit } = useForm();
  const [shop] = useShop();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //   console.log(shop);
  // form submit
  const onSubmit = async (data) => {
    try {
      // Convert numeric fields to numbers
      const productQuantity = parseInt(data.productQuantity);
      const buyingPrice = parseInt(data.buyingPrice);
      const profitMargin = parseInt(data.profitMargin);
      const discount = parseInt(data.discount);
      console.log(productQuantity, buyingPrice, profitMargin, discount);
      // Calculate Selling Price
      const sellingPrice =
        buyingPrice +
        buyingPrice * (7.5 / 100) +
        buyingPrice * (profitMargin / 100);

      // image upload to imgbb and then get a URL
      const imageFile = { image: data.image[0] };
      const res = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        //
        const productObject = {
          ...data,
          image: res.data.data.display_url,
          shopId: shop[0]._id,
          shopName: shop[0].shopName,
          userEmail: user.email,
          sellingPrice,
          addedDate: new Date(),
          saleCount: 0,
        };
        console.log(productObject);
        const productRes = await axiosSecure.post("/products", productObject);
        // console.log(productRes);
        if (productRes.status === 201) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error("Error creating shop:", error);
    }
  };
  return (
    <div className=" ">
      <h1 className=" text-center text-4xl font-bold">Add Product</h1>
      <div className=" mt-6 lg:w-[992px] mx-auto p-11 bg-[#F3F3F3] mb-[100px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col lg:flex-row gap-6">
            {/* product name */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Product Name*
                </span>
              </label>
              <input
                {...register("productName", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
            </div>
            {/* product location */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Product Location*
                </span>
              </label>
              <input
                {...register("prodcutLocation", { required: true })}
                type="text"
                placeholder="Location"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* product quantity and coost */}
          <div className=" mt-4 flex flex-col lg:flex-row gap-6">
            {/*  Product Quantity  */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Product Quantity*
                </span>
              </label>
              <input
                {...register("productQuantity", { required: true })}
                type="number"
                placeholder="Quantity"
                className="input input-bordered w-full "
              />
            </div>
            {/* ProductionCost */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Production Cost*
                </span>
              </label>
              <input
                {...register("buyingPrice", { required: true })}
                type="number"
                placeholder="Cost"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/*  */}
          <div className=" mt-4 flex flex-col lg:flex-row gap-6">
            {/*  Profit Margin  */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Profit Margin*
                </span>
              </label>
              <input
                {...register("profitMargin", { required: true })}
                type="number"
                placeholder="Margin"
                className="input input-bordered w-full "
              />
            </div>
            {/* Discount */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Discount*
                </span>
              </label>
              <input
                {...register("discount", { required: true })}
                type="number"
                placeholder="Discount"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/*  */}
          <div className="form-control w-full my-6  ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Product Description*
              </span>
            </label>
            <textarea
              {...register("productDescription", { required: true })}
              className="textarea textarea-bordered h-[200px]"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Product Image*
              </span>
            </label>
            <input
              {...register("image")}
              type="file"
              className=" w-full max-w-xs input py-2 input-bordered"
            />
          </div>
          <button className="btn bg-[#00B499] text-white  font-bold rounded-none">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
