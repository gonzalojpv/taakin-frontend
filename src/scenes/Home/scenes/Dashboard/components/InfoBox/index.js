import React from "react";
import './styles.css';

const InfoBox = ({ icon, title, content, bg }) => {
  return(
    <div className="info-box">
      <span className={ 'info-box-icon ' + bg }>
        <i className={ 'fa ' + icon } aria-hidden="true"></i>
      </span>

      <div className="info-box-content">
        <span className="info-box-text">{title}</span>
        <span className="info-box-number">{content}</span>
      </div>
    </div>
  );
};

export default InfoBox;
