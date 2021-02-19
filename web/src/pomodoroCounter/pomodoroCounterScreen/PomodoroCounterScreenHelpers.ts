import { CounterState } from '../store/enums/CounterState';
import { CurrentTimer } from '../store/interfaces/PomodoroCounterState';

export const playClickSound = () => {
  const audio = new Audio('sounds/zapsplat_multimedia_game_sound_childrens_ping_high_pitched_soft_007_60676.mp3');
  audio.play();
};

export const playEndSound = () => {
  const audio = new Audio('sounds/zapsplat_multimedia_game_sound_positive_award_bonus_bright_warm_synth_001_60698.mp3');
  audio.play();
};

export const isAnyTimerRunning = (counterState: CounterState): boolean => counterState === CounterState.RUNNING;

export const isPomodoroMode = (currentTimer: CurrentTimer): boolean => currentTimer === CurrentTimer.POMODORO;
