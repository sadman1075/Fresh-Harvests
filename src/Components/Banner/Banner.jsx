import "./Banner.css"
import banner from "../../../public/banner.png"
import offer from "../../../public/offer.png"
import { Link } from "react-router-dom";
import mask from "../../../public/mask.png"
import app from "../../../public/app.png"
const Banner = () => {
    return (
        <div>
            <div className="banner ">
                <div className=" grid lg:flex justify-evenly items-center">
                    <div className="w-full lg:w-1/2 mt-20 lg:mt-40 lg:ml-[120px] ">
                        <div className="lg:flex justify-between items-center">
                            <p className="text-[#749B3F] w-60 text-center bg-lime-100 ">Welcome to Fresh Harvest</p>
                            <img src={mask} alt="" />

                        </div>
                        <h1 className="text-5xl lg:text-7xl mt-6 font-bold">Fresh Fruits and Vegetables</h1>
                        <p className="mt-6">At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
                        <Link to={"/shop"} className="btn bg-orange-500 hover:bg-orange-500  text-white mt-5 mb-5">Shop Now</Link>
                        <div className="hidden mt-10 lg:block ">
                            <img src={mask} alt="" />

                        </div>
                        <div className="lg:ml-60">
                            <img src={offer} alt="" />

                        </div>
                        <div className="mt-6">
                            <img src={app} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2  lg:mt-40 ">
                        <img src={banner} alt="" />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;