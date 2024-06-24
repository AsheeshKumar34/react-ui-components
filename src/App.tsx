import styled from 'styled-components';
import Accordion from './components/accordion';
import { accordionList } from './components/accordion/data';
import RandomColorGenerator from './components/random-color';

const Wrapper = styled.div`
`;

function App() {
  return (
    <Wrapper>
      <Accordion title='Accordion' accordionList={accordionList} />
      <RandomColorGenerator />
    </Wrapper>
  );
}

export default App;
