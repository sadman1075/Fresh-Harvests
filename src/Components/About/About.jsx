import about from "../../../public/about.png"
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <div className='lg:flex justify-center items-center pt-20  mb-20'>
                <div className='w-full lg:w-1/2'>
                    <img src={about} alt="" />
                </div>
                <div className='w-full lg:w-1/3'>
                    <p className="text-[#749B3F] p-2  w-28 text-center bg-lime-100 ">about us</p>
                    <h1 className='text-4xl lg:text-5xl p-2 font-bold mt-5'>About Fresh Harvest</h1>
                    <p className='mt-5 text-justify p-2'>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                    <Link className='btn btn-outline p-2 text-orange-500 mt-6'>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default About;