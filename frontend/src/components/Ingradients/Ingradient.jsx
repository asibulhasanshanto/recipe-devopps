import React from "react";

const Ingradient = ({ingradient,quantity,time}) => {
  return (
    <>
      <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
        {ingradient}
      </td>
      <td class="whitespace-nowrap p-4 text-sm text-gray-500">
        {quantity}
      </td>
      <td class="whitespace-nowrap p-4 text-sm text-gray-500">
        {time}
      </td>
    </>
  );
};

export default Ingradient;
