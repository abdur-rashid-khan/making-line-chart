import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Cell = () => {
   const data = [
      {
        "name": "Group A",
        "value": 400
      },
      {
        "name": "Group B",
        "value": 300
      },
      {
        "name": "Group C",
        "value": 500
      },
      {
        "name": "Group D",
        "value": 200
      },
      {
        "name": "Group E",
        "value": 278
      },
      {
        "name": "Group F",
        "value": 189
      }
    ]
  return (
   <div>
      <h1 className='text-4xl p-6 '>cell</h1>
   <PieChart width={730} height={250}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      <Tooltip></Tooltip>
   </PieChart>  
   </div>
   );
};

export default Cell;
