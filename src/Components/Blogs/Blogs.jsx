import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../public/image 2.png"
import image2 from "../../../public/image 3.png"
import image3 from "../../../public/image 4.png"
const Blogs = () => {
    return (
        <div>
            <div>
                <div className='pt-20 mb-20'>
                    <div className='flex justify-center'>
                        <p className="text-[rgb(116,155,63)] p-2 text-center  w-28 bg-lime-100  ">Our Blog</p>

                    </div>

                    <div className=' '>
                        <h1 className='text-center font-bold text-5xl mt-5'>Fresh Harvest Blog</h1>
                        <p className='text-center mt-5'>Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p>
                    </div>

                </div>
            </div>
            <div className="lg:flex justify-center gap-10 lg:ml-32 lg:mr-32">
                <div>
                    <div className="card card-compact bg-base-100 lg:w-96 shadow-xl">
                        <figure>
                            <img
                                src={image1}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <p>May 23, 2024</p>
                            <h2 className="text-xl font-bold">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h2>
                            <div className="card-actions ">
                                <button className="btn bg-white hover:bg-orange-500 hover:text-white border-0 text-orange-500">Read More <FaArrowRight className="text-orange-500"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 lg:w-96 shadow-xl">
                        <figure>
                            <img
                                src={image3}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <p>May 23, 2024</p>
                            <h2 className="text-xl font-bold">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h2>
                            <div className="card-actions ">
                                <button className="btn bg-white hover:bg-orange-500 hover:text-white border-0 text-orange-500">Read More <FaArrowRight className="text-orange-500"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 lg:w-96 shadow-xl">
                        <figure>
                            <img
                                src={image2}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <p>May 23, 2024</p>
                            <h2 className="text-xl font-bold">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h2>
                            <div className="card-actions ">
                                <button className="btn bg-white hover:bg-orange-500 hover:text-white border-0 text-orange-500">Read More <FaArrowRight className="text-orange-500"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;