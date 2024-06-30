import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 480px;
  margin: 0 auto;
  height: 100vh;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

export const SuggestionsWrapper = styled.ul`
  border: 2px solid #ddd;
  padding: 0;
`;

export const SuggestionList = styled.li`
  list-style-type: none;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;
