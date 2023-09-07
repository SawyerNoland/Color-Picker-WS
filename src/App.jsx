import React, {useState} from 'react';

const Color = ({color, setSelectedColor, selectedColor}) => {
  const isSelected = selectedColor === color;
  const colorClassName = `${color} ${isSelected} ? 'selected' : '' }`;
  return (
    <div className={colorClassName} onClick={() => setSelectedColor(color)}></div>
  );
};
const App = () => {
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently Selected:</div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
        color="blue"
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        />
        <Color
        color="violet"
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        />
        <Color
        color="green"
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;