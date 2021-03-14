import React from 'react';
import { connect } from 'react-redux';
import { Registration } from '../../../../../types/authInterfaces';
import { Loader } from '../../../shared/loader/Loader';
import { sendRegisterForm } from '../../store/actions/authActions';
import { AuthState } from '../../store/interfaces/authState';
import { RegisterComponent } from '../component/RegisterComponent';
import { RegisterContainerProps } from './RegisterContainerProps';

class RegisterContainer extends React.Component<RegisterContainerProps> {
  handleSubmit = (registrationData: Registration) => {
    const { login, password, email } = registrationData;
    this.props.handleSubmit({
      login,
      password,
      email,
    });
  };

  render() {
    return this.props.auth.isLoading ? (
      <Loader />
    ) : (
      <RegisterComponent handleSubmit={this.handleSubmit} formState={this.props.auth} />
    );
  }
}

const mapStateToProps = (state: { auth: AuthState }) => {
  const formState = state.auth;
  return { auth: formState };
};

const mapDispatchToProps = {
  handleSubmit: sendRegisterForm,
};

export const ConnectedRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
