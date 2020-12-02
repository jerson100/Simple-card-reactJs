import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

const Card = ({
  imagen,
  name,
  age,
  country,
  followers,
  likes,
  photos,
  bgHeader,
  isAnimation,
}) => {
  return (
    <div className="card">
      <div className="card__content">
        <div
          className="card__header"
          style={{ backgroundImage: `url(${bgHeader})` }}
        ></div>
        <div className="card__body">
          <div
            className="card__image"
            style={{ backgroundImage: `url(${imagen})` }}
          ></div>
          <p className="card__name">
            {name} <span className="card__age">{age}</span>
          </p>
          <p className="card__country">{country}</p>
        </div>
        <div className="card__footer">
          <div className="card__item card__followers">
            <span className="card__count">{followers}K</span>
            <span className="card__description">Followers</span>
          </div>
          <div className="card__item card__likes">
            <span className="card__count">{likes}K</span>
            <span className="card__description">Likes</span>
          </div>
          <div className="card__item card__photos">
            <span className="card__count">{photos}k</span>
            <span className="card__description">Photos</span>
          </div>
        </div>
        {isAnimation && <div className="card__animation"></div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  photos: PropTypes.string.isRequired,
  bgHeader: PropTypes.string.isRequired,
  isAnimation: PropTypes.bool,
};

Card.defaultProps = {
  isAnimation: true,
};

export default React.memo(Card);
