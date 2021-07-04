import { Container } from 'react-bootstrap';
import './about.scss';

export const About = () => {
  return (
    <Container className="about">
      <h2>About</h2>
      <h3>What is this page made for?</h3>
      <p>TomatoToDone is an pomodoro application, that helps you achieve more in live and work.</p>
      <p>Due to pomodoro technique, work for 25 minutes and then take 5 minutes break.</p>
      <p>Repeat!</p>
    </Container>
  );
};
