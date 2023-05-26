import React, { useContext, useEffect, useState } from 'react';
import { getStoredCart } from '../../Custom/DB';
import { CartContext, ProductsContext } from '../../App';
import AppliedCad from './AppliedCad';

const AppliedJob = () => {
    const products = useContext(ProductsContext)
    // const [job, setJob] = useState([])
    const [jobs, setJobs] = useContext(CartContext)
    // console.log(jobs);
    const [filted, setFilted] = useState([])
    


    useEffect(() => {
        let savedJob = [];
        const storedJob = getStoredCart()
        for (const id in storedJob) {
            const addedeJob = products.find(job => job.id == id);
            setJobs(addedeJob)
            if (addedeJob) {
                const quantity = storedJob[id];
                addedeJob.quantity = quantity;
                savedJob.push(addedeJob);
            }
        }
        setJobs(savedJob)
        setFilted(savedJob)
    }, [])



    return (
        <>
            <h2 className='text-center font-semibold text-3xl py-3 bg-blue-200 '>Applied Job</h2>
            <div className='min-h-screen px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative'>
                        
            <div className="dropdown dropdown-left my-7 absolute top-0 right-0 mr-5 md:mr-24">
                <button className='py-1 px-2 border-[2px]'>
                    Filter By 
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100  w-40">
                    <li><a>Full Time</a></li>
                    <li ><a>Remote</a></li>
                    <li><a>On-site Work</a></li>
                </ul>
            </div>

            <div className='flex flex-col md:items-center my-20'>
                {
                jobs.map(job => <AppliedCad
                key={job.id}
                job={job}
            ></AppliedCad>)
            }
            </div>
            </div>
        </>
    );
};

export default AppliedJob;