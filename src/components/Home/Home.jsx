import React, { useContext, useState } from 'react';
import Images from '../assets/Images/main.png'
import CategoryCard from '../CategoryList/CategoryCard';
import { ProductsContext } from '../../App';
import Feature from '../Feature/Feature';

const Home = () => {
    const categoryList = [
        {id:92372938, image: 'https://i.ibb.co/rM8BPjB/accounts-1.png', category: 'Account & finance', aviableJob: 300},
        {id:92373438, image: 'https://i.ibb.co/Nn9QC2Y/business-1.png', category: 'Creative Design', aviableJob: 343},
        {id:95372938, image: 'https://i.ibb.co/ZcvVJzs/chip-1.png', category: 'Marketing & Sales', aviableJob: 199},
        {id:92952938, image: 'https://i.ibb.co/fdZL89H/social-media-1.png', category: 'Engineering Job', aviableJob: 399}
    ]
    const products = useContext(ProductsContext);
    const [seeAll, setSeeAll] = useState(false);


    // console.log(products);
    return (
        <div className="">
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div>
                <div className='md:flex '>
                    <div className='title'>
                        <h2 className='text-4xl md:text-7xl font-semibold'> One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span></h2>
                        <p className='my-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='border rounded-md px-2 py-1 bg-blue-400 text-white md:px-5 md:py-3 md:text-xl hover:bg-blue-600'>Get Started</button>
                    </div>
                    <div>
                        <img className='object-cover' src={Images} alt="" />
                    </div>
                </div>
                <div className='mt-10 md:mt-24 text-center '>
                    <h2 className='text-3xl font-semibold md:mb-2'>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='md:flex justify-around my-4'>
                    {
                        categoryList.map(category => <CategoryCard
                            key={category.id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </div>
            {/* Featured Job  */}
            <div>
                <div className='my-4 md:mt-32 text-center'>
                    <h3 className="text-4xl font-semibold mb-2">Featured Jobs</h3>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-2'>
                {
                    products.slice(0, seeAll ? products.length : 4).map(product => <Feature
                        key={product.id}
                        product={product}
                    ></Feature>)
                }
                
            </div>
            
            </div>
            <div className='flex flex-col items-center my-4'>
            {
                !seeAll && (
                    <button onClick={setSeeAll} className='border rounded-md px-2 py-1 bg-blue-400 text-white md:px-5 md:py-2 md:text-xl hover:bg-blue-600'>See All</button>
                )
            }
                </div>
            </div>
            
    );
};

export default Home; 