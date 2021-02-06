import { PomodoroEntry } from '../../../../types/statisticsInterfaces';
import { HandleGetStats } from '../containers/statsContainerInterfaces';

export type StatsComponentProps = { stats: PomodoroEntry[]; handleGetStats: HandleGetStats };
