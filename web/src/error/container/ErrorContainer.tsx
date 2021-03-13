import React from 'react';
import { connect } from 'react-redux';
import { ErrorState } from '../state/reducer/errorReducer';
import { ErrorContainerProps } from './ErrorContainerProps';

class ErrorContainer extends React.Component<ErrorContainerProps> {
  render() {
    return <div>Something went wrong</div>;
  }
}

const mapStateToProps = (state: { error: ErrorState }) => {
  const errorState = state.error;
  return { errorState };
};

export default connect(mapStateToProps, null)(ErrorContainer);
