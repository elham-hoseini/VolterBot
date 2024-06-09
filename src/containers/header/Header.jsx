import React from "react";
import people from "../../assets/people.png";
import gai from "../../assets/gai.webp";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with VolterBot
      </h1>
      <p>
        During our journey, unexpected help appeared, softening the rough edges.
        Thoughts converged into a harmonious blessing, and joyous changes
        unfolded. Over the years, we embraced life’s mysteries with open hearts.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,100 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={gai} alt="GenerativeAI" />
    </div>
  </div>
);

export default Header;
