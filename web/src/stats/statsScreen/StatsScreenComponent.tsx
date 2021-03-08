import { Container } from 'react-bootstrap';
import StatsContainer from '../stats/containers/StatsContainer';
import StatsWithTagsContainer from '../statsWithTags/containers/StatsWithTagsContainer';

export const StatsScreenComponent = () => (
  <Container>
    <h2>Statistics</h2>
    <StatsContainer />
    <StatsWithTagsContainer />
  </Container>
);
