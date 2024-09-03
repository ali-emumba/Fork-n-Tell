import React from "react";
import { Card, Divider, Rate } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import "./styles.css";

const ReviewCard = ({ review }) => {
  // Render dollar signs based on price level
  const renderDollarSigns = (priceLevel) => {
    return Array(priceLevel)
      .fill(null)
      .map((_, index) => (
        <DollarOutlined
          key={index}
          style={{ color: "gold", fontSize: "18px" }}
        />
      ));
  };

  return (
    <Card className="review-card" hoverable>
      <div className="review-header">
        <h3>{review.restaurantName}</h3>
        <div className="review-ratings">
          <Rate disabled value={review.rating} />
          <div className="review-price">
            {renderDollarSigns(review.priceLevel)}
          </div>
        </div>
      </div>
      <Divider />
      <p>{review.description}</p>
      <div className="review-dishes">
        <strong>Recommended Dishes: </strong>
        {review.recommendedDishes.join(", ")}
      </div>
      <div className="review-date">{review.date}</div> {/* Date display */}
    </Card>
  );
};

export default ReviewCard;
