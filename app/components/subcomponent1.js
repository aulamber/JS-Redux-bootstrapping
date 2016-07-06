import React from 'react'
import {Link} from 'react-router'

const SubComponent1 = React.createClass({
  render() {
    return (
      <div>
        <div><Link to='/component1'>Back to component1</Link></div>
        <div><Link to='/'>Back to home page</Link></div>
        <div>Sub component1 content</div>
      </div>
    )
  },
})

export default SubComponent1
