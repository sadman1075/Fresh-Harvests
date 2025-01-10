import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png"
import { FaFacebook, FaHeart } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
const Header = () => {
    const navOptions = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>Shop</Link></li>
        <li><Link to={"/about"}>About us</Link></li>
        <li><Link to={"/blogs"}>Blog</Link></li>



    </>
    const { createUser, createGoogleuser, loginUser, logout, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handaleModal = () => {
        document.getElementById('my_modal_1').showModal()

    }
    const handleRegistrationModal = () => {
        document.getElementById('my_modal_2').showModal()


    }
    const handeloginModal = () => {
        document.getElementById('my_modal_2').close()

    }


    const googleCreateuser = () => {
        createGoogleuser()
            .then(result => {
                toast.success("You have successfully created user")
                document.getElementById('my_modal_1').close()
                document.getElementById('my_modal_2').close()
            })
            .catch(error => {
                toast.error(error.message)

            })
    }
    const handelcreateuser = (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        createUser(email, password)
            .then(result => {
                toast.success("You have successfully created user")
                document.getElementById('my_modal_1').close()
                document.getElementById('my_modal_2').close()

                navigate("/")

            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const handleLogin = (e) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        loginUser(email, password)
            .then(result => {
                toast.success("You have successfully loged in")
                document.getElementById('my_modal_1').close()
                document.getElementById('my_modal_2').close()

                navigate("/")

            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handalelogout = () => {
        logout()
            .then(result => {
                toast.success("You have successfully log out")
                navigate("/")

            })
            .catch(error => {
                toast.error(error.message)
            })

    }


    return (
        <div>
            <div className="navbar fixed z-10 max-w-7xl mx-auto bg-opacity-35 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black bg-opacity-25 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                navOptions
                            }

                        </ul>
                    </div>
                    <Link className="">
                        <img src={logo} className="w-60" alt="" />
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-4  lg:mr-6">
                    <div className="hidden lg:flex items-center gap-2 ">
                        <FaHeart className="text-lg text-white" />

                        <p className="text-lg">Favorites</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">0</span>

                        </div>

                        <p className="text-lg hidden lg:block">Cart</p>
                    </div>

                    {
                        user ? <Link className="btn btn-outline text-white border-2 " onClick={handalelogout}>Log out</Link> :
                            <Link className="btn btn-outline text-white border-2 " onClick={handaleModal}>Sign In</Link>


                    }





                </div>
            </div>
            <div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box ">
                        <h3 className="font-bold text-center text-5xl">Login</h3>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-lg btn-circle btn-ghost absolute text-red-500 right-2 top-2">✕</button>
                        </form>
                        <form className="card-body" onSubmit={handleLogin} >

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered w-full" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />

                            </div>
                            <div className="lg:flex justify-between items-center">
                                <div className="form-control">
                                    <label className="flex gap-3">

                                        <input type="checkbox" defaultChecked className="checkbox  border-orange-400 [--chkbg:theme(colors.orange.600)]" />
                                        <span className="">Remember me</span>
                                    </label>
                                </div>
                                <Link className="text-lg font-semibold"><u>Forgot Password</u></Link>
                            </div>

                            <div className=" form-control  mt-6 ">
                                <button className="btn bg-[#FF6A1A] hover:bg-[#FF6A1A]  border-0 text-white border-[#331A15] rancho text-lg ">Login</button>
                            </div>
                            <div className="divider font-bold">Or Sign in with </div>
                            <div className="lg:flex gap-5 justify-center">
                                <Link onClick={googleCreateuser} className="btn btn-outline border-gray-300 w-full lg:w-1/2 text-xl"><FcGoogle className="text-2xl" />
                                    Google</Link>
                                <Link className="btn btn-outline border-gray-300 text-xl  w-full lg:w-1/2 mt-4 lg:mt-0"><FaFacebook className="text-2xl text-blue-600" />
                                    Facebook</Link>
                            </div>
                            <div className="mt-6">
                                <p className="text-lg font-bold text-center">Don't have an account? <Link onClick={handleRegistrationModal} className="text-orange-500 text-lg font-bold">Sign up</Link></p>
                            </div>

                        </form>
                        <div className="modal-action">

                        </div>
                    </div>
                </dialog>
            </div>
            <div>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box ">
                        <h3 className="font-bold text-center text-5xl">Register</h3>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-lg btn-circle btn-ghost absolute text-red-500 right-2 top-2">✕</button>
                        </form>
                        <form className="card-body" onSubmit={handelcreateuser}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered w-full" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered w-full" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />

                            </div>


                            <div className=" form-control  mt-6 ">
                                <button className="btn bg-[#FF6A1A] hover:bg-[#FF6A1A]  border-0 text-white border-[#331A15] rancho text-lg ">Submit</button>
                            </div>
                            <div className="divider font-bold">Or Sign in with </div>
                            <div className="lg:flex gap-5 justify-center">
                                <Link onClick={googleCreateuser} className="btn btn-outline border-gray-300 w-full lg:w-1/2 text-xl"><FcGoogle className="text-2xl" />
                                    Google</Link>
                                <Link className="btn btn-outline border-gray-300 text-xl w-full lg:w-1/2 mt-4 lg:mt-0"><FaFacebook className="text-2xl text-blue-600" />
                                    Facebook</Link>
                            </div>
                            <div className="mt-6">
                                <p className="text-lg font-bold text-center">All ready have an account? <Link onClick={handeloginModal} className="text-orange-500 text-lg font-bold">Log in</Link></p>
                            </div>

                        </form>
                        <div className="modal-action">

                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Header;