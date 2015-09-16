import Library from '../index.es6';
import React from 'react/addons';

describe(`The component library`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Library.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(<Library/>).should.equal(true);
    });
  });
  describe(`it provides a basic branded MastHead`, () => {
    it(`it have an Economist logo customisation`, () => {
      // const renderer = TestUtils.createRenderer();
      // result = renderer.getRenderOutput();
      // result.type.should.equal('div');
      // ('a').shoul.equal('a');
      // {
      //   href: 'http://www.economist.com',
      //   alt: 'The Economist',
      //   type: 'economist',
      //   size: '100%',
      // }
      // expect(result.props.children).toEqual([
      //   <MastHead title="Component Library" logo="" />
      //   <div className="Library--Sidebar">
      //   </div>
      //   <div className="Library--Main" role="main">{this.props.children}</div>
      // ]);
    });
  });
});
