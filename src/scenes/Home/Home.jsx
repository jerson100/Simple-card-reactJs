import React from "react";
import Card from "../../components/Common/Card";
import image from "../../services/img/image-victor.jpg";
import bg from "../../services/img/bg-pattern-card.svg";
import Author from "../../components/Common/Author/Author";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-scene">
      <div className="home-scene__content">
        <Card
          age="26"
          bgHeader={bg}
          country="London"
          followers="80"
          imagen={image}
          likes="803"
          name="Victor Crest"
          photos="1.4"
          isAnimation
        />
      </div>
    </div>
  );
};

export default Home;
