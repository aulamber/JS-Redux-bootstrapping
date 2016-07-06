import React from 'react'
import {Link} from 'react-router'

const Component1 = React.createClass({
  render() {
    return (
      <div>
        <div><Link to='/'>Back to home page</Link></div>
        <div>Component1 content</div>
        <button><Link to='/component1/subComponent1'>SubComponent1</Link></button>
        <button><Link to='/component1/subComponent2'>SubComponent2</Link></button>
        {this.props.children}
      </div>
    )
  },
})

export default Component1
