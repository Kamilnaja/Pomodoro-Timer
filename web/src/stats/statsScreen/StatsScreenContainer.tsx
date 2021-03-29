import { Container } from 'react-bootstrap';
import { ConnectedStatsContainer } from '../stats/containers/StatsContainer';

export const StatsScreenContainer = () => (
  <Container>
    <h2>Statistics</h2>
    <ConnectedStatsContainer />
  </Container>
);
