import React from 'react';
import MastHead from '@economist/component-masthead';

export default class Library extends React.Component {

  static get propTypes() {
    return {
      children: React.PropTypes.element,
    };
  }

  render() {
    const logo = {
      href: 'http://www.economist.com',
      alt: 'The Economist',
      type: 'economist',
      size: '100%',
    };

    return (
      <div>
        <MastHead title="Component Library" logo={logo} />
        <div className="Library--Sidebar">
        </div>
        <div className="Library--Main" role="main">{this.props.children}</div>
      </div>
    );
  }
}
