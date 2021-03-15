import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Colorbox from './Components/Colorbox';

function App() {
  const [color, setColor] = useState({
    colorToAdd: "",
    height: "",
    width: ""
  });

  //map
  const [colorsList, setColorsList] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    console.log(color);
    setColorsList([...colorsList, color]);
    setColor({
      colorToAdd: "",
      height: "",
      width: ""
    })
    console.log(colorsList);
  }
  const colorChangeHandler = e => {
    const { name: key, value} = e.target;
    setColor({
      ...color,
      [key]: value
    });
  }
  return (
    <div className="App">
      <Form 
        changeHandler= { colorChangeHandler }
        submitHandler = { submitHandler }
        color={ color }
      />
      <Colorbox 
        colorsList = {colorsList}
      />
    </div>
  );
}

export default App;
