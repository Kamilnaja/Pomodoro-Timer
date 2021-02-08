import React from 'react';
import { Subtask } from '../../../../../../../../types/tasksAndNotesInterfaces';

export const SubtaskComponent = (props: { subtask: Subtask }) => {
  return <div>{props.subtask.note}</div>;
};
