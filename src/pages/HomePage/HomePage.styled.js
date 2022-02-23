import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled(Link)`
  color: #ade7d4;
  text-decoration: none;
  &.active {
    color: aquamarine;
  }

  }
`;

export { List };
