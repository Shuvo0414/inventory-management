import { FaShop } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaShop} label="Manage Shop" address="manage-shop" />
      <MenuItem
        icon={FcSalesPerformance}
        label="Sale-Summary"
        address="sale-summary"
      />
    </>
  );
};

export default AdminMenu;
