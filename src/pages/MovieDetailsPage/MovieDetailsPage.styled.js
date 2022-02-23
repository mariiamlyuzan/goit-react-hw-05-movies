import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const DataMovie = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: aquamarine; ;
`;

const List = styled(NavLink)`
  color: #ade7d4;
  text-decoration: none;

  &.active {
    color: aquamarine;
  }

  }
`;

const Button = styled.button`
  color: aquamarine;
  background-color: transparent;
  padding: 6px;
  border-color: aquamarine;
  margin-bottom: 10px;
  border-radius: 6px;
`;

export { DataMovie, Title, List, Button };
