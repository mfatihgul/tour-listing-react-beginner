import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {/* If readMore is true, show full information */}
          {/* If readMore is false, show only a part of the information */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {/* Toggle button name */}
            {readMore ? "show less" : "read more"}
          </button>
        </p>

        <button onClick={() => removeTour(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
