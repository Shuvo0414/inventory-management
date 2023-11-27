import MenuItem from "./MenuItem";
import { MdProductionQuantityLimits } from "react-icons/md";

import { MdOutlinePayment } from "react-icons/md";

import { FcSalesPerformance } from "react-icons/fc";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";

const ManegerMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdProductionQuantityLimits}
        label="ProductManagement"
        address="product-management"
      />

      <MenuItem
        icon={BsCollection}
        label="Sales-Collection"
        address="sales-collection"
      />
      <MenuItem
        icon={IoBagCheckOutline}
        label="Check-Out"
        address="check-out"
      />
      <MenuItem icon={MdOutlinePayment} label="Payment" address="payment" />
      <MenuItem
        icon={FcSalesPerformance}
        label="Sales Summary"
        address="sales-summary"
      />
    </>
  );
};

export default ManegerMenu;
