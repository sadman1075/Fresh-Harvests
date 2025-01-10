import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import Swal from "sweetalert2";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to your account to add items to your cart",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          return <Navigate to={"/"}></Navigate>;
    }
};

export default PrivateRoutes;