import UseItem from "../Hook/UseItem";
import Product from "../Product/Product";

const Shop = () => {
    const [menu] = UseItem();

    return (
        <div className="pt-32">
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-10 ">
                {
                    menu.map(item => <Product key={item._id} item={item}></Product>)
                }

            </div>
        </div>
    );
};

export default Shop;