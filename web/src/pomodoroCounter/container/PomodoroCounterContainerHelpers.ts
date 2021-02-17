import { CounterState } from '../store/enums/timerEnum';

export const playClickSound = () => {
  const audio = new Audio('sounds/zapsplat_multimedia_game_sound_childrens_ping_high_pitched_soft_007_60676.mp3');
  audio.play();
};

export const playEndSound = () => {
  const audio = new Audio('sounds/zapsplat_multimedia_game_sound_positive_award_bonus_bright_warm_synth_001_60698.mp3');
  audio.play();
};

export const isAnyTimerRunning = (counterState: CounterState): boolean =>
  counterState === CounterState.BREAK_RUNNING || counterState === CounterState.POMODORO_RUNNING;
