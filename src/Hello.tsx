import React from 'react'

interface HelloProps {
  name: string,
}

interface State {}

class Hello extends React.Component<HelloProps, State> {
  render() {
    return (
      <span>
        {this.props.name}
      </span>
    )
  }
}

export default Hello