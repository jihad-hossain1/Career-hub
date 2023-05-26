import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
const Statistics = () => {
    const data = [
  {
    name: "Assing-1",
    mark: 53
  },
  
  {
    name: "Assing-2",
    mark: 60
  },
  
  {
    name: "Assing-3",
    mark: 60
  },
  
  {
    name: "Assing-4",
    mark: 54
  },
  
  {
    name: "Assing-5",
    mark: 58
  },
  
  {
    name: "Assing-6",
    mark: 48
  },
  
  {
    name: "Assing-7",
    mark: 60
  },
  
  {
    name: "Assing-8",
    mark: 48
  },
  
];
    return (
        <div className=' min-h-screen'>
                <h2 className='text-center font-bold text-5xl my-20'>Assignment Marks Chart</h2>
            <div className='flex flex-col justify-center items-center'>
                <AreaChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="mark"/>
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#0754f7" fill="#a6c0f7" />
            </AreaChart>
            </div>
            

            </div>
    );
};

export default Statistics;