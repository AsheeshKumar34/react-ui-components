import styled from 'styled-components';
import Accordion from './components/accordion';
import { accordionList } from './components/accordion/data';

const Wrapper = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <Wrapper>
      <Accordion title='Accordion' accordionList={accordionList} />
    </Wrapper>
  );
}

export default App;
