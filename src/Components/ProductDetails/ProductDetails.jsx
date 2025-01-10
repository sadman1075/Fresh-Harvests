import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import UseItem from '../Hook/UseItem';
import Product from '../Product/Product';
import { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const ProductDetails = () => {
    const product = useLoaderData()
    const [menu] = UseItem();
    const [rating, setRating] = useState(5) // Initial value



    const { images, productName, description, price, categoryId } = product.data
    const related = menu.filter(item => item.categoryId === categoryId)
    console.log(related)

    return (
        <div>
            <div className='lg:flex justify-center items-center  pt-20 mb-20'>
                <div className='w-full lg:w-1/2'>
                    <img src={images} alt="" />
                </div>
                <div className='w-full lg:w-1/3'>
                    <p className="text-[#749B3F] p-2  w-28 text-center bg-lime-100 ">shop</p>
                    <h1 className='text-4xl lg:text-5xl p-2 font-bold mt-5'>{productName}</h1>
                    <p><Rating value={rating} style={{ maxWidth: 150 }}></Rating></p>

                    <p className='mt-5 text-justify text-4xl text-orange-500 font-bold'>${price}</p>
                    <p className='mt-5 text-justify p-2'>{description}</p>
                    <div className='mt-5 lg:flex gap-4'>
                        <Link className='btn w-full lg:w-1/2   bg-base-300 text-black p-2 mt-6'> <FaHeart className='text-gray-500' />
                            Save as Favorite</Link>
                        <Link className='btn w-full lg:w-1/2 bg-orange-500 p-2 hover:bg-orange-500 text-white mt-6'> <FaShoppingCart />
                            Add to Cart</Link>

                    </div>
                </div>
            </div>
            <div className=''>
                <div className=' mb-20'>
                    <div className='flex justify-center'>
                        <p className="text-[rgb(116,155,63)] p-2 text-center  w-28 bg-lime-100  ">Our products</p>

                    </div>

                    <div className=' '>
                        <h1 className='text-center font-bold text-5xl mt-5'>Related Products</h1>
                        <p className='text-center mt-5'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-10 ">
                {
                    related.map(item => <Product key={item._id} item={item}></Product>)
                }

            </div>
        </div>
    );
};

export default ProductDetails;