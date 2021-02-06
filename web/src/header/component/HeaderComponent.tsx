import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ModalType} from 'shared/store/enums/modalEnum';
import Timer from 'timer/containers/Timer';
import {openModal} from '../../shared/store/interfaces/modalInterface';
import StatsContainer from '../../stats/containers/StatsContainer';
import TaskAndNotesContainer from '../../tasksAndNotes/taskAndNotesWrapper/taskAndNotesContainer/TaskAndNotesContainer';
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
                <Button variant="link" href="/taskAndNotes">
                  Tasks and notes
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
      <Route path="/taskAndNotes">
        <TaskAndNotesContainer />
      </Route>
      <Route path="/stats">
        <StatsContainer />
      </Route>
      <Route path="/">
        <Timer />
      </Route>
    </Switch>
  </Router>
);
