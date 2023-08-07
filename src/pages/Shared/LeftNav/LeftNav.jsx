import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Categories </h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;