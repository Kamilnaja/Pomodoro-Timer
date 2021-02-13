import { PomodorosDoneInDay } from '../../../../types/statisticsInterfaces';
import { HandleGetStats } from '../store/models/StatsInterfaces';

export type StatsComponentProps = { stats: PomodorosDoneInDay[]; handleGetStats: HandleGetStats };
