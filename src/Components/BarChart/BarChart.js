import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = () => {
   const data = [
      {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400
      },
      {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398
      },
      {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
      },
      {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
      },
      {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
      },
      {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
      },
      {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
      }
    ]
   return (
      <div>
         <h1 className='text-4xl p-6 '>BarCharts</h1>
         <BarChart width={530} height={250} data={data}>
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend/>
            <Bar dataKey="pv" fill="#8884d8" />
         </BarChart>
      </div>
   );
};

export default BarCharts;