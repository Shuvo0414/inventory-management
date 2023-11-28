import axios from "axios";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const item = useLoaderData();
  //   console.log(item);

  const {
    productName,
    productLocation,
    productQuantity,
    buyingPrice,
    profitMargin,
    discount,
    _id,
  } = item;

  const onSubmit = async (data) => {
    try {
      // image upload to imgbb and then get a URL
      const imageFile = { image: data.image[0] };
      const res = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        //update product
        const updateProduct = {
          ...data,
          image: res.data.data.display_url,
        };
        const updateResponse = await axiosSecure.put(
          `/products/${_id}`,
          updateProduct
        );

        if (updateResponse.status === 200) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product update successfuly",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/dashboard/product-management");
        }
      }
    } catch (error) {
      console.error("Error creating shop:", error);
    }
  };
  return (
    <div className=" ">
      <h1 className=" text-center text-4xl font-bold">Update Product</h1>
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
                defaultValue={productName}
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
                defaultValue={productLocation}
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
                defaultValue={productQuantity}
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
                defaultValue={buyingPrice}
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
                defaultValue={profitMargin}
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
                defaultValue={discount}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
