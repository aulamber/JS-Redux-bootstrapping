import React from 'react'
import {Link} from 'react-router'

const Component2 = React.createClass({
  render() {
    return (
      <div>
        <div><Link to='/'>Back to home page</Link></div>
        <div>Component2 content</div>
      </div>
    )
  },
})

export default Component2
