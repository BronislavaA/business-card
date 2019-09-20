import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './logo'

test('renders Logo component', () => {
  const component = renderer.create(
    <Logo />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});