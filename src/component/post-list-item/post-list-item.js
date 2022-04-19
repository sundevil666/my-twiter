import React, { Component } from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {

  render () {
    const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props

    let className = 'app-list-item d-flex justify-content-between'
    if(important) {
      className += ' important'
    }
    if(like) {
      className += ' like'
    }

    return (
      <li className={className}>
      <span
        className="app-list-item-label"
        onClick={onToggleLiked}
      >
        { label }
      </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={onDelete}
          >
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    )
  }
}
