import React from "react";
import Header from "../../header/component/Header";
import { Modal } from "../../shared/components/modal/Modal";
import { Modal as ModalEnum } from "../../shared/store/enums/modal.enum";
import StatsContainer from "../../stats/containers/StatsContainer";
import Timer from "../../timer/containers/Timer";
import "./main.scss";

interface MainState {
  openedModal: ModalEnum;
}

// Wrapper for whole app
class Main extends React.Component<{}, MainState> {
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
        handleCloseModal={this.handleCloseModal}
      ></Modal>
    </div>
  );
}

export default Main;
