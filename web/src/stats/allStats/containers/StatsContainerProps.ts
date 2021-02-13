import { StatsState } from '../../store/models/StatsInterfaces';

type HandleGetStats = (year: number, month: number) => void;

export type StatsContainerProps = {
  handleGetStats: HandleGetStats;
  stats: StatsState;
};
