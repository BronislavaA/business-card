import React from 'react';
import renderer from 'react-test-renderer';
import IconText from './icon-text'

test('renders IconText component', () => {
  const component = renderer.create(
    <IconText phone/>,
    <IconText address/>,
    <IconText email/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});