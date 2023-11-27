import { Link } from "react-router-dom";

const ProductManagement = () => {
  return (
    <div>
      <div className=" flex gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input  input-bordered w-full md:w-[600px] lg:w-[800px] "
        />
        <Link to={"add-a-product"}>
          <button className=" btn bg-[#00B499] text-white">
            Add A Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductManagement;
