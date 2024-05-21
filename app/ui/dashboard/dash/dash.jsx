'use client';
import React from 'react';
import TotalUsers from './totalusers.jsx';
import Transaction from './transaction.jsx';
import Chart from './chart.jsx';

export default function Dash() {
    return (
        <div className=' flex flex-row  border-none justify-between gap-3   '>
            <div className=' flex flex-col gap-5 basis-4/5'>
                <div className='flex flex-row gap-5 justify-between'>
                    {/* {Total Users} */}
                    <TotalUsers />
                    <TotalUsers />
                    <TotalUsers />
                </div>
                <div>
                    {/* Transactions */}
                    <Transaction />
                </div>
                <div>
                    {/* Chart */}
                    <Chart />
                </div>
            </div>
            <div className=" flex flex-col basis-1/5">
                {/* Right bar */}
                right bar
            </div>
        </div>
    );
}
