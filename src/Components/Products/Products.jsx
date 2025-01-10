import mask from "../../../public/mask.png"
import mask2 from "../../../public/mask2.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseItem from '../Hook/UseItem';
import Product from '../Product/Product';
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseItem();
    const limit = 8;

    const fruits = menu.filter(item => item.categoryId === "6751516f9c52879c1fde6558")
    const vegetables = menu.filter(item => item.categoryId === "6751584feaeaa5cc21bbe21b")
    const salad = menu.filter(item => item.categoryId === "6751569e0e539396658e60a9")

    return (
        <div>
            <div className='mt-20 mb-20'>
                <div className='flex justify-center'>
                    <p className="text-[rgb(116,155,63)] p-2 text-center  w-28 bg-lime-100  ">Our Product</p>

                </div>


                <div className='flex justify-end lg:mr-48'>
                    <img src={mask} alt="" />
                </div>

                <div className='-mt-14 lg:-mt-10 '>
                    <h1 className='text-center font-bold text-5xl mt-5'>Our Fresh Products</h1>
                    <p className='text-center mt-5'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
                </div>
                <div className='flex -mt-48 lg:ml-48'>
                    <img src={mask2} alt="" />
                </div>
                <div className='mt-10 flex justify-center'>
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="flex justify-center text-xl mb-10 ">
                            <Tab>All</Tab>
                            <Tab>Fruits</Tab>
                            <Tab>Vegetables</Tab>
                            <Tab>Salad</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-10 ">
                                {
                                    menu.slice(0, limit).map(item => <Product key={item._id} item={item}></Product>)
                                }

                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-10 ">
                                {
                                    fruits.map(item => <Product key={item._id} item={item}></Product>)
                                }

                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-10 ">
                                {
                                    vegetables.map(item => <Product key={item._id} item={item}></Product>)
                                }

                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-10 ">
                                {
                                    salad.map(item => <Product key={item._id} item={item}></Product>)
                                }

                            </div>
                        </TabPanel>
                    </Tabs>
                </div>



            </div>
            <div className="flex justify-center">
                <Link to={"/shop"} className="btn btn-outline text-orange-500  " >See All Products</Link>
            </div>
        </div>
    );
};

export default Products;