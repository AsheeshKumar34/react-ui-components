import React from 'react';
import { SuggestionList } from '../styled';

interface SuggestionsListProps {
  suggestions: any;
  onSuggestionClick: (suggestionName: string) => void;
}

const SuggestionsList = ({ suggestions, onSuggestionClick }: SuggestionsListProps) => {
  return (
    <>
      {suggestions?.map((suggestion: any) => (
        <SuggestionList onClick={() => onSuggestionClick(suggestion?.name)}>{suggestion?.name}</SuggestionList>
      ))}
    </>
  );
};

export default SuggestionsList;
