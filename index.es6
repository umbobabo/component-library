import React from 'react';

export default class Library extends React.Component {

  static get propTypes() {
    return {
      children: React.PropTypes.element,
    };
  }

  render() {
    return (
      <div>
        <div className="Library--Sidebar">
        </div>
        <div className="Library--Main" role="main">{this.props.children}</div>
      </div>
    );
  }
}
