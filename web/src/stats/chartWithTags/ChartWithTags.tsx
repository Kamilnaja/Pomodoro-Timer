import React from 'react';
import { Line, LineChart } from 'recharts';
import { Pomodoro } from '../../../../types/statsInterfaces';
import { ChartWithTagsProps } from './ChartWithTagsProps';

const getCount = (arr: Pomodoro[], idx: number) =>
  arr.filter(item => new Date(item.createdAt).getDate() === new Date(arr[idx].createdAt).getDate()).length;

export interface PomodorosInDays {
  day: {
    count: number;
    pomodoro: Pomodoro[];
  };
}

export const ChartWithTags = (props: ChartWithTagsProps) => {
  const mappedProps = props.statsWithTags.result.map((item: Pomodoro, idx: number, arr: Pomodoro[]): {
    month: number;
    day: number;
    count: number;
    tagText: string;
    createdAt: string;
  } => ({
    ...item,
    month: new Date(item.createdAt).getMonth(),
    day: new Date(item.createdAt).getDate(),
    count: getCount(arr, idx),
  }));

  return (
    <div>
      <LineChart width={400} height={400} data={mappedProps}>
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
