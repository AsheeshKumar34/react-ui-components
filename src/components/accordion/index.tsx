import { useState } from 'react';
import { Description, Header, Title, Wrapper } from './styled';
import { AccordionData } from './types';

interface AccordionTypes {
  title: string;
  accordionList: AccordionData[];
  isMultiSelect?: boolean;
}

const Accordion = ({ title, accordionList, isMultiSelect = false }: AccordionTypes) => {
  const [selectedId, setSelectedId] = useState('0');
  const [multiSelectedIds, setMultiSelectedIds] = useState([] as string[]);

  const handleHeaderClick = (id: string) => {
    if (isMultiSelect) {
      setMultiSelectedIds((prevMultiSelectedIds) =>
        prevMultiSelectedIds.includes(id) ? prevMultiSelectedIds.filter((item) => item !== id) : [...prevMultiSelectedIds, id]
      );
    } else {
      setSelectedId(id);
    }
  };

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {accordionList?.map((accordion) => {
        const { id, question, answer } = accordion;
        const toggle = selectedId === id || multiSelectedIds.indexOf(id) !== -1;
        return (
          <>
            <Header onClick={() => handleHeaderClick(id)}>
              <h3>{question}</h3>
              <span>{toggle ? '-' : '+'}</span>
            </Header>
            {toggle && (
              <Description>
                <p>{answer}</p>
              </Description>
            )}
          </>
        );
      })}
    </Wrapper>
  );
};

export default Accordion;
