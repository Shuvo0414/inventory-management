import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateStore = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // console.log(user);

  // form submit
  const onSubmit = async (data) => {
    try {
      // image upload to imgbb and then get a URL
      const imageFile = { image: data.shopLogo[0] };
      const res = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        // send the menu item data to the server with the image URL
        const shopInfo = {
          shopName: data.shopName,
          shopArea: data.shopArea,
          shopInfo: data.shopInfo,
          shopLogo: res.data.data.display_url,
          userEmail: data.email,

          productLimit: 3,
        };

        // console.log(shopInfo);

        // make a request to create a shop
        const shopRes = await axiosSecure.post("/creatShop", shopInfo);
        console.log(shopRes.data.shop._id);
        if (shopRes.status === 201) {
          reset();

          const updateUser = {
            shopId: shopRes.data.shop._id,
            shopName: shopRes.data.shop.shopName,
            shopLogo: shopRes.data.shop.shopLogo,
            role: "maneger",
          };
          // console.log(updateUser);

          await axiosSecure.put(`/users/${user?.email}`, updateUser);

          // show success alert
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (shopRes.status === 400) {
          toast.error("You can create only one shop");
        }
      }
    } catch (error) {
      console.error("Error creating shop:", error);
      // handle other errors if needed
      toast.error("Failed to create shop. Please try again.");
    }
  };

  return (
    <div className="  mt-32">
      <h1 className=" text-center text-4xl font-bold">Creat Your Shop Here</h1>
      <div className=" mt-6 lg:w-[992px] mx-auto p-11 bg-[#F3F3F3] mb-[100px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col lg:flex-row gap-6">
            {/* shop name */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Shop Name*
                </span>
              </label>
              <input
                {...register("shopName", { required: true })}
                type="text"
                placeholder="Shop name"
                className="input input-bordered w-full "
              />
            </div>
            {/* shop location */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Shop Location*
                </span>
              </label>
              <input
                {...register("shopArea", { required: true })}
                type="text"
                placeholder="Shop Area"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className=" mt-4 flex flex-col lg:flex-row gap-6">
            {/* email  */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-xl font-semibold">Email*</span>
              </label>
              <input
                defaultValue={user?.email}
                {...register("email", { required: true })}
                type="emial"
                placeholder="Email"
                readOnly
                className="input input-bordered w-full "
              />
            </div>
            {/* name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold">Name*</span>
              </label>
              <input
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                readOnly
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control w-full my-6  ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Shop Info*
              </span>
            </label>
            <textarea
              {...register("shopInfo", { required: true })}
              className="textarea textarea-bordered h-[200px]"
              placeholder="Shop Info"
            ></textarea>
          </div>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Shop Logo*
              </span>
            </label>
            <input
              {...register("shopLogo")}
              type="file"
              className=" w-full max-w-xs input py-2 input-bordered"
            />
          </div>
          <button className="btn bg-[#00B499] text-white  font-bold rounded-none">
            Create Shop
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
