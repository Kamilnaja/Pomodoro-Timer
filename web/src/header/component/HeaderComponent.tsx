import { ModalType } from 'shared/store/enums/modalEnum';
import { openModal } from '../../shared/store/interfaces/modalInterface';
import './headerComponent.scss';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TodosContainer } from '../../todos/containers/TodosContainer';
import Timer from 'timer/containers/Timer';
import StatsContainer from '../../stats/containers/StatsContainer';

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
                <Link to="/todos">Todos</Link>
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
