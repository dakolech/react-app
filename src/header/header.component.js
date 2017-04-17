import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import './header.css';

function Header({ push }) {
  return (
    <div className="Header">
      <div className="row header-background">
      </div>
      <div className="avatar-container">
        <div className="avatar"></div>
      </div>
      <div className="row menu">
        <a onClick={() => push('/')}>
          <div className="icon-container">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
        </a>
        <a onClick={() => push('/photos')}>
          <div className="icon-container circle">
            <i className="fa fa-picture-o" aria-hidden="true"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

export const HeaderComponent = connect(null, mapDispatchToProps)(Header);
