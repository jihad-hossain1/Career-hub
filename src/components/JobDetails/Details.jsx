import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Details = ({ jobDetails,handleAppliedJob }) => {
    // console.log(handleAppliedJob);
    const { jobDescription, jobExperience, jobLocation, jobResponsibilities, jobTitle, salary, educationalRequirements, email, phone, id} = jobDetails;
    
    // const {email, phone, website} = jobDetails.applyContactInformation
    return (
        <div className='md:flex'>
            <div className='discrip w-'>
                <p className='my-3 px-3'><span className='font-semibold'>Job Describtion: </span>{jobDescription}
                </p>
                <p className='my-3 px-3'><span className='font-semibold'>Job Responsibility: </span>
                    {jobResponsibilities}
                </p>
                <p className='my-3 px-3 grid'>
                    <span className='font-semibold'>Educational Requirments: </span>
                    {educationalRequirements}
                </p>
                <p className='my-3 px-3 grid'>
                    <span className='font-semibold'>Experiences: </span>
                    {jobExperience}
                </p>
            </div>
           
            <div className='job-details bg-blue-100 rounded-md p-4 w-full'>
                <h3 className='text-xl font-semibold'>Job Details</h3>
                <hr className='my-2' />
                <p className='flex my-1 items-center'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-1" />
                    <span className='font-semibold mr-1'>Salary: </span>
                    {salary}
                </p>
                <p className='flex my-1 items-center'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-1" />
                    <span className='font-semibold mr-1'> Job Title: </span>
                    {jobTitle}
                </p>
                <h3 className='font-semibold text-xl'>Contact Information</h3>
                <hr className='my-2' />
                <p className='flex my-1 items-center'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-1" />
                    <span className='font-semibold mr-1'> Phone: </span>
                    {phone}
                </p>
                <p className='flex my-1 items-center'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-1" />
                    <span className='font-semibold mr-1'> Email: </span>
                    {email}
                </p>
                <p className='flex my-1 items-center'>
                    <MapPinIcon className="h-5 w-5 text-gray-500 mr-1" />
                    <span className='font-semibold mr-1'> Address: </span>
                    {jobLocation}
                </p>
                <br />
                <button onClick={()=>handleAppliedJob(id)} className='border rounded-md px-2 py-1 bg-blue-400 text-white md:px-3 md:py-2 hover:bg-blue-600 w-full'>
                    Apply Now
                </button>
                
                </div>
                
        </div>
    );
};

export default Details;