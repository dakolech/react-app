import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

function Header({ push }) {
  return (
    <div className="App-header">
      <button onClick={() => push('/')}>Portfolio</button>
      <button onClick={() => push('/photos')}>Photos</button>
    </div>
  );
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

const mapStateToProps = state => ({
  // order: state.newTournament.order,
});

export const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(Header);
