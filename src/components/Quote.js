import React from "react";

const Quote = ({quote, characters, image}) => (
  
  <figure>
    <img
      src={image}
      alt={characters}
    />
    <figcaption>
      <blockquote>
        {quote}
      </blockquote>
      <cite>{characters}</cite>
    </figcaption>
  </figure>
);

export default Quote;