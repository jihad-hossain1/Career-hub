import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer/Footer';

export const ProductsContext = createContext([])
export const CartContext = createContext()

const App = () => {
  const { products, inArray } = useLoaderData()
  const [job, setJob] = useState(inArray)
  // console.log(products);
  return (
    <CartContext.Provider value={[job, setJob]}>
      
      <ProductsContext.Provider value={products}>
        <Header></Header>
        <div className=''>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </ProductsContext.Provider>
      
    </CartContext.Provider>
  );
};

export default App;