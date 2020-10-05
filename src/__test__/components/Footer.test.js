import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Footer render', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer title render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  const footer = create(<Footer />);

  test('Confirm footer snapshot', () => {
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
