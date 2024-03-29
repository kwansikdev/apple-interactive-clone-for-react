import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  .global-nav {
    /* position: absolute; */
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 44px;
    padding: 0 1rem;
  }
  .local-nav {
    /* position: absolute; */
    top: 45px;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 52px;
    padding: 0 1rem;
    border-bottom: 1px solid #ddd;
  }
  .local-nav-sticky .local-nav {
    position: fixed;
    top: 0;
    background: rgba(255, 255, 255, 0.1);
    /* for iPhone */
    -webkit-backdrop-filter: saturate(180%) blur(15px);
    -moz-backdrop-filter: saturate(180%) blur(15px);
    -o-backdrop-filter: saturate(180%) blur(15px);
    backdrop-filter: saturate(180%) blur(15px);
  }
  .global-nav-links,
  .local-nav-links {
    display: flex;
    align-items: center;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
  }
  .global-nav-links {
    justify-content: space-between;
  }
  .local-nav-links .product-name {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .local-nav-links a {
    font-size: 0.8rem;
  }
  .local-nav-links a:not(.product-name) {
    margin-left: 2em;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <nav className='global-nav'>
        <div className='global-nav-links'>
          <a href='/' className='global-nav-item'>
            Rooms
          </a>
          <a href='/' className='global-nav-item'>
            Ideas
          </a>
          <a href='/' className='global-nav-item'>
            Stores
          </a>
          <a href='/' className='global-nav-item'>
            Contact
          </a>
        </div>
      </nav>
      <nav className='local-nav'>
        <div className='local-nav-links'>
          <a href='/' className='product-name'>
            AirMug Pro
          </a>
          <a href='/'>개요</a>
          <a href='/'>제품사양</a>
          <a href='/'>구입하기</a>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
