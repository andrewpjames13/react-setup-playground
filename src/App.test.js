import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  expect(wrapper.find('.App').hasClass('colXs12')).toEqual(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});

test('snapshot', () => {
  const tree = renderer.create(
    <App/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
