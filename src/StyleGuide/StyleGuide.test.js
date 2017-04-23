import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import StyleGuide from './StyleGuide';

it('renders without crashing', () => {
  const wrapper = shallow(<StyleGuide />);

  expect(wrapper.contains(<h2>AngelMD StyleGuide</h2>)).toEqual(true);
});

test('snapshot', () => {
  const tree = renderer.create(
    <StyleGuide/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
