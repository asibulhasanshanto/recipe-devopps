import React from "react";
import Ingradient from "./Ingradient";
const Ingradiants = ({ingradients}) => {
  
  return (
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr class="divide-x divide-gray-200">
          <th
            scope="col"
            class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
          >
            Ingradient
          </th>
          <th
            scope="col"
            class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Quantity
          </th>
          <th
            scope="col"
            class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Time
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 ">
        {ingradients.map((ingradient) => (
          <tr key={ingradient.ingradient} class="divide-x divide-gray-200">
            <Ingradient
              ingradient={ingradient.ingradient}
              quantity={ingradient.quantity}
              time={ingradient.time}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Ingradiants;
