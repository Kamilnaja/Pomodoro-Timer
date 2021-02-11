import { PomodorosDoneInDay } from '../../../../types/statisticsInterfaces';
import { HandleGetStats } from '../containers/statsContainerInterfaces';

export type StatsComponentProps = { stats: PomodorosDoneInDay[]; handleGetStats: HandleGetStats };
