import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const questionAns = [
        {
            question: 'When use Context Api ? why use context api in react ?',
            ans: 'The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent. React.createContext() is all do need. It returns a consumer and a provider. Provider is a component that as it is names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.'
        },
        {
            question: 'What is react custome hook ?',
            ans: 'we can define our own hooks to use state and other React features without writing a class. A Custom Hook has following features: 1. As a function, it takes input and returns output. 2. Its name starts with use like useQuery, useMedia, 3. Unlike functional components, custom hooks return a normal, non-jsx data, 4. Unlike normal functions, custom hooks can use other hooks such as useState, useRef… and other custom hooks.'
        },
        {
            question: 'What is useRef ? when use it ?',
            ans: 'React useRef is a reference an object inside a functional component and preserves the referenced objects state between re-renders. useRef has a property called "current" used to retrieve the value of the referenced object at any time while also accepting an initial value as an argument. we can change the value of a referenced object by updating the current value. useRef React hook allows us to create a reference to a DOM element and keep track of variables without causing re-renders.'
        },
        {
            question: 'What is useMemo ? when use it ?',
            ans: 'React useMemo calls a function when dependencies change, and memoizes , the result of the function between renders. his is in contrast with useCallback which remembers an existing value between renders. we are noticing a components render is frustratingly slow, and we are passing a calculation to an unknowable number of children, such as when rendering children using Array.map() . our app often becomes unresponsive because we are fetching a large amount of data, and having to transform it into a usable format'
        },
    ]
    return (

        <>
        <h2 className='text-3xl font-semibold text-center bg-blue-200 py-10'>Question Ans.</h2>
        <div className='min-h-screen px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                
            <div className='grid md:grid-cols-2 my-7 md:my-20 '>
                {
                    questionAns.map((queAns, index) => <BlogCard
                        key={index}
                        queAns={queAns}
                    ></BlogCard>)
                }
            </div>
        </div>
        </>
    );
};

export default Blog;