import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header className='header'>
          <span className='header__headText'>
            <strong className='header__headBoldText'>Test</strong> you skill
          </span>
        </header>
      )
  }
}

export default Header;