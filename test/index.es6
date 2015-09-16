import Library from '../index.es6';
import React from 'react/addons';

describe(`The component library`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Library.should.be.a('function').and.respondTo('render');
    });
    it('renders a React element', () => {
      React.isValidElement(<Library/>).should.equal(true);
    });
  });
});
