import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

const App: React.FC<React.Props<{}>> = () => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <circle cx="150" cy="200" r="100" fill="#06f"></circle>
    </svg>
    <h1>Hello <Hello name='React' /> + <Hello name='TypeScript' />!</h1>
  </>
);

ReactDOM.render(<App/>, document.querySelector('#app'))