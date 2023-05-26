import React from 'react';

const BlogCard = ({ queAns }) => {
    // console.log(queAns);
    const { question, ans } = queAns;
    return (
        <div className='rounded-md m-1 bg-blue-100 p-3'>
            <h3 className='font-bold text-xl'>
                {question}
            </h3>
            <p className='my-1'>
                {ans}
            </p>
        </div>
    );
};

export default BlogCard;