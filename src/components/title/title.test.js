import React from 'react';
import renderer from 'react-test-renderer';
import Title from './title'

test('renders Title component', () => {
    const component = renderer.create(
      <Title />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });