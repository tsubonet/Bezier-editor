import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello <Hello name='React' /> + <Hello name='TypeScript' />!</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'))