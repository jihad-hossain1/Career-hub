import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
const Feature = ({ product }) => {
    const { companyName, jobLocation, jobImage, jobTitle, salary, workEnvironment,id } = product
    const navigate = useNavigate()
    return (
        <div className="border p-8 bg-blue-50 rounded-md hover:shadow">
            <img className='w-16 my-2' src={jobImage} alt={companyName} />
            <h3 className="text-xl font-semibold">{jobTitle}</h3>
            <div className='my-1'>
                <p className="text-gray-500 py-1">{companyName}</p>
            <p className='border px-2 rounded bg-blue-100 text-blue-600 inline-block'>{workEnvironment}</p>
            </div>
            <div className='flex my-2'>
                <p className='text-sm flex items-center'><span><MapPinIcon className="h-5 w-5 text-gray-500" /></span>{jobLocation}
                </p>
                <p className='flex items-center text-sm ml-2'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 " />
                    salery: {salary}
                </p>
            </div>
            <button onClick={()=>navigate(`/jobdetails/${id}`)} className="border rounded-md px-2 py-1 bg-blue-400 text-white md:px-3  hover:bg-blue-600">View Details</button>
        </div>
    );
};

export default Feature;