import { useEffect, useState } from "react";

const UserItem = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("https://api-fresh-harvest.code-commando.com/api/v1/products")
            .then(res => res.json())
            .then(data => setMenu(data.data))
    }, [])

    return [menu]

};

export default UserItem;