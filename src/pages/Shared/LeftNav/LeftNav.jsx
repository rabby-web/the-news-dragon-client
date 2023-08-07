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
            <h4 className="bg-secondary rounded-2 p-2 text-light">All Categories </h4>
            <div className="ps-3">
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className="text-decoration-none text-black fs-5 fw-semibold">{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;