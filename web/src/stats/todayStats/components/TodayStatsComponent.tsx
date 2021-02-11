import React from 'react';
import { TodayStatsProps } from './todayStatsProps';

export const TodayStatsComponent = (props: TodayStatsProps) => {
  return (
    <div>
      <p className="text-white">Today You have made: {props.result || '0'} pomodoros</p>
    </div>
  );
};
