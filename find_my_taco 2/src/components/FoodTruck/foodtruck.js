import React from 'react';
import './foodtruck.css';

const FoodTruck = () => {
    return (
        <div id="container">
            <section id="ft-left" class="ft-left">
                <div id="foodtruck-name" class="foodtruck-name">
                    <h1>Taco Juan</h1>
                </div>
                <div id="foodtruck-picture" class="foodtruck-picture">
                    <img src="https://rh-vendoradmin.s3.amazonaws.com/trucks/original/21672/5bc8ce46-e920-47cd-a3e2-1b3d46204482.jpg"/>
                </div>
            </section>
            <section id="ft-right" class="ft-right">
                <div id="food-menu" class="food-menu">
                    <h3>Food Menu</h3>
                    <ul id="menu-list" class="menu-list">
                        <li class="dish-type"><h5>Appetizers</h5>
                            <div class="dish-name">Cabeza Taco</div>
                            <p class="dish-description">Cow cheek, cilantro, and onion</p>
                            <div class="dish-name">Tripa Taco</div>
                            <p class="dish-description">Tripe, cilantro, and onion</p>
                        </li>
                        <li class="dish-type"><h5>Main</h5>
                            <div class="dish-name">Carne Asada Taco</div>
                            <p class="dish-description">Marinated skirt steak, cilantro, and onion</p>
                            <div class="dish-name">Chicken Taco</div>
                            <p class="dish-description">Chicken, cilantro, and onion</p>
                        </li>
                    </ul>
                    <h3>Reviews</h3>
                    <ul id="review-list" class="review-list">
                        <li class="single-list">
                            <p>“Amazing coffee drinks, Janes homemade ice cream, and Mexican food.”</p>
                        </li>
                        <li class="single-list">
                            <p>“By far the best Mexican Hot chocolate I've had in Fremont, ( four others so far).”</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

  
export default FoodTruck;