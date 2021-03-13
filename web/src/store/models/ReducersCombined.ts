export type ReducersCombined = Partial<Record<Reducers, Object>>;

export type Reducers = 'stats' | 'auth' | 'tasksAndNotes' | 'tags' | 'settings' | 'pomodoroCounter';
