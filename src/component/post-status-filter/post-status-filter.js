import React, { Component } from 'react';
import './post-status-filter.css'

export default class PostStatusFilter extends Component {
  constructor (props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'like', label: 'Like'},
    ]
  }

  render () {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props
      const btnActive = filter === name;
      const clazz = btnActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          key={name}
          className={`btn ${clazz}`}
          onClick={() => onFilterSelect(name)}
        >
          {name}
        </button>
      )
    })
    return (
      <div className="btn-group">
        { buttons }
      </div>
    )
  }
}
