// import React, { useEffect, useRef } from "react";
import { useListStore } from "../zustand/listStore";
import ChartBar from "./input/ChartBar";
import DateRange from "./input/DateRange";

const Chart = () => {
  // const isLoading = useListStore((state) => state.isLoading);
  // const lists = useListStore((state) => state.lists);
  const filteredList = useListStore((state) => state.filteredList);

  // FILTER LIST TO INT
  const expense = filteredList
    ?.filter((a) => a.tag === "expense")
    .map((list) => list.price);
  const profit = filteredList
    ?.filter((a) => a.tag === "profit")
    .map((list) => list.price);
  // total
  const totalExpense = expense.reduce((accumulator, value) => {
    return parseInt(accumulator) + parseInt(value);
  }, 0);
  const totalProfit = profit.reduce((accumulator, value) => {
    return parseInt(accumulator) + parseInt(value);
  }, 0);

  // total revenue or loss
  const yeild = totalProfit - totalExpense;
  return (
    <div className="p-3 flex flex-wrap justify-center gap-2">
      <div className="grid max-w-md p-3 mx-auto mt-10">
        <DateRange />
        <span className="mx-auto mt-10">
          <p className="font-semibold text-sm center text-gray-500 inline">
            total {yeild <= 0 ? "loss" : "revenue"}:{" "}
          </p>
          <p
            className={`drop-shadow-sm text-sm font-semibold text-center inline ${
              yeild <= 0 ? "text-red-500" : "text-green"
            }`}
          >
            Php {yeild}.00
          </p>
        </span>
        <ChartBar totalExpense={totalExpense} totalProfit={totalProfit} />
      </div>
    </div>
  );
};
export default Chart;
