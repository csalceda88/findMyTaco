import React from 'react';
import './foodtruck.css';

const FoodTruck = () => {
    return (
        <div id="container">
            <section id="ft-left" className="ft-left">
                <div id="foodtruck-name" className="foodtruck-name">
                    <h1>Taco Juan</h1>
                </div>
                <div id="foodtruck-picture" className="foodtruck-picture">
                    <img src="https://rh-vendoradmin.s3.amazonaws.com/trucks/original/21672/5bc8ce46-e920-47cd-a3e2-1b3d46204482.jpg"/>
                </div>
            </section>
            <section id="ft-right" className="ft-right">
                <div id="food-menu" className="food-menu">
                    <h3>Food Menu</h3>
                    <ul id="menu-list" className="menu-list">
                        <li className="dish-type"><h5>Appetizers</h5>
                            <div className="dish-name">Cabeza Taco</div>
                            <p className="dish-description">Cow cheek, cilantro, and onion</p>
                            <div className="dish-name">Tripa Taco</div>
                            <p className="dish-description">Tripe, cilantro, and onion</p>
                        </li>
                        <li className="dish-type"><h5>Main</h5>
                            <div className="dish-name">Carne Asada Taco</div>
                            <p className="dish-description">Marinated skirt steak, cilantro, and onion</p>
                            <div className="dish-name">Chicken Taco</div>
                            <p className="dish-description">Chicken, cilantro, and onion</p>
                        </li>
                    </ul>
                </div>
                <div id="reviews" className="reviews">
                    <h3>Reviews</h3>
                    <ul id="review-list" className="review-list">
                        <li className="single-list">
                            <p>“Amazing coffee drinks, Janes homemade ice cream, and Mexican food.”</p>
                        </li>
                        <li className="single-list">
                            <p>“By far the best Mexican Hot chocolate I've had in Fremont, ( four others so far).”</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

  
export default FoodTruck;