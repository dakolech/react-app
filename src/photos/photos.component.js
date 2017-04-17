import React from 'react';
import { connect } from "react-redux";
import { pathOr } from "ramda";
import './photos.css';

function Photos({ photos }) {
  return (
    <div className="Photos">
      <div className="container">
        <div className="row">
          {photos.map((photo, index) => (
            <div className="photo-container col-lg-4 col-md-4 col-sm-4 col-xs-6" key={index}>
              <a href={photo} target="_blank">
                <img className="photo" src={photo} alt="Marilyn Monroe"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  photos: pathOr([], ['photos', 'urls'], state),
});

export const PhotosComponent = connect(mapStateToProps)(Photos);
