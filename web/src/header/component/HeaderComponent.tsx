import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ModalType } from 'shared/modal/modalEnum';
import SettingsContainer from '../../settings/container/SettingsContainer';
import StatsContainer from '../../stats/allStats/containers/StatsContainer';
import TaskAndNotesContainer from '../../tasksAndNotes/taskAndNotesWrapper/taskAndNotesContainer/TaskAndNotesContainer';
import { HeaderContainerProps } from '../container/HeaderContainerProps';
import './headerComponent.scss';
import PomodoroCounterContainer from '../../pomodoroCounter/container/PomodoroCounterContainer';

export const HeaderComponent = (props: HeaderContainerProps) => (
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
          <SettingsContainer />
        </Route>
        <Route path="/stats">
          <StatsContainer />
        </Route>
        <Route path="/">
          <PomodoroCounterContainer />
        </Route>
      </Switch>
    </Container>
  </Router>
);
