import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
  render() {
    return (
      <div>
        <h1>Ohai</h1>
        <p>
          The phrase is an intentionally misspelled "Oh hi" and is usually used
          as a title on cutesy pictures of animals like on lolcats. And for The
          record, this was copied verbatim it was typed.
        </p>
      </div>
    )
  }
}

function run() {
  ReactDOM.render(<Hello/>, document.getElementById('root'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.addEventListener('onload', run);
}
