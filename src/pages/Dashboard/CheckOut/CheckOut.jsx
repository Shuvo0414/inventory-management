import Swal from "sweetalert2";
import useCheckOut from "../../../hooks/ useCheckOut";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { jsPDF } from "jspdf";

const CheckOut = () => {
  const [product, refetch] = useCheckOut();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Function to generate PDF content
  const generatePDFContent = (item) => {
    return `
    Product Name: ${item.productName}
    Discount: ${item.discount}%
    Quantity: ${item.productQuantity}
    Selling Price: ${item.sellingPrice}
    
  `;
  };

  const handlePay = async (item) => {
    const { _id, productId } = item;

    if (user && user.email) {
      const salesIfo = {
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
        sallingDate: new Date(),
      };

      const updatedSale = item.saleCount + 1;
      const updteProductQuantity = item.productQuantity - 1;

      const productUpdateIfo = {
        saleCount: updatedSale,
        productQuantity: updteProductQuantity,
      };

      // send to sales collection
      axiosSecure
        .post("/sales", salesIfo)
        .then(async (res) => {
          await axiosSecure.put(`/products/${productId}`, productUpdateIfo);

          // Generate PDF
          const pdf = new jsPDF();
          const pdfContent = generatePDFContent(item);

          if (pdfContent) {
            pdf.text(pdfContent, 10, 10);
            pdf.save("checkout.pdf");
          } else {
            console.error("PDF content element not found.");
          }

          await axiosSecure.delete(`/checkout/${item._id}`);

          // console.log(res.data);
          if (res.status === 201) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Pay to your successfully`,
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

  return (
    <div className="">
      <div className=" mx-auto gap-4 grid  md:grid-cols-2 ">
        {product.map((item) => (
          <div
            key={item._id}
            className="card w-[300px] h-[300px]  gap-4 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={item.image}
                alt="Shoes"
                className="rounded-xl w-[200px]"
              />
            </figure>
            <div className="p-4 space-y-2 ">
              <h2 className=" text-lg font-semibold">
                Product Name :{item.productName}
              </h2>
              <p className=" font-medium text-base">
                Discount: {item.discount}%
              </p>
              <p className=" font-medium text-base">
                Quantity: {item.productQuantity}
              </p>
              <p className=" font-medium text-base">
                Selling Price: {item.sellingPrice}
              </p>
              <div className="">
                <button
                  onClick={() => handlePay(item)}
                  className="px-3 py-2 rounded-md bg-[#00B499] text-white"
                >
                  Get Pay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
