import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ColorBlocks from './ColorBlocks';

function setup(color) {
  const props = {
    color
  }

  const colorBlocks = shallow(<ColorBlocks {...props} />)

  return {
    props,
    colorBlocks
  }
}

it('renders the correct class and text', () => {
  const { colorBlocks } = setup('primary');

  expect(colorBlocks.hasClass('primary')).toBe(true)
  expect(colorBlocks.find('h2').text()).toBe('$primary');
});

test('snapshot', () => {
  const { props } = setup('primary');

  const tree = renderer.create(
    <ColorBlocks {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
