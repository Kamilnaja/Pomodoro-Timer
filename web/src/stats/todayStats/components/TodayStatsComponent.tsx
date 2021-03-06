import React from 'react';
import { Badge } from 'react-bootstrap';
import { SearchResult } from '../../../../../types/commonInterfaces';

export const TodayStatsComponent = (props: SearchResult<number>) => {
  return (
    <p className="text-white text-center mt-2">
      Today you have made: <Badge variant="primary">{props.result}</Badge> pomodoros
    </p>
  );
};
