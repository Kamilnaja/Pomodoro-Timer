import { Container } from 'react-bootstrap';
import { ConnectedStatsContainer } from '../stats/containers/StatsContainer';
import { ConnectedStatsWithTagsContainer } from '../statsWithTags/containers/StatsWithTagsContainer';

export const StatsScreenContainer = () => (
  <Container>
    <h2>Statistics</h2>
    <ConnectedStatsContainer />
    <ConnectedStatsWithTagsContainer />
  </Container>
);
