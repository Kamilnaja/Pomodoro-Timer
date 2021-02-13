import { shallow } from 'enzyme';
import React from 'react';
import './main.scss';
import MainContainer from './MainContainer';

describe('MainContainer', () => {
  it('Should be defined', () => {
    const main = shallow(<MainContainer />);

    expect(main).not.toBeNull();
  });
});
