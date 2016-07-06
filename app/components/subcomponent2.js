import React from 'react'
import {Link} from 'react-router'

const SubComponent2 = React.createClass({
  render() {
    return (
      <div>
        <div><Link to='/component1'>Back to component1</Link></div>
        <div><Link to='/'>Back to home page</Link></div>
        <div>Sub component2 content</div>
      </div>
    )
  },
})

export default SubComponent2
