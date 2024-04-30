import { useState } from 'react';

const App = () => {
  const [total, setTotal] = useState(0);

  const addFive = () => {
    setTotal(total + 5);
  };

  const addTen = () => {
    setTotal(total + 10);
  };

  const zero = () => {
    setTotal(0);
  };

  return (
    <div>
      <p>Hello world</p>
      <Display total={total} />
      <Button nameOfFunc={addFive} text="+5" />
      <Button nameOfFunc={addTen} text="+10" />
      <Button nameOfFunc={zero} text="reset to 0" />
    </div>
  );
};

function Display(props) {
  return <h1>{props.total}</h1>;
}

function Button({ text, nameOfFunc }) {
  return <button onClick={nameOfFunc}>{text}</button>;
}

export default App;
// Display
// Buttons => functions
