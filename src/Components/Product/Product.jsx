import { Link } from "react-router-dom";

const Product = ({ item }) => {

    const { id, images, price, productName } = item
    // const {}=item
    return (
        <div className="p-2">
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className=" ">
                    <img
                        src={images}
                        alt=""
                        className="rounded-xl w-full h-40 md:h-60 lg:h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p>{price} $</p>
                    <div className="card-actions">
                        <Link to={`/product-details/${id}`} className="btn btn-outline  text-orange-500 hover:bg-orange-500">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;