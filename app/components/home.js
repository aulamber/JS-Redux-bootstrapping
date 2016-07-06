import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const Home = React.createClass({
  render() {
    const reducerTest = this.props.test
    return (
      <div>
        Welcome to our app!
        <div>{reducerTest}</div>
        <button><Link to='/register'>Please register</Link></button>
        <div><Link to='/component1'>Component1</Link></div>
        <div><Link to='/component2'>Component2</Link></div>
      </div>
    )
  },
})

const mapStateToProps = (state) => {
  return {
    test: state.test,
  }
}

export default connect(mapStateToProps)(Home)
