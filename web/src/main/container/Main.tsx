import React from "react";
import { connect } from "react-redux";
import { resetForm } from "../../auth/store/actions/auth.actions";
import Header from "../../header/component/Header";
import { Modal } from "../../shared/components/modal/Modal";
import { Modal as ModalEnum } from "../../shared/store/enums/modal.enum";
import StatsContainer from "../../stats/containers/StatsContainer";
import Timer from "../../timer/containers/Timer";
import "./main.scss";

interface MainState {
  openedModal: ModalEnum;
}

interface MainProps {
  resetForm: () => void;
}
// Wrapper for whole app
class Main extends React.Component<MainProps, MainState> {
  constructor(props: any) {
    super(props);
    this.state = {
      openedModal: ModalEnum.NULL,
    };
  }

  handleOpenModal = (modal: ModalEnum) =>
    this.setState({
      openedModal: modal,
    });

  handleCloseModal = () => {
    this.setState({
      openedModal: ModalEnum.NULL,
    });
    this.props.resetForm();
  };

  render = () => (
    <div className="app">
      <Header handleOpenModal={this.handleOpenModal}></Header>
      <Timer></Timer>
      <StatsContainer></StatsContainer>
      <footer>Hello I'm footer</footer>
      <Modal
        modalType={this.state.openedModal}
        closeModal={this.handleCloseModal}
      ></Modal>
    </div>
  );
}

const mapDispatchToProps = {
  resetForm,
};

export default connect(null, mapDispatchToProps)(Main);
