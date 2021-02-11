import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ModalType } from 'shared/store/enums/modalEnum';
import TimerContainer from 'timer/containers/TimerContainer';
import Settings from '../../settings/Settings';
import { openModal } from '../../shared/store/interfaces/modalInterface';
import StatsContainer from '../../stats/containers/StatsContainer';
import TaskAndNotesContainer from '../../tasksAndNotes/taskAndNotesWrapper/taskAndNotesContainer/TaskAndNotesContainer';
import './headerComponent.scss';

export interface HeaderProps {
  handleOpenModal: openModal;
  isLoggedIn: boolean;
}

export const HeaderComponent = (props: HeaderProps) => (
  <Router>
    <Container>
      <Navbar>
        <Navbar.Brand href="/">Tomatodone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!props.isLoggedIn ? (
              <>
                <Nav.Link onClick={() => props.handleOpenModal(ModalType.LOGIN)}>Login</Nav.Link>
                <Nav.Link onClick={() => props.handleOpenModal(ModalType.REGISTER)}>Register</Nav.Link>
              </>
            ) : (
              <>
                {/* <Nav.Link href="/taskAndNotes">Tasks and notes</Nav.Link> */}
                <Nav.Link href="/stats">Stats</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>
                <Nav.Link onClick={() => props.handleOpenModal(ModalType.LOGOUT)}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/taskAndNotes">
          <TaskAndNotesContainer />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/stats">
          <StatsContainer />
        </Route>
        <Route path="/">
          <TimerContainer />
        </Route>
      </Switch>
    </Container>
  </Router>
);
