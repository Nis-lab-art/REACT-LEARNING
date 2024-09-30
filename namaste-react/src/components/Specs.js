import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Specs = ({ product }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-2 border-gray-500 rounded-md p-2">
      <div className="flex justify-between" onClick={() => setOpen(!open)}>
        <h1 className="text-md font-semibold">Storage Options</h1>
        {open ? (
          <MdOutlineKeyboardArrowUp className="w-8 h-8" />
        ) : (
          <MdOutlineKeyboardArrowDown className="w-8 h-8" />
        )}
      </div>
      {open && (
        <div>
          <p>{product.storageOptions[0]}</p>
          <p>{product.storageOptions[1]}</p>
          <p>{product.storageOptions[2]}</p>
        </div>
      )}
    </div>
  );
};

export default Specs;
