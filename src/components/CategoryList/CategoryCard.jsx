import React from 'react';

const CategoryCard = ({ category }) => {
    // console.log(category);

    return (
        <div className='m-2 p-7 rounded-md bg-blue-100 md:pr-24'>
            <img className='object-cover' src={category.image} alt="" />
            <div className='mt-3'>
                <h3 className='font-semibold'>{category.category}</h3>
                <p className='text-gray-400 text-sm'>{category.aviableJob} Jobs Available</p>
            </div>
        </div>
    );
};

export default CategoryCard;