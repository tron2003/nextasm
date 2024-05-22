'use client'
import React from 'react'
// import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart() {
  const data = [
    {
      name: 'Page A',
      visit: 4000,
      click: 2400,

    },
    {
      name: 'Page B',
      visit: 3000,
      click: 1398,

    },
    {
      name: 'Page C',
      visit: 2000,
      click: 9800,

    },
    {
      name: 'Page D',
      visit: 2780,
      click: 3908,

    },
    {
      name: 'Page E',
      visit: 1890,
      click: 4800,

    },
    {
      name: 'Page F',
      visit: 2390,
      click: 3800,

    },
    {
      name: 'Page G',
      visit: 3490,
      click: 4300,

    },
  ];
  return (
    <div className='h-96 rounded-md bg-sky-700 text-white p-1'>
      <h1 className='ml-2 mt-2 text-xl font-medium'>Weekly Recap</h1>
      <ResponsiveContainer className='p-3 text-white' width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" tick={{ fill: 'white' }} axisLine={{ stroke: 'white' }} />
          <YAxis tick={{ fill: 'white' }} axisLine={{ stroke: 'white' }} />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}