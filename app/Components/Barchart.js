
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Barchart = () => {
  const [chartData, setChartData] = useState({});

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        {/* <Bar data={chartData} />
         */}
         <h1>Barchart</h1>
      </div>
    </>
  );
};

export default Barchart;
