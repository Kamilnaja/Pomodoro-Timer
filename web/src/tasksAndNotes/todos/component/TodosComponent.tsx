import React from 'react';
import { Task } from '../../../../../types/tasksAndNotesInterfaces';
import { CardContainer } from '../../shared/card/container/CardContainer';

export const TodosComponent = (props: { todos: Task[]; isAddingTaskActive: boolean }) => (
  <div>
    <h2>Your things to do</h2>
    {props.isAddingTaskActive && <CardContainer></CardContainer>}

    {!props.todos.length && <div>You have 0 todos, please add something</div>}
    <ul className="list-unstyled">
      {props.todos?.map((item: Task, idx: number) => (
        <li key={idx} className="mb-1" tabIndex={0}>
          <CardContainer task={item}></CardContainer>
        </li>
      ))}
    </ul>
    <hr />
    <h2>Done tasks</h2>
    <ul className="list-unstyled">
      {props.todos
        .filter(item => item.isDone)
        .map((item: Task, idx: number) => (
          <li key={idx} className="mb-4">
            <CardContainer task={item}></CardContainer>
          </li>
        ))}
      <li></li>
    </ul>
  </div>
);
