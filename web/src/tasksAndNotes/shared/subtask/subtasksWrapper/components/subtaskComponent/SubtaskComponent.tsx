import React from 'react';
import { Subtask } from '../../../../../../../../types/tasksAndNotesInterfaces';

export const SubtaskComponent = (props: Subtask) => {
  return <div>{props.note}</div>;
};
