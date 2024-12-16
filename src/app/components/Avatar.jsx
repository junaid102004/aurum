import React, { useState } from "react";
import "./AvatarAnimation.css";

const AvatarWithCircle = () => {
  const [radius, setRadius] = useState(50); // Initial radius
  const [opacity, setOpacity] = useState(1); // Initial opacity

  const increaseRadius = () => {
    if (radius < 200) { // Limit the maximum radius
      setRadius(radius + 10);
      setOpacity(Math.max(0, opacity - 0.1)); // Reduce opacity
    }
  };

  return (
    <div className="avatar-container" onClick={increaseRadius}>
      <img
        className="avatar"
        src="https://via.placeholder.com/100"
        alt="Avatar"
      />
      <div
        className="circle"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          opacity,
        }}
      ></div>
    </div>
  );
};

export default AvatarWithCircle;
