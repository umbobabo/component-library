import React from 'react';
import Tabs from 'react-simpletabs';

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
      examples: React.PropTypes.object,
      children: React.PropTypes.element,
    };
  }

  renderExamples() {
    let examples = [];
    if (this.props.examples === false) {
      examples = this.props.children;
    } else if (this.props.children) {
      examples = [ (
        <Tabs.Panel title="Example">{this.props.children}</Tabs.Panel>
      ) ];
    } else {
      examples = Object.keys(this.props.examples).map((title, key) => {
        const exampleProps = this.props.examples[title];
        const Component = this.props.component;
        return (
          <Tabs.Panel key={key} title={title}>
            <Component {...exampleProps}/>
          </Tabs.Panel>
        );
      });
    }
    return (
      <Tabs className="library--example-tabs">
        {examples}
      </Tabs>
    );
  }

  render() {
    return (
      <div className="library">
        <a className="library--heading" name={this.props.metadata.name} href={this.props.metadata.homepage}>
          <h1 className="library--title">{this.props.component.name}</h1>
          <h2 className="library--package-details">
            ({this.props.metadata.name}@{this.props.metadata.version})
          </h2>
        </a>
        <div className="library--example-wrapper">
          <div className="library--description">
            {this.props.metadata.description}
          </div>
          {this.renderExamples()}
        </div>
      </div>
    );
  }
}
