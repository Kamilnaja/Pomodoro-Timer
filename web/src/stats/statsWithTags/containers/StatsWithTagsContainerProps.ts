import { HandleGetStats, StatsState } from '../../store/models/StatsInterfaces';

export interface StatsWithTagsContainerProps {
  handleGetStatsWithTags: HandleGetStats;
  stats: StatsState;
}
