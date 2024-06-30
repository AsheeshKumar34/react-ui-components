import React, { useEffect, useState } from 'react';
import { Input, SuggestionsWrapper, Wrapper } from './styled';
import SuggestionsList from './components/SuggestionsList';

interface AutoCompleteProps {
  placeholder: string;
  customLoading: React.ReactNode;
  fetchSuggestions: (query: string) => any;
  onSelect: (suggestion: string) => void;
  onChange: (e: any) => void;
  onFocus: () => void;
  onBlur: () => void;
}
const AutoComplete = ({ placeholder, customLoading, fetchSuggestions, onSelect, onChange, onFocus, onBlur }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const getSuggestions = async (query: string) => {
    setLoading(true);
    setErrMsg('');
    try {
      const response = await fetchSuggestions(query);
      setSuggestions(response);
    } catch (e) {
      setErrMsg('Something went wrong!');
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    onSelect(suggestion);
    setSuggestions([]);
  };

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestions(inputValue);
    }
  }, [inputValue]);

  return (
    <Wrapper>
      <Input type='text' placeholder={placeholder} value={inputValue} onChange={(e) => handleInputChange(e)} />
      {suggestions?.length > 0 && (
        <>
          {loading && customLoading}
          {errMsg?.length > 0 && <p>Error</p>}
          <SuggestionsWrapper>
            <SuggestionsList suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
          </SuggestionsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default AutoComplete;
