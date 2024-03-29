import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ModalType } from 'shared/modal/modalEnum';
import { About } from '../../about/About';
import { ConnectedPomodoroCounterScreen } from '../../pomodoroCounter/pomodoroCounterScreen/PomodoroCounterScreen';
import { HeaderContainerProps } from '../container/HeaderContainerProps';
import './headerComponent.scss';

export const HeaderComponent = (props: HeaderContainerProps) => (
  <Router>
    <Container>
      <Navbar variant="dark">
        <Navbar.Brand href="/">Tomatodone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.isLoggedIn ? (
              <>
                <Nav.Link onClick={() => props.handleOpenModal(ModalType.STATS)}>Stats</Nav.Link>
                <Nav.Link onClick={() => props.handleOpenModal(ModalType.SETTINGS)}>Settings</Nav.Link>
                <Nav.Link className="button--logout" onClick={() => props.handleOpenModal(ModalType.LOGOUT)}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="button--login" onClick={() => props.handleOpenModal(ModalType.LOGIN)}>
                  Login
                </Nav.Link>
                <Nav.Link className="button--register" onClick={() => props.handleOpenModal(ModalType.REGISTER)}>
                  Register
                </Nav.Link>
              </>
            )}
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <ConnectedPomodoroCounterScreen />
        </Route>
      </Switch>
    </Container>
  </Router>
);
