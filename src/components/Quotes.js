import React from "react";

const Quotes = ({quotes, characters, image}) => (
  <figure>
    <img
      src={image}
      alt={characters}
    />
    <figcaption>
      <blockquote>
        {quotes}
      </blockquote>
      <cite>{characters}</cite>
    </figcaption>
  </figure>
);

export default Quotes;