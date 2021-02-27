import { StatsSearchResult } from '../../../../../types/statisticsInterfaces';
import { HandleGetStats } from '../../store/models/StatsInterfaces';

export type StatsComponentProps = { stats: StatsSearchResult; handleGetStats: HandleGetStats };
