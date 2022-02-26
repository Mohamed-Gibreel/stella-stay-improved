import React from "react";

//Images
import ImageOne from "../../assets/image_1.png";
import ImageTwo from "../../assets/image_2.png";
import ImageThree from "../../assets/image_3.png";
import ImageFour from "../../assets/image_4.png";

//Icons
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Location } from "../../assets/heart.svg";
import { ReactComponent as Rose } from "../../assets/heart.svg";
import { ReactComponent as Hand } from "../../assets/heart.svg";

//CSS
import "./style.css";

function PicturesSection() {
  return (
    <section id="images" className="mt-52">
      <div className="images">
        <div className="img-first-row">
          <div className="image-1" style={{}}>
            <img src={ImageOne} alt="image_1" />
            <div className="image-1-info">
              <div className="image-1-info-header flex items-center">
                <Heart />
                <span>Beyond Living</span>
              </div>
              <div className="image-1-info-text">
                Modern and fresh, our spaces are outfitted with comfort and
                style, be it for a quick getaway to a long term stay.
              </div>
            </div>
          </div>
          <div className="image-2">
            <img src={ImageTwo} alt="image_2" />
            <div className="image-2-info">
              <div className="image-2-info-header">
                <Location />
                <span>Prime Locations</span>
              </div>
              <div className="image-2-info-text">
                Breathtaking views in convenient and sought after locations, a
                little something for everyone.
              </div>
            </div>
          </div>
        </div>
        <div className="img-second-row">
          <div className="image-3">
            <img src={ImageThree} alt="image_3" />
            <div className="image-3-info">
              <div className="image-3-info-header flex items-center">
                <Rose />
                <span>Nullam efficitur turpis</span>
              </div>
              <div className="image-3-info-text">
                Phasellus fermentum tellus vitae ante vehicula posuere.
                Curabitur metus metus, feugiat non semper lacinia, maximus sit
                amet ligula. Proin dictum quis ipsum.
              </div>
            </div>
          </div>
          <div className="image-4">
            <img src={ImageFour} alt="image_4" />
            <div className="image-4-info">
              <div className="image-4-info-header">
                <Hand />
                <span>A Signature of Excellence</span>
              </div>
              <div className="image-4-info-text">
                24/7 guest concierge, seamless check-in and immaculate
                cleanliness, always a flawless stay.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PicturesSection;
