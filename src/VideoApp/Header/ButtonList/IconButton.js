import React from "react";

const IconButton = ({ app }) => {
  const { img, href, alt, color, txt, name } = app;
  return (
    <li key={txt} className="icon__container">
      <a
        className="icon__anchor"
        style={{ backgroundColor: color }}
        href={href}
        title={txt}
      >
        <div className="icon__all">
          <img className="icon__image" src={img} alt={alt} />
          <span className="icon__image__span">{name.toUpperCase()} Login</span>
        </div>
      </a>
    </li>
  );
};

export default IconButton;
