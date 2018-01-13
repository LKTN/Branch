import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../actions/index.js';

let Filter = (props) => {
  return (
    <div
      className={`filter ${props.className ? props.className : ''}`}
      onClick={() => props.onFilterClick()}
    >
      <span className="filter__text">{props.showAll ? 'Hide' : 'Show more'}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { showAll: state.showAll };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterClick: () => {
      dispatch(toggleFilter());
    }
  };
};

Filter = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default Filter;
