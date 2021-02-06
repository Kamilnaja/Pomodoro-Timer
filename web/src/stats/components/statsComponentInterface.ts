import { Result } from '../../../../types/statisticsInterfaces';
import { HandleGetStats } from '../containers/statsContainerInterfaces';

export type StatsComponentProps = { stats: Result[]; handleGetStats: HandleGetStats };
