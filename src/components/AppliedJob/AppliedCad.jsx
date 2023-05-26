import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedCad = ({ job }) => {
    const { companyName, jobLocation, jobImage, jobTitle, salary, workEnvironment,id } = job
    return (
        <div className='border rounded-md p-2 md:p-5 flex justify-between items-center md:w-4/6 my-1'>
            <div className='flex items-center'>
                <img className='w-20 md:w-28 bg-slate-100 rounded-md p-3 m-2' src={jobImage} alt="" />
                <div className=''>
                    <h2 className='font-semibold'>
                        {jobTitle}
                    </h2>
                    <h2>
                        {companyName}
                    </h2>
                    <p className='border px-2 rounded bg-blue-100 text-blue-600 inline-block'>
                        {workEnvironment}
                    </p>
                <div className='md:flex'>
                    <p className='text-sm flex items-center md:pr-1'>
                        <MapPinIcon className="h-5 w-5  text-gray-500" />
                        <span className='md:pl-1'>{jobLocation}</span>
                    </p>
                    <p className='text-sm flex items-center'>
                        <CurrencyDollarIcon className="h-5 w-5 md:mr-1 text-gray-500 " /> 
                        Salary: 
                        <span className='md:pl-1'>{salary}</span>
                    </p>
                </div>
                </div>
            </div>
            <div>
                <Link to={`/jobdetails/${id}`}>
                    <button className=' border rounded-md px-2 py-1 bg-blue-400 text-white md:px-3  hover:bg-blue-600'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedCad;