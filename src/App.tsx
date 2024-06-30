import styled from 'styled-components';
import Accordion from './components/accordion';
import { accordionList } from './components/accordion/data';
import RandomColorGenerator from './components/random-color';
import AutoComplete from './components/auto-suggestions';

const Wrapper = styled.div``;

function App() {
  const fetchSuggestions = async (query: string) => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await response.json();
      return data?.recipes;
    } catch (e) {
      throw new Error("Something went wrong!")
    }
  };
  return (
    <Wrapper>
      <Accordion title='Accordion' accordionList={accordionList} />
      <RandomColorGenerator />
      <h1 style={{textAlign: 'center'}}>Auto suggestions</h1>
      <AutoComplete
        placeholder='Enter recipe'
        customLoading={<>Loading...</>}
        fetchSuggestions={fetchSuggestions}
        onSelect={() => {}}
        onChange={(event) => {}}
        onFocus={() => {}}
        onBlur={() => {}}
      />
    </Wrapper>
  );
}

export default App;
