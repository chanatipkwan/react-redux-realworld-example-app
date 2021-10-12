import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>This is a partial fulfillment for the final examination for EAD class by Chanatip Kwankeua.</p>
      </div>
    </div>
  );
};

export default Banner;
