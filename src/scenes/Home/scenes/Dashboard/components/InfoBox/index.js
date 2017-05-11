import React from "react";
import './styles.css';

const InfoBox = ( props ) => {
  return(
    <div className="info-box">
      <span className={ 'info-box-icon ' + props.bg }>
        <i className={ 'fa ' + props.icon } aria-hidden="true"></i>
      </span>

      <div className="info-box-content">
        <span className="info-box-text">{props.title}</span>
        <span className="info-box-number">{props.content}</span>
      </div>
    </div>
  );
};

export default InfoBox;
