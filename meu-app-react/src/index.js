import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import './styles.css';


function sum (a,b) {
  alert( a + b );
}

function primeiroJSX() {
  return (
    <div className='test'>
      Arthur Campolina - Introdução ao ReactJS
      <h1>Soma: {sum(10 , 20)}</h1>
      <Button onClick={() => sum(10,20)} name="Arthur Campolina" />
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />,rootElement)