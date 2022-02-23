import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid aquamarine;
`;

const Link = styled(NavLink)`
  color: #ade7d4;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 20px;
  &.active {
    color: aquamarine;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
