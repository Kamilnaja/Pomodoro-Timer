import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ModalType } from 'shared/modal/modalEnum';
import About from '../../about/About';
import PomodoroCounterScreen from '../../pomodoroCounter/pomodoroCounterScreen/PomodoroCounterScreen';
import SettingsContainer from '../../settings/container/SettingsContainer';
import { StatsScreenContainer } from '../../stats/statsScreen/StatsScreenContainer';
import TaskAndNotesContainer from '../../tasksAndNotes/taskAndNotesWrapper/taskAndNotesContainer/TaskAndNotesContainer';
import { HeaderContainerProps } from '../container/HeaderContainerProps';
import { GuardedRoute } from '../guardedRoute/GuardedRoute';
import './headerComponent.scss';

export const HeaderComponent = (props: HeaderContainerProps) => (
  <Router>
    <Container>
      <Navbar>
        <Navbar.Brand href="/">Tomatodone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.isLoggedIn ? (
              <>
                {/* <Nav.Link href="/taskAndNotes">Tasks and notes</Nav.Link> */}
                <Nav.Link href="/stats">Stats</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>
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
        <Route path="/taskAndNotes">
          <TaskAndNotesContainer />
        </Route>
        <GuardedRoute path="/settings" component={SettingsContainer} auth={true}></GuardedRoute>
        <GuardedRoute path="/stats" component={StatsScreenContainer} auth={props.isLoggedIn}></GuardedRoute>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <PomodoroCounterScreen />
        </Route>
      </Switch>
    </Container>
  </Router>
);
