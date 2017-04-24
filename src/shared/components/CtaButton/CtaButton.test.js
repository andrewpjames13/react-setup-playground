import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CtaButton from './CtaButton';

function setup(color, buttonText) {
  const props = {
    clickEvent: jest.fn(),
    buttonText,
    color
  }

  const ctaButton = shallow(<CtaButton {...props} />)

  return {
    props,
    ctaButton
  }
}

describe('<CtaButton />', () => {
  it('calls clickEvent on click of button', () => {
    const { ctaButton, props } = setup('primary');

    ctaButton.simulate('click');
    expect(props.clickEvent.mock.calls.length).toBe(1);
  });

  it('renders the correct class', () => {
    const { ctaButton } = setup('primary');

    expect(ctaButton.hasClass('primary')).toBe(true);
  });

  it('renders the correct buttonText', () => {
    const { ctaButton } = setup('primary', 'This is a button');

    expect(ctaButton.find('.primary').text()).toBe('This is a button');
  });

  test('snapshot', () => {
    const { props } = setup('primary', 'This is a button');

    const tree = renderer.create(
      <CtaButton {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
