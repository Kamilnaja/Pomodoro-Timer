import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ModalType } from 'shared/store/enums/modalEnum';
import Timer from 'timer/containers/Timer';
import { openModal } from '../../shared/store/interfaces/modalInterface';
import StatsContainer from '../../stats/containers/StatsContainer';
import { TodosContainer } from '../../tasksAndNotes/calendar/container/TodosContainer';
import './headerComponent.scss';

export interface HeaderProps {
  handleOpenModal: openModal;
  isLoggedIn: boolean;
}

export const HeaderComponent = (props: HeaderProps) => (
  <Router>
    <header className="header">
      <a href="/">
        <h1 className="header__title">Tomatodone</h1>
      </a>
      <nav>
        <ul className="header__buttons-wrapper">
          {!props.isLoggedIn ? (
            <>
              <li>
                <Button variant="link" onClick={() => props.handleOpenModal(ModalType.LOGIN)}>
                  Login
                </Button>
              </li>
              <li>
                <Button variant="link" onClick={() => props.handleOpenModal(ModalType.REGISTER)}>
                  Register
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Button variant="link" onClick={() => props.handleOpenModal(ModalType.SETTINGS)}>
                  Settings
                </Button>
              </li>
              <li>
                <Button variant="link" href="/todos">
                  Todos
                </Button>
              </li>
              <li>
                <Button variant="link" href="/stats">
                  Stats
                </Button>
              </li>
              <li>
                <Button variant="link" onClick={() => props.handleOpenModal(ModalType.LOGOUT)}>
                  Logout
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
    <Switch>
      <Route path="/todos">
        <TodosContainer></TodosContainer>
      </Route>
      <Route path="/stats">
        <StatsContainer></StatsContainer>
      </Route>
      <Route path="/">
        <Timer></Timer>
      </Route>
    </Switch>
  </Router>
);
