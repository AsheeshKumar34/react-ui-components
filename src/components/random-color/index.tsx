import { useState } from 'react';
import { ColorCode, Wrapper, Title, Header } from './styled';

const RandomColorGenerator = () => {
  const [colorCode, setColorCode] = useState('#FFFFFF');

  const generateRandomNumber = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const generateHexCode = () => {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexValue = '#';
    Array(6)
      .fill('')
      .forEach(() => {
        hexValue += values[generateRandomNumber(values.length)];
      });
    setColorCode(hexValue);
  };

  const generateRGB = () => {
    const r = generateRandomNumber(255);
    const g = generateRandomNumber(255);
    const b = generateRandomNumber(255);
    setColorCode(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <Wrapper colorCode={colorCode}>
      <Header>
        <Title>Random Color Generator</Title>
        <button onClick={generateHexCode}>Generate HEX Code</button>
        <button onClick={generateRGB}>Generate RGB</button>
      </Header>
      <div>
        <ColorCode>{colorCode}</ColorCode>
      </div>
    </Wrapper>
  );
};

export default RandomColorGenerator;
