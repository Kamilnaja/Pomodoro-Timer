import React from 'react';
import { SearchResult } from '../../../../../types/commonInterfaces';

export const TodayStatsComponent = (props: SearchResult<number>) => {
  return <p className="text-white text-center">Today You have made: {props.result} pomodoros</p>;
};
