import React from 'react';
import Icon from '@economist/component-icon';

export default class Library extends React.Component {

  static get propTypes() {
    return {
      children: React.PropTypes.element,
    };
  }

  render() {
    return (
      <div className="library--wrapper">
        <div className="library--sidebar">
          <Icon icon="economist" size="120px" uri="/assets/icons.svg"
            className="library--economist-logo"
          />
          {this.props.children.map((child) => {
            return (
              <a href={`#${child.props.metadata.name}`}
                className="library--sidebar-link"
              >{child.props.component.name}</a>
            );
          })}
        </div>
        <div className="library--main" role="main">{this.props.children}</div>
      </div>
    );
  }
}
