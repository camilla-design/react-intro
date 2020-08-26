import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div class="wrapper">
    <div className="container">
        <h1>Heading</h1>
        <h2>Sub heading</h2>
        <p>Aliquam interdum nec turpis eget feugiat. Phasellus augue turpis, scelerisque ut risus quis, malesuada sagittis risus. Sed imperdiet venenatis quam, ac laoreet nisl blandit ut. Morbi laoreet vitae dolor ac vulputate.</p>
        <div className="card-box">
          <h3>Title</h3>
          <p>Nunc aliquet finibus lectus. Aliquam id egestas dui. Ut sodales gravida lorem eleifend varius. Nam vitae iaculis mi, quis laoreet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales massa eget libero suscipit venenatis. </p>
        </div>
    </div>
    </div>
    <footer>
      <div class="footer-container">
        <p>Left footer</p>
        <p>Right footer</p>
      </div>
    </footer>
    </>
  );
}

export default App;
