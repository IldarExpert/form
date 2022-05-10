import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Colored = styled(Link)`
  color: #dfcf77;
  font-weight: bold;
  text-decoration: none;
`;

export const FlexCentered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
