import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-blue-200'>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    <Link
                    to='/'
                    aria-label='SwiftHeadhunters'
                    title='SwiftHeadhunters'
                    className='inline-flex items-center'
                    >
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 '>
                        Swift Headhunters
                    </span>
                    </Link>
                    <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                        to='/'
                        aria-label='Home'
                        title='Home'
                        className={({ isActive }) => (isActive ? 'active text-blue-700 font-semibold' : 'default')}
                        >
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/applied'
                        aria-label='applied'
                        title='applied'
                        className={({ isActive }) => (isActive ? 'active text-blue-700 font-semibold' : 'default')}
                        >
                        Applied Job
                        </NavLink>
                    </li>
                        <li>
                            <NavLink
                                to='/statistics'
                                aria-label='statistics'
                                title='statistics'
                                className={({ isActive }) => (isActive ? 'active text-blue-700 font-semibold' : 'default')}
                            >
                                Statistics
                            </NavLink>
                        
                    </li>
                    <li>
                        <NavLink
                        to='/blog'
                        aria-label='blog Us'
                        title='blog Us'
                        className={({ isActive }) => (isActive ? 'active text-blue-700 font-semibold' : 'default')}
                        >
                        Blog
                        </NavLink>
                    </li>
                    </ul>
                    <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <AdjustmentsHorizontalIcon className="h-6 w-6 text-blue-500" />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            <div className='flex items-center justify-between mb-4'>
                            <div>
                                <Link
                                to='/'
                                aria-label='SwiftHeadhunters'
                                title='SwiftHeadhunters'
                                className='inline-flex items-center'
                                >
                                
                                <div className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                    Swift Headhunters
                                </div>
                                </Link>
                            </div>
                            <div>
                                <button
                                aria-label='Close Menu'
                                title='Close Menu'
                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                onClick={() => setIsMenuOpen(false)}
                                >
                                <XMarkIcon className="h-6 w-6 text-blue-500" />
                                </button>
                            </div>
                            </div>
                            <nav>
                            <ul className='space-y-4'>
                                <li>
                                <Link
                                    to='/'
                                    aria-label='Home'
                                    title='Home'
                                    className='hover:text-blue-400 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                >
                                    Home
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to='/applied'
                                    aria-label='applied'
                                    title='applied'
                                    className='hover:text-blue-400 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                >
                                    Applied Job
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to='/statistics'
                                    aria-label='statistics'
                                    title='statistics'
                                    className='hover:text-blue-400 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                >
                                    <div className='relative py-3'>
                                    <h2>Statistics</h2>
                                    </div>
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to='/blog'
                                    aria-label='blog Us'
                                    title='blog Us'
                                    className='hover:text-blue-400 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                >
                                    Blog
                                </Link>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;