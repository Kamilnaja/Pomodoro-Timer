import React from 'react';
import { TodayStatsProps } from './todayStatsProps';

export const TodayStatsComponent = (props: TodayStatsProps) => {
  return <p className="text-white text-center">Today You have made: {props.result} pomodoros</p>;
};
