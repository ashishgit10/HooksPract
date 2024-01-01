import React, { useEffect, useState } from 'react'
import  {add}  from "../stores/CartSlice"
import { useDispatch } from 'react-redux'


const Product = () => {
    const dispatch = useDispatch();
    const [product, getproduct] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(res => getproduct(res))
    }, [])


    const addToCart = (products) => {
        //Dispatch a action
        dispatch(add(products))
    }
    return (
        <div className=" grid pt-10 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-3 sm:grid-cols-1 justify-items-center  md:max-w-7xl md:m-auto" >
            {
                product.map(products => (
                    <div key={products.id} className='border border-black border-solid max-w-64 p-2 flex flex-col justify-between '>
                        <div className='border border-black border-solid object-cover'>
                            <img src={products.image} className='w-full h-60 sm:h-40' />
                        </div>
                        <div className='mt-3 flex flex-col justify-between text-center'>
                            <div>
                                <h5 className='text-red-800'>{products.title}</h5>
                            </div>
                            <div className='mt-2 cursor-pointer py-1 rounded-md bg-blue-600 flex justify-center items-center'>
                                <button className='text-red-50' onClick={() => addToCart(products)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Product;