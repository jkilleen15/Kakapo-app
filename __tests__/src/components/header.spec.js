import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header } from 'components/';
import { getData } from '../helper';

function setup(props = {}) {
  const propData = {
    ...getData('themes'),
    ...getData('settings'),
    ...props
  };
  const comp = <Header {...propData} />;
  return {
    props,
    tree: renderer.create(comp).toJSON(),
    wrapper: shallow(comp)
  };
}

test('<Header/> render', () => {
  const { tree } = setup();
  expect(tree).toMatchSnapshot();
});

test('<Header/> simulate toggle-mute click', () => {
  const onToggleMute = jest.fn();
  const { wrapper } = setup({ onToggleMute });
  wrapper.find('.toggle-mute').simulate('click');
  expect(onToggleMute).toBeCalled();
});
