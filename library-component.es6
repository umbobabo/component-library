import React from 'react';

export default class LibraryComponent extends React.Component {

  static get propTypes() {
    return {
      metadata: React.PropTypes.shape({
        name: React.PropTypes.string,
        version: React.PropTypes.string,
        description: React.PropTypes.string,
        homepage: React.PropTypes.string,
      }).isRequired,
      component: React.PropTypes.instanceOf(React.Component).isRequired,
      children: React.PropTypes.element,
    };
  }

  render() {
    return (
      <div
        className={`library  library__${this.props.component.name}`}
      >
        <a className="library--heading"
          name={this.props.metadata.name} href={this.props.metadata.homepage}
        >
          <h1 className="library--title">{this.props.component.name}</h1>
          <h2 className="library--package-details">
            ({this.props.metadata.name}@{this.props.metadata.version})
          </h2>
        </a>
        <div className="library--example-wrapper">
          <div className="library--description">
            {this.props.metadata.description}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
