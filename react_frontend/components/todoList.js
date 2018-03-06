import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value} = this.props
    return (
      <p>
        Clicked: {value} times
      </p>
    )
  }
}

ToDoList.propTypes = {
  value: PropTypes.number.isRequired
}

export default ToDoList
