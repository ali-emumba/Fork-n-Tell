import React from "react";
import ReviewCard from "./../../Components/ReviewCard";
import "./styles.css";

const reviews = [
  {
    restaurantName: "La Piazza",
    rating: 4.5,
    description: "Great Italian food, loved the pasta and pizza!",
    priceLevel: 2,
    recommendedDishes: ["Pasta Carbonara", "Margherita Pizza"],
    date: "August 20, 2023",
  },
  {
    restaurantName: "Sushi Zen",
    rating: 4,
    description: "Fresh sushi with a cozy atmosphere. Highly recommend.",
    priceLevel: 3,
    recommendedDishes: ["Dragon Roll", "Salmon Nigiri"],
    date: "August 15, 2023",
  },
  {
    restaurantName: "Steakhouse Grill",
    rating: 4.8,
    description: "Best steaks in town, cooked to perfection!",
    priceLevel: 3,
    recommendedDishes: ["Ribeye Steak", "Grilled Vegetables"],
    date: "August 10, 2023",
  },
  {
    restaurantName: "Vegan Delight",
    rating: 3.8,
    description: "Nice vegan options but a bit pricey.",
    priceLevel: 2,
    recommendedDishes: ["Vegan Burger", "Kale Salad"],
    date: "August 5, 2023",
  },
  {
    restaurantName: "La Piazza",
    rating: 4.5,
    description: "Great Italian food, loved the pasta and pizza!",
    priceLevel: 2,
    recommendedDishes: ["Pasta Carbonara", "Margherita Pizza"],
    date: "August 20, 2023",
  },
  {
    restaurantName: "Sushi Zen",
    rating: 4,
    description: "Fresh sushi with a cozy atmosphere. Highly recommend.",
    priceLevel: 3,
    recommendedDishes: ["Dragon Roll", "Salmon Nigiri"],
    date: "August 15, 2023",
  },
  {
    restaurantName: "Steakhouse Grill",
    rating: 4.8,
    description: "Best steaks in town, cooked to perfection!",
    priceLevel: 3,
    recommendedDishes: ["Ribeye Steak", "Grilled Vegetables"],
    date: "August 10, 2023",
  },
  {
    restaurantName: "Vegan Delight",
    rating: 3.8,
    description: "Nice vegan options but a bit pricey.",
    priceLevel: 2,
    recommendedDishes: ["Vegan Burger", "Kale Salad"],
    date: "August 5, 2023",
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h2>Latest Restaurant Reviews</h2>
        <div className="card-list">
          {reviews.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
