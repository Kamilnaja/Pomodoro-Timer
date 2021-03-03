import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import { createAuthState } from '../../testing/auth.testing.data';
import { LoginComponent } from './LoginComponent';

import React from 'react';
import '@testing-library/jest-dom';

describe('LoginComponent', () => {
  let wrapper: ShallowWrapper;
  const handleSubmit = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LoginComponent handleSubmit={handleSubmit} auth={createAuthState(true)} />);
  });

  it('Should match snapshot when is success', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should match snapshot when form is visible', () => {
    wrapper.setProps({
      auth: createAuthState(false),
    });

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should show validation info at start', () => {
    expect(wrapper.find('.login__success')).toHaveLength(1);

    wrapper.setProps({
      auth: createAuthState(false),
    });

    expect(wrapper.find('.login__success')).toHaveLength(0);
  });

  it('should render form fields', () => {
    render(<LoginComponent handleSubmit={handleSubmit} auth={createAuthState(false, false)} />);

    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('User login')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('should submit form', async () => {
    wrapper.setProps({
      auth: createAuthState(false, false),
    });
    let getByTestId: any;

    act(() => {
      getByTestId = render(<LoginComponent handleSubmit={handleSubmit} auth={createAuthState(false, false)} />);
    });

    act(() => {
      fireEvent.input(screen.getByLabelText('Password'), {
        target: {
          value: 'Diccus',
        },
      });

      fireEvent.input(screen.getByLabelText('User login'), {
        target: {
          value: 'asdf111111',
        },
      });

      fireEvent.submit(screen.getByRole('button', { name: /Submit/i }));
    });

    expect(shallowToJson(wrapper)).toMatchSnapshot();

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
