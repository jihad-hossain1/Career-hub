import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../App';
import Details from './Details';
import { addToDatabase } from '../../Custom/DB';

const JobDetails = () => {
    const jobInDynamic = useParams();;
    const jobs = useContext(ProductsContext)

    const [jobDetails, setJobDetails] = useState({})
    const handleAppliedJob = (id) => {
        addToDatabase(id);
    }

    useEffect(() => {

        const jobData = jobs.find(job => job.id == jobInDynamic.jobId)
        setJobDetails(jobData)
        
    }, [])

    return (
        <div className='min-h-screen px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <h2 className='text-center font-semibold text-3xl mt-28 mb-10'>Job Details</h2>
            <Details
                jobDetails={jobDetails}
                key={jobDetails.id}
                handleAppliedJob={handleAppliedJob}
            ></Details>
        </div>
    );
};

export default JobDetails;