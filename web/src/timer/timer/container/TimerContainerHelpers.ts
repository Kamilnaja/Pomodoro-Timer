import { CounterState } from '../../state/enums/timerEnum';
import { TimerState } from '../../state/interfaces/StateInterface';

export const playClickSound = () => {
  const audio = new Audio('sounds/zapsplat_multimedia_game_sound_childrens_ping_high_pitched_soft_007_60676.mp3');
  audio.play();
};

export const playEndSound = () => {
  const audio = new Audio('sounds/zapsplat_multimedia_game_sound_positive_award_bonus_bright_warm_synth_001_60698.mp3');
  audio.play();
};

export const isAnyTimerRunning = (state: TimerState): boolean =>
  state.counterState === CounterState.BREAK_RUNNING || state.counterState === CounterState.POMODORO_RUNNING;
