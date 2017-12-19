import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../actions/index.js'

const filter = (state) => {
  return (
    <div className='filter' onClick={() => state.onFilterClick()}>
      <span className='filter__text'>{state.showAll ? 'Скрыть' : 'Показать еще'}</span>
    </div>
  )
}
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onFilterClick: () => {
      dispatch( toggleFilter() )
    }
  }
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(filter);

export default Filter