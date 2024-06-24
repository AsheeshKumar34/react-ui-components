import styled from 'styled-components';

export const Wrapper = styled.div<{ colorCode: string }>`
  height: 100vh;
  background-color: ${({ colorCode }) => colorCode};
`;

export const Header = styled.div`
  text-align: center;
`;

export const Title = styled.h1``;

export const ColorCode = styled.h2`
  font-size: 60px;
  text-align: center;
`;
