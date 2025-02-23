import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        }
    ];

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart({ ...addedToCart, [plant.name]: true });
    };

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                    <h3>Paradise Nursery</h3>
                </div>
                <div>
                    <a href="#" onClick={handleCartClick}>View Cart</a>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="plant-list">
                            <h2>{category.category}</h2>
                            {category.plants.map((plant, idx) => (
                                <div key={idx} className="plant-item">
                                    <img src={plant.image} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                    <p>{plant.description}</p>
                                    <p>{plant.cost}</p>
                                    <button onClick={() => handleAddToCart(plant)} disabled={addedToCart[plant.name]}> 
                                        {addedToCart[plant.name] ? "Added" : "Add to Cart"} 
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
